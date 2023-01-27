import React, { useState, useEffect } from 'react'
// pkgs: moment
import moment from 'moment'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// pkgs: react-router
import { useHistory } from 'react-router-dom'
// pkgs: react-toastify
import { toast } from 'react-toastify'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import {
  getProfile,
  changeProfile,
  updateProfile
} from '../../../redux/actions/user'
import { resetCart } from '../../../redux/actions/cart'
// components: side
import { SideLeft } from './SideLeft/SideLeft'
import { SideRight } from './SideRight/SideRight'
// components: base
import { ModalConfirm } from '../../../components/base/ModalConfirm/ModalConfirm'
// styles: module
import style from './Profile.module.css'

export const Profile = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user, profile, profileTemp } = useSelector((state) => state.user)
  const defaultDate = moment().format('YYYY-MM-DD')
  const getDate = moment(profileTemp.birth_date).format('YYYY-MM-DD')
  const [date, setDate] = useState(
    profileTemp.birth_date !== null ? getDate : defaultDate
  )
  const [image, setImage] = useState(profileTemp.image)
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const handleShow = () => setShow(!show)
  const handleOpen = () => setOpen(!open)

  const handleDate = (date) => {
    let formatted
    let birthDate
    if (date !== null) {
      formatted = moment(date).format('YYYY-MM-DD') + 'T00:00:00.000Z'
      birthDate = moment(date).format('YYYY-MM-DD')
      setDate(birthDate)
    } else {
      formatted = moment().toISOString()
      birthDate = moment(formatted).format('YYYY-MM-DD')
      setDate(birthDate)
    }
    dispatch(
      changeProfile({
        birth_date: formatted
      })
    )
  }

  const handleImage = (e) => {
    const imageFile = e.target.files[0]
    setImage(imageFile)
    dispatch(
      changeProfile({
        image: URL.createObjectURL(imageFile)
      })
    )
  }

  const newProfile = new FormData()
  newProfile.append('first_name', profileTemp.first_name)
  newProfile.append('last_name', profileTemp.last_name)
  newProfile.append('birth_date', date)
  newProfile.append('gender', profileTemp.gender)
  newProfile.append('address', profileTemp.address)
  newProfile.append('image', image)
  newProfile.append('username', profileTemp.username)
  newProfile.append('email', profileTemp.email)
  newProfile.append('phone', profileTemp.phone)

  const editProfile = async () => {
    await toast.promise(dispatch(updateProfile(profile.id, newProfile)), {
      pending: 'Updating',
      success: 'Profile updated successfully',
      error: 'Update failed'
    })
    dispatch(getProfile(profile.id))
    handleOpen()
  }

  const logOut = () => {
    resetCart()
    localStorage.removeItem('token')
    toast.info('Log out success')
    history.push('/main')
  }

  useEffect(() => {
    dispatch(getProfile(profile.id))
  }, [dispatch, profile.id])

  return (
    <div className={`${style.container}`}>
      <Helmet>
        <title>Your Profile - CoffeeTeria</title>
        <meta name='description' content='This is Profile Page' />
      </Helmet>
      <div className={`${style.main}`}>
        <div className={`container ${style.content}`}>
          <div className={`row ${style.title}`}>
            <h2 className={`text-white`}>
              {user.role === 'admin' ? 'Admin' : 'User'} Profile
            </h2>
          </div>
          <div className={`row card ${style.section}`}>
            <SideLeft
              changeImage={handleImage}
              resetImage={setImage}
              toSave={handleOpen}
              toLogout={handleShow}
            />
            <SideRight changeDate={handleDate} />
          </div>
        </div>
      </div>
      <ModalConfirm
        show={open}
        closeModal={handleOpen}
        text='save the changes'
        eventClick={editProfile}
        btnBack='Cancel'
        btnConfirm='Save'
      />
      <ModalConfirm
        show={show}
        closeModal={handleShow}
        text='log out'
        eventClick={logOut}
        btnBack='Cancel'
        btnConfirm='Log out'
      />
    </div>
  )
}

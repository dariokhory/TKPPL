import React, { useState, useRef } from 'react'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { changeProfile, resetChange } from '../../../../redux/actions/user'
// components: base
import { ModalConfirm } from '../../../../components/base/ModalConfirm/ModalConfirm'
// assets: image
import blank from '../../../../assets/images/blank_profile.jpg'
// styles: module
import style from './SideLeft.module.css'

export const SideLeft = (props) => {
  const ref = useRef()
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const { profile, profileTemp } = useSelector((state) => state.user)

  const handleShow = () => setShow(!show)
  const handleOpen = () => setOpen(!open)

  const removeImage = () => {
    props.resetImage(null)
    dispatch(
      changeProfile({
        image: null
      })
    )
    handleShow()
  }

  const cancelChange = () => {
    dispatch(resetChange())
    handleOpen()
  }

  return (
    <div className={`col-md-3 ${style.container}`}>
      <div className={`${style.section}`}>
        <div className={`text-center ${style.img_box}`}>
          <div className={`${style.img}`}>
            <img
              src={profileTemp.image ? profileTemp.image : blank}
              alt='profile'
            />
          </div>
          <span>
            <b>{profile.username ? profile.username : 'Your Display Name'}</b>
          </span>
          <span>{profile.email}</span>
        </div>
        <div>
          <input
            hidden
            ref={ref}
            onChange={props.changeImage}
            type='file'
            name='image'
            id='image'
          />
          <button
            className={`btn ${style.btn_sm} ${style.btn} ${style.btn_gold}`}
            type='button'
            onClick={() => ref.current.click()}>
            Choose photo
          </button>
        </div>
        <button
          className={`btn ${style.btn_sm} ${style.btn} ${style.btn_brown}`}
          onClick={handleShow}
          type='button'>
          Remove photo
        </button>
        <button
          className={`btn ${style.btn_md} ${style.btn} ${style.btn_white}`}
          type='button'
          disabled>
          Edit Password
        </button>
      </div>
      <div className={`${style.section}`}>
        <span>
          Do you want to save
          <br />
          the change?
        </span>
        <button
          disabled={
            profileTemp.email !== profile.email ||
              profileTemp.address !== profile.address ||
              profileTemp.phone !== profile.phone ||
              profileTemp.username !== profile.username ||
              profileTemp.first_name !== profile.first_name ||
              profileTemp.last_name !== profile.last_name ||
              profileTemp.birth_date !== profile.birth_date ||
              profileTemp.gender !== profile.gender ||
              profileTemp.image !== profile.image
              ? false
              : true
          }
          className={`btn ${style.btn_md} ${style.btn} ${style.btn_brown}`}
          onClick={props.toSave}
          type='button'>
          Save Change
        </button>
        <button
          disabled={
            profileTemp.email !== profile.email ||
              profileTemp.address !== profile.address ||
              profileTemp.phone !== profile.phone ||
              profileTemp.username !== profile.username ||
              profileTemp.first_name !== profile.first_name ||
              profileTemp.last_name !== profile.last_name ||
              profileTemp.birth_date !== profile.birth_date ||
              profileTemp.gender !== profile.gender ||
              profileTemp.image !== profile.image
              ? false
              : true
          }
          className={`btn ${style.btn_md} ${style.btn} ${style.btn_gold}`}
          onClick={handleOpen}
          type='button'>
          Cancel
        </button>
        <button
          className={`btn ${style.btn_md} ${style.btn} ${style.btn_white}`}
          onClick={props.toLogout}
          type='button'>
          Log out
        </button>
      </div>
      <ModalConfirm
        show={open}
        closeModal={handleOpen}
        text='cancel the changes'
        eventClick={cancelChange}
        btnBack='Back'
        btnConfirm='Sure'
      />
      <ModalConfirm
        show={show}
        closeModal={handleShow}
        text='remove the photo'
        eventClick={removeImage}
        btnBack='Cancel'
        btnConfirm='Remove'
      />
    </div>
  )
}

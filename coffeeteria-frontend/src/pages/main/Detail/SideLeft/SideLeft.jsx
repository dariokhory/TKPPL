import React, { useState, useRef } from 'react'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { changeDetail } from '../../../../redux/actions/product'
// components: base
import { ModalConfirm } from '../../../../components/base/ModalConfirm/ModalConfirm'
// assets: image
import blank from '../../../../assets/images/blank_img.jpg'
// assets: icon
import icon_edit from '../../../../assets/icons/icon_edit.svg'
// styles: module
import style from './SideLeft.module.css'

export const SideLeft = (props) => {
  const change = useRef()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const { user } = useSelector((state) => state.user)
  const { detailTemp } = useSelector((state) => state.product)

  const handleShow = () => setShow(!show)
  const deleteImage = () => {
    props.getImage(null)
    dispatch(
      changeDetail({
        image: null
      })
    )
    handleShow()
  }
  return (
    <div className={`col-md-6 ${style.section}`}>
      <input
        onChange={props.changeImage}
        type='file'
        name='image'
        id='image'
        ref={change}
        hidden
      />
      <div className={`position-relative ${style.img}`}>
        <img src={detailTemp.image ? detailTemp.image : blank} alt='item_img' />
        {user.role === 'admin' && (
          <>
            <button
              className={`btn position-absolute top-0 end-0 ${style.btn} ${style.btn_select}`}
              onClick={() => change.current.click()}
              type='buttton'>
              <img src={icon_edit} alt='change' />
            </button>
            <button
              className={`btn position-absolute top-0 end-0 ${style.btn} ${style.btn_reset}`}
              onClick={handleShow}
              type='buttton'>
              <i className='fas fa-trash-alt'></i>
            </button>
          </>
        )}
      </div>
      {user.role !== 'admin' && (
        <span className={`${style.text}`}>
          Delivery only on <b>Monday to Friday</b>
          <br />
          at <strong>01:00 - 07:00 PM</strong>
        </span>
      )}
      <ModalConfirm
        show={show}
        closeModal={handleShow}
        text='delete this image'
        eventClick={deleteImage}
        btnBack='Cancel'
        btnConfirm='Delete'
      />
    </div>
  )
}

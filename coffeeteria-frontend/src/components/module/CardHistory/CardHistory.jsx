import React from 'react'
// modules: numeral-formatter
import { numFormatter } from '../../../utils/numeral'
// assets: image
import blank from '../../../assets/images/blank_img.jpg'
// styles: module
import style from './CardHistory.module.css'
import { ModalConfirm } from '../../base/ModalConfirm/ModalConfirm'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../redux/actions/cart'
import { toast } from 'react-toastify'

export const CardHistory = (props) => {
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  const [productQty, setProductQty] = useState(0)
  const dispatch = useDispatch()

  const handleReOrder = () => {
    dispatch(addCart({ ...props.data, ...props.data }))
    toast.info(`${productName} added to cart`)
    setShow(!show)
    setProductName('')
  }

  const handleShow = () => {
    setShow(!show)
  }

  const reOrder = () => {
    setShow(true)
    setProductName(props.name)
    setProductQty(props.quantity)
  }

  const totalPrice = numFormatter(props.price * props.quantity)
  return (
    <>
      <ModalConfirm
        show={show}
        closeModal={handleShow}
        text={`re-order ${productQty}x ${productName}`}
        eventClick={() => handleReOrder()}
        btnBack='Cancel'
        btnConfirm='confirm'
      />
      <div className={`card ${style.wrapper}`} onClick={() => reOrder()}>
        <div className={style.img_body}>
          <img
            src={props.image ? props.image : blank}
            alt='product_img'
            className={style.img}
          />
        </div>
        <div className={`card-body text-start ${style.text}`}>
          <h5 className={`card-title`}>{props.name}</h5>
          <span className={`mb-0`}>IDR {totalPrice}</span>
          <span className={`card-text mb-auto`}>
            Delivered
          </span>
        </div>
      </div >
    </>
  )
}

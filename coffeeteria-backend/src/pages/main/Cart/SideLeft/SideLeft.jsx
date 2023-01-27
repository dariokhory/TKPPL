import React, { useState } from 'react'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// pkgs: redux-action
import { removeItem } from '../../../../redux/actions/cart'
// modules: numeral-formatter
import { numFormatter } from '../../../../utils/numeral'
// components: base
import { ModalConfirm } from '../../../../components/base/ModalConfirm/ModalConfirm'
// assets: image
import blank from '../../../../assets/images/blank_img.jpg'
// styles: modules
import style from './SideLeft.module.css'

export const SideLeft = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const { cart, subTotal, taxAndFee, shipping, total } = useSelector(
    (state) => state.cart
  )
  const handleShow = () => setShow(!show)
  const handleDelete = (idx) => {
    dispatch(removeItem(idx))
    handleShow()
  }
  return (
    <div className={`col-md-6`}>
      <div className={`card ${style.container}`}>
        <h2 className={`text-center ${style.title}`}>Order Summary</h2>
        <div className={`${style.list}`}>
          {cart.length <= 0 ? (
            <div className={`${style.empty_box}`}>
              <h4>Your cart is empty</h4>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                className={`position-relative ${style.items_list}`}
                key={index}>
                <div className={`${style.img}`}>
                  <img src={!item.image ? blank : item.image} alt='product' />
                </div>
                <div className={style.text}>
                  <div className={`${style.amount}`}>
                    <span>{item.name}</span>
                    <span>x {item.quantity}</span>
                    <span>{item.size}</span>
                  </div>
                  <span>IDR {numFormatter(item.price * item.quantity)}</span>
                </div>
                <button
                  className={`btn position-absolute top-0 start-100 translate-middle ${style.btn_delete}`}
                  onClick={handleShow}>
                  <i className='fas fa-trash-alt'></i>
                </button>
                <ModalConfirm
                  show={show}
                  closeModal={handleShow}
                  text='remove this item from cart'
                  eventClick={() => handleDelete(index)}
                  btnBack='Cancel'
                  btnConfirm='Remove'
                />
              </div>
            ))
          )}
        </div>
        <hr />
        <div className={`${style.list}`}>
          <div className={`${style.detail}`}>
            <span>SUBTOTAL</span>
            <span>IDR {numFormatter(subTotal)}</span>
          </div>
          <div className={`${style.detail}`}>
            <span>TAX & FEES</span>
            <span>IDR {numFormatter(taxAndFee)}</span>
          </div>
          <div className={`${style.detail}`}>
            <span>SHIPPING</span>
            <span>IDR {numFormatter(shipping)}</span>
          </div>
          <div className={`${style.detail} ${style.total}`}>
            <h4>TOTAL</h4>
            <h4>IDR {numFormatter(total)}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

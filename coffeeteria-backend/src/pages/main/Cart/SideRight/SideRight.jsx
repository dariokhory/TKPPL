import React, { useState } from 'react'
// pkgs: react-router
import { useHistory } from 'react-router-dom'
// pkgs: react-toastify
import { toast } from 'react-toastify'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { resetCart } from '../../../../redux/actions/cart'
import { purchaseOrder } from '../../../../redux/actions/order'
import { changePage } from '../../../../redux/actions/product'
// components: base
import { ModalConfirm } from '../../../../components/base/ModalConfirm/ModalConfirm'
// assets: icon
import icon_card from '../../../../assets/icons/icon_card.svg'
import icon_bank from '../../../../assets/icons/icon_bank.svg'
import icon_cash from '../../../../assets/icons/icon_cash.svg'
// styles: module
import style from './SideRight.module.css'

export const SideRight = () => {
  const history = useHistory()
  const { cart, total } = useSelector((state) => state.cart)
  const { id } = useSelector((state) => state.user.user)
  const { address, phone } = useSelector((state) => state.user.profile)
  const [payment, setPayment] = useState('')
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(!show)
  const checkNumber = (number) => {
    let phoneNumber = ''
    if (phone.includes('+62')) {
      phoneNumber = number.slice(3)
      console.log(phoneNumber);
    } else if (phone.indexOf('0') === 0) {
      phoneNumber = number.slice(1)
    }
    return phoneNumber
  }

  const dispatch = useDispatch()
  const paymentPick = (e) => {
    setPayment(e.target.value)
  }
  const handlePurchase = async (payment) => {
    await toast.promise(
      dispatch(purchaseOrder({ id, total, payment, items: cart })), {
      pending: 'Purchasing',
      success: 'Item(s) purchased successfully',
      error: 'Purchase failed'
    })
    dispatch(changePage(1))
    history.push('/main/product')
    dispatch(resetCart())
  }
  return (
    <div className={`col-md-5 ${style.container}`}>
      <ModalConfirm
        show={show}
        closeModal={handleShow}
        text='purchase all the item(s)'
        eventClick={() => handlePurchase(payment)}
        btnBack='Cancel'
        btnConfirm='Purchase'
      />
      <div className={`${style.section}`}>
        <div className={`${style.title}`}>
          <h4 className='text-white'>Address details</h4>
          <span onClick={() => history.push('/main/profile')}>edit</span>
        </div>
        <div className={`card ${style.card}`}>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <b>Delivery</b> to
            </li>
            <li className={`list-group-item ${style.address}`}>
              {address ? address : 'You have not set down your address yet'}
            </li>
            <li className='list-group-item'>
              {phone ? `+62 ${checkNumber(phone)}` : `Your mobile number is empty`}
            </li>
          </ul>
        </div>
      </div>
      <div className={`${style.section} ${style.payment}`}>
        <h4 className='text-white'>Payment method</h4>
        <div className={`card ${style.card}`}>
          <div className={`list-group list-group-flush`}>
            <div className={`list-group-item form-check ${style.pay_method}`}>
              <input
                onChange={(e) => paymentPick(e)}
                className='form-check-input shadow-none'
                type='radio'
                value='Card'
                id='card'
                name='payment'
              />
              <label className='form-check-label' htmlFor='card'>
                <img
                  className={`${style.icon_pay} ${style.icon_card}`}
                  src={icon_card}
                  alt='icon_bank'
                />
                Card
              </label>
            </div>
            <div className={`list-group-item form-check ${style.pay_method}`}>
              <input
                onChange={(e) => paymentPick(e)}
                className='form-check-input shadow-none'
                type='radio'
                value='Bank'
                id='bank'
                name='payment'
              />
              <label className='form-check-label' htmlFor='bank'>
                <img
                  className={`btn ${style.icon_pay} ${style.icon_bank}`}
                  src={icon_bank}
                  alt='icon_bank'
                />
                Bank account
              </label>
            </div>
            <div className={`list-group-item form-check ${style.pay_method}`}>
              <input
                onChange={(e) => paymentPick(e)}
                className='form-check-input shadow-none'
                type='radio'
                value='COD'
                id='COD'
                name='payment'
              />
              <label className='form-check-label' htmlFor='COD'>
                <img
                  className={`btn ${style.icon_pay} ${style.icon_cash}`}
                  src={icon_cash}
                  alt='icon_bank'
                />
                Cash on delivery
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`btn ${style.btn_brown}`}
        onClick={handleShow}
        type='button'
        disabled={(cart.length <= 0 || payment === '') ? 'disabled' : ''}>
        Confirm and Pay
      </button>
    </div>
  )
}

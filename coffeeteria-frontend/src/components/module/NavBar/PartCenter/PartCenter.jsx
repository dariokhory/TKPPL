import React from 'react'
// pkgs: react-router
import { Link, useLocation } from 'react-router-dom'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { changePage } from '../../../../redux/actions/product'
import { updatePage } from '../../../../redux/actions/order'
// styles: module
import style from './PartCenter.module.css'

export const PartCenter = () => {
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { user } = useSelector((state) => state.user)
  return (
    <div className={`navbar-nav col-lg-4 ${style.center}`}>
      <div className='nav-link'>
        <Link
          to='/main'
          style={link}
          className={
            pathname === '/main' ? `${style.page_on}` : `${style.page}`
          }>
          Home
        </Link>
      </div>
      <div className='nav-link'>
        <Link
          to={`/main/product`}
          style={link}
          onClick={() => dispatch(changePage(1))}
          className={
            pathname !== '/main' &&
              pathname !== '/main/product/' &&
              pathname !== '/main/cart' &&
              pathname !== '/main/history' &&
              pathname !== '/main/profile'
              ? `${style.page_on}`
              : `${style.page}`
          }>
          Product
        </Link>
      </div>
      <div className='nav-link'>
        <Link
          to={'/main/cart'}
          style={link}
          className={
            pathname === '/main/cart' ? `${style.page_on}` : `${style.page}`
          }>
          {user.role !== 'admin' ? 'Your Cart' : 'Orders'}
        </Link>
      </div>
      <div className='nav-link'>
        <Link
          to='/main/history'
          style={link}
          onClick={() => dispatch(updatePage(1))}
          className={
            pathname === '/main/history' ? `${style.page_on}` : `${style.page}`
          }>
          History
        </Link>
      </div>
    </div>
  )
}

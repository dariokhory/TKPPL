import React from 'react'
// pkgs: react-router
import { useLocation, useHistory, Link } from 'react-router-dom'
// assets: image
import logo from '../../../assets/icons/icon.svg'
// styles: module
import style from './NavAuth.module.css'

export const NavAuth = () => {
  const { pathname } = useLocation()
  const { location } = useHistory()

  return (
    <nav className={`navbar ${style.wrapper}`}>
      <div className={`container ${style.container}`}>
        <Link to='/' className={`navbar-brand ${style.brand}`}>
          <img alt='CoffeeTeria' height='30px' width='30px' src={logo} />
          <span>CoffeeTeria</span>
        </Link>
        <Link
          to={
            location.pathname === '/auth/sign-up'
              ? '/auth/sign-in'
              : '/auth/sign-up'
          }
        >
          <button className={`btn ${style.btn_gold}`} type='button'>
            {pathname === '/auth/sign-up' ? 'Login' : 'Sign Up'}
          </button>
        </Link>
      </div>
    </nav>
  )
}

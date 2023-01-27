import React from 'react'
// pkgs: react-router
import { Link, useLocation } from 'react-router-dom'
// assets: image
import logo from '../../../assets/icons/icon.svg'
// assets: icon
import icon_fb from '../../../assets/icons/icon_fb.svg'
import icon_twt from '../../../assets/icons/icon_twt.svg'
import icon_ig from '../../../assets/icons/icon_ig.svg'
// styles: module
import style from './Footer.module.css'

export const Footer = (props) => {
  const { pathname } = useLocation()
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  return (
    <div className={style.bg}>
      <div className={`container ${style.wrapper}`}>
        {(pathname === '/api/v1/auth/sign-in' ||
          pathname === '/auth/sign-up' ||
          pathname === '/main') && (
            <div className={`${style.card}`}>
              <div className={`${style.card_box}`}>
                {pathname === '/main' ? (
                  <div className={`${style.card_side}`}>
                    <h5>
                      Check our promo
                      <br />
                      today!
                    </h5>
                    <span>Let's see the deals</span>
                  </div>
                ) : (
                  <div className={`${style.card_side}`}>
                    <h5>
                      Get your member
                      <br />
                      card now!
                    </h5>
                    <span>Let's join with our member and enjoy the deals</span>
                  </div>
                )}
                <div className={`${style.card_side}`}>
                  <button className='btn' type='button' disabled>
                    {pathname === '/main' ? 'See Promo' : 'Create Now'}
                  </button>
                </div>
              </div>
            </div>
          )}
        <div
          className={`row ${pathname === '/auth/sign-in' ||
            pathname === '/auth/sign-up' ||
            pathname === '/main'
            ? style.main_other
            : style.main
            }`}>
          <div className={`col-lg-5 ${style.left}`}>
            <Link to='/main' style={link} className={`${style.brand}`}>
              <img alt='CoffeeTeria' height='30px' width='30px' src={logo} />
              <span>CoffeeTeria</span>
            </Link>
            <div className={`${style.desc}`}>
              <p>
                CoffeeTeria is a store that sells some good
                <br />
                meals, and especially coffee. We provide
                <br />
                high quality beans
              </p>
              <div>
                <img
                  className={`${style.btn_share}`}
                  src={icon_fb}
                  alt='btn_fb'
                />
                <img
                  className={`${style.btn_share}`}
                  src={icon_twt}
                  alt='btn_tw'
                />
                <img
                  className={`${style.btn_share}`}
                  src={icon_ig}
                  alt='btn_ig'
                />
              </div>
              <span>&copy;2022CoffeeStore</span>
            </div>
          </div>
          <div className={`col-lg-4 ${style.right}`}>
            <div className={`${style.section}`}>
              <b className={`${style.title}`}>Product</b>
              <span>Download</span>
              <span>Pricing</span>
              <span>Locations</span>
              <span>Countries</span>
              <span>Blog</span>
            </div>
            <div className={`${style.section}`}>
              <b className={`${style.title}`}>Engage</b>
              <span>CoffeeTeria ?</span>
              <span>FAQ</span>
              <span>About Us</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

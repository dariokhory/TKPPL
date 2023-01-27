import React from 'react'
// pkgs: react-router
import { Link } from 'react-router-dom'
// assets: icon
import icon_user from '../../../../assets/icons/icon_user.svg'
import icon_place from '../../../../assets/icons/icon_place.svg'
import icon_like from '../../../../assets/icons/icon_like.svg'
// styles: module
import style from './SectionUpper.module.css'

export const SectionUpper = () => {
  return (
    <div className={`text-white ${style.container}`}>
      <div className={`container ${style.main}`}>
        <div className={`${style.content}`}>
          <h1>
            Start Your Day with
            <br />
            Coffee and Good Meals
          </h1>
          <p>
            We provide high quality beans, good taste, and healthy
            <br />
            meals made by love just for you. Start your day with us
            <br />
            for a bigger smile!
          </p>
          <Link to='/auth/sign-up'>
            <button className={`btn ${style.btn_gold}`} type='button'>
              Get Started
            </button>
          </Link>
        </div>
        <div className={`text-black ${style.card}`}>
          <div className={`row ${style.card_row}`}>
            <div className={`col-md-3 ${style.card_part}`}>
              <div className={`${style.icon}`}>
                <img src={icon_user} alt='icon_user' />
              </div>
              <div className={`${style.text}`}>
                <h6>90+</h6>
                <span>Staff</span>
              </div>
            </div>
            <div className={`col-md-5 ${style.card_part} ${style.line}`}>
              <div className={`${style.icon}`}>
                <img src={icon_place} alt='icon_place' />
              </div>
              <div className={`${style.text}`}>
                <h6>30+</h6>
                <span>Stores</span>
              </div>
            </div>
            <div className={`col-md-3 ${style.card_part}`}>
              <div className={`${style.icon}`}>
                <img src={icon_like} alt='icon_like' />
              </div>
              <div className={`${style.text}`}>
                <h6>800+</h6>
                <span>Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

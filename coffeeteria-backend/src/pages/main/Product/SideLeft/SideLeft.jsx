import React from 'react'
// styles: module
import style from './SideLeft.module.css'

export const SideLeft = () => {
  return (
    <div className={`col-md-3 px-0 ${style.wrapper}`}>
      <div className={`${style.container}`}>
        <div className={`mb-auto ${style.header}`}>
          <h4>Promo Today</h4>
          <span>
            Coupons will be updated every weeks
          </span>
          <span>
            Check them out!
          </span>
        </div>
        <div className={`${style.coupon}`}>
          <h4>
            We are sorry
          </h4>
          <span>
            Coupons are not available for now yet
          </span>
        </div>
        <div className={style.terms}>
          <span>
            <b>Terms and Codition</b>
          </span>
          <li>1. You can only apply 1 coupon per day</li>
          <li>2. It only for dine in</li>
          <li>3. Buy 1 get 1 only for new user</li>
          <li>4. Should make member card to apply coupon</li>
        </div>
      </div>
    </div>
  )
}

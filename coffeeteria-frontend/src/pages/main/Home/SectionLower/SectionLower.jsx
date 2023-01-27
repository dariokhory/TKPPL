import React from 'react'
// assets: image
import illust_home from '../../../../assets/images/illust_home.png'
// assets: icon
import icon_check from '../../../../assets/icons/icon_check.svg'
// styles: module
import style from './SectionLower.module.css'

export const SectionLower = () => {
  return (
    <div className={`container px-0 ${style.container}`}>
      <div className={`col ${style.main}`}>
        <div className={`${style.side_left}`}>
          <img src={illust_home} alt='illustration' />
        </div>
        <div className={`${style.side_right}`}>
          <div>
            <h3>
              We Provide Good Coffee<br />
              and Healthy Meals
            </h3>
            <span>
              You can explore the menu that we provide with fun and
              <br />
              have their own taste and make your day better
            </span>
          </div>
          <div className={`${style.list}`}>
            <div>
              <img src={icon_check} alt="icon-check" />
              <span>High quality beans</span>
            </div>
            <div>
              <img src={icon_check} alt="icon-check" />
              <span>Healthy meals, you can request the ingredients</span>
            </div>
            <div>
              <img src={icon_check} alt="icon-check" />
              <span>
                Chat with our staff to get better experience for ordering
              </span>
            </div>
            <div>
              <img src={icon_check} alt="icon-check" />
              <span>
                Free member card with a minimum purchase of IDR 200.000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useRef } from 'react'
// assets: image
import icon_photo from '../../../../assets/icons/icon_photo.svg'
// styles: module
import style from './SideLeft.module.css'

export const SideLeft = (props) => {
  const ref = useRef()
  return (
    <div className={`col-md-5 ${style.wrapper}`}>
      <div className={`${style.img}`}>
        {props.preview !== null ? (
          <img
            src={props.preview}
            alt='preview'
            className={`${style.preview}`}
          />
        ) : (
          <img src={icon_photo} alt='blank' className={`${style.blank}`} />
        )}
      </div>
      <div>
        <input
          hidden
          ref={ref}
          onChange={props.getImage}
          type='file'
          name='image'
          id='image'
        />
        <button
          className={`btn ${style.btn}`}
          type='button'
          onChange={props.getImage}
          onClick={() => ref.current.click()}>
          Choose from gallery
        </button>
      </div>
    </div>
  )
}

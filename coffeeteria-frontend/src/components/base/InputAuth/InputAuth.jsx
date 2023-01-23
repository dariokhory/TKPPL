import React from 'react'
// styles: module
import style from './InputAuth.module.css'

export const InputAuth = (props) => {
  return (
    <div className={`${style.box}`}>
      <label className='form-label' htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={`form-control`}
        placeholder={props.placeholder}
        onChange={props.changeEvent}
        type={props.type}
        name={props.name}
        id={props.id}
        required={props.required}
      />
    </div>
  )
}

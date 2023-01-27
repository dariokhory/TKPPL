import React from 'react'
// pkgs: react-router
import { useHistory, useLocation } from 'react-router-dom'
// pkgs: react-redux
import { useDispatch } from 'react-redux'
// modules: redux-action
import { changePage } from '../../../redux/actions/product'
// styles: module
import style from './TabsBar.module.css'

export const TabsBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { search } = useLocation()

  const handlePage = () => {
    dispatch(changePage(1))
  }

  return (
    <ul className={`nav ${style.wrapper}`}>
      <li
        className={`nav-item ${search === '' ? style.tabs_on : style.tabs}`}
        onClick={() => {
          handlePage()
          history.push(`/main/product`)
        }}>
        <span className='nav-link' aria-current='page'>
          All Product
        </span>
      </li>
      <li
        className={`nav-item ${search === '?filter=1' ? style.tabs_on : style.tabs}`}
        onClick={() => {
          handlePage()
          history.push(`/main/product?filter=${1}`)
        }}>
        <span className='nav-link'>Coffee</span>
      </li>
      <li
        className={`nav-item ${search === '?filter=2' ? style.tabs_on : style.tabs}`}
        onClick={() => {
          handlePage()
          history.push(`/main/product?filter=${2}`)
        }}>
        <span className='nav-link'>Non Coffee</span>
      </li>
      <li
        className={`nav-item ${search === '?filter=3' ? style.tabs_on : style.tabs}`}
        onClick={() => {
          handlePage()
          history.push(`/main/product?filter=${3}`)
        }}>
        <span className='nav-link'>Foods</span>
      </li>
      <li
        className={`nav-item ${search === '?filter=4' ? style.tabs_on : style.tabs}`}
        onClick={() => {
          handlePage()
          history.push(`/main/product?filter=${4}`)
        }}>
        <span className='nav-link'>Add-on</span>
      </li>
    </ul >
  )
}

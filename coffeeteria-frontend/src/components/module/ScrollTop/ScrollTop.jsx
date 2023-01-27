import React from 'react';
// pkgs: react-scroll-to-up
import ScrollToTop from 'react-scroll-to-top'
// assets: icon
import { ReactComponent as Icon } from '../../../assets/icons/icon_arrow.svg'
// styles: module
import style from './ScrollTop.module.css'

export const ScrollTop = () => {
  return (
    <>
      <ScrollToTop
        className={`btn ${style.btn}`}
        component={<Icon />}
        smooth
      />
    </>
  )
};

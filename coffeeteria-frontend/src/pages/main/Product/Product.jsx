import React from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// components: side
import { SideLeft } from './SideLeft/SideLeft'
import { SideRight } from './SideRight/SideRight'
// styles: module
import style from './Product.module.css'

export const Product = () => {
  return (
    <div className={`col ${style.container}`}>
      <Helmet>
        <title>Products - CoffeeTeria</title>
        <meta name='description' content='This is Product Page' />
      </Helmet>
      <div className={`container-fluid ${style.main}`}>
        <div className='row'>
          <SideLeft />
          <SideRight />
        </div>
      </div>
    </div>
  )
}

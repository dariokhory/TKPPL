import React from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// styles: module
import style from './NotFound.module.css'

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page: Not Found - CoffeeTeria</title>
        <meta name='description' content='Not Found' />
      </Helmet>
      <div className={`text-center ${style.body}`}>
        <h1>Page: Not Found</h1>
        <h2>404</h2>
        <h4>Page that you want to access is not exist <br />
          You probably not type the URL correctly</h4>
      </div>
    </>
  )
}

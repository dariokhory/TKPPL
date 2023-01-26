import React from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// components: section
import { SectionUpper } from './SectionUpper/SectionUpper'
import { SectionLower } from './SectionLower/SectionLower'

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - CoffeeTeria</title>
        <meta name='description' content='Home Page' />
      </Helmet>
      <div>
        <SectionUpper />
        <SectionLower />
      </div>
    </>
  )
}

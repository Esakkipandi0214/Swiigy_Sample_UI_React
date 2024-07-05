import React from 'react'
import NavBar from './navBar'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'
import SectionFive from '../../sectionFive'
import SectionSix from './sectionSix'
import SectionSeven from './sectionSeven'
import Footer from './footer'

const home = () => {
  return (
    <div className='appContainer h-full bg-white overflow-x-hidden'>
      <NavBar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <Footer/>
    </div>
  )
}

export default home
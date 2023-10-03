import React, { Fragment } from 'react'
import Landing from './Landing'
import Features from './Features'
import StayProductive from './StayProductive'
import Testimonials from './Testimonials'
import GetStarted from './GetStarted'


const Home = () => {
  return (
    <Fragment>
      <Landing/>
      <Features/>
      <StayProductive/>
      <Testimonials/>
      <GetStarted/>
    </Fragment>
  )
}

export default Home
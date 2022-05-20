import React from 'react'
import Bottom from '../components/Bottom'
import bottom from '../components/Bottom'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Rating from '../components/Rating'
import Reviewer from '../components/Reviewer'
import "./Pages.scss"

const Pages = () => {
  return (
    <div className="pages">
      <Hero/>
      <Reviewer/>
      <Rating/>
      <Form/>
      <Bottom/>
      <Footer/>
    </div>
  )
}

export default Pages
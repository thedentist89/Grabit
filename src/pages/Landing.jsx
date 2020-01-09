import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import HowTo from '../components/HowTo'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Landing = ({ signIn }) => (
  <div>
    <Header signIn={signIn} />
    <HowTo />
    <CallToAction />
    <Footer />
  </div>
)

Landing.propTypes = {
  signIn: PropTypes.func.isRequired
}

export default Landing

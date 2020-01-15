import React from 'react'

const CallToAction = () => {
  return (
    <div className="cta">
      <h2 className="cta__heading">Ready to order?</h2>
      <div className="cta__paragraph-wrapper">
        <p className="cta__paragraph">
          Browse local restaurants and businesses available in your area for delivery by entering
          your address below.
        </p>
      </div>
      <div className="cta__input">
        <button type="button" className="button button__invert">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default CallToAction

import React from 'react'
import send from '../img/send.svg'

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
        <input type="text" className="cta__control" placeholder="mail@exemple.com" />
        <button type="button" className="cta__send">
          Send
          <img className="ml-3" src={send} alt="send" width="10" />
        </button>
      </div>
    </div>
  )
}

export default CallToAction

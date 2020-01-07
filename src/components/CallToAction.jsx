import React from 'react'
import styles from '../styles/CallToAction.module.css'
import send from '../img/send.svg'

const CallToAction = () => {
  return (
    <div className={styles.cta}>
      <h2 className={styles['cta-heading']}>Ready to order?</h2>
      <div className={styles['cta-paragraph-wrapper']}>
        <p className={styles['cta-paragraph']}>
          Browse local restaurants and businesses available in your area for delivery by entering
          your address below.
        </p>
      </div>
      <div className={styles.input}>
        <input type="text" className={styles.control} placeholder="mail@exemple.com" />
        <button type="button" className={styles.send}>
          Send
          <img className="ml-3" src={send} alt="send" width="10" />
        </button>
      </div>
    </div>
  )
}

export default CallToAction

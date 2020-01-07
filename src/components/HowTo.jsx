import React from 'react'
import scooter from '../img/scooter.svg'
import shop from '../img/shop.svg'
import pack from '../img/package.svg'
import styles from '../styles/HowTo.module.css'

const HowTo = () => (
  <div className="container">
    <h2 className={styles.sectionHeading}>How it works</h2>
    <div className="row margin-bottom">
      <div className="col-md-6 text-center order-md-last">
        <img src={shop} className={styles.image} alt="shop" />
      </div>
      <div className="col-md-6">
        <h2 className={styles.featureHeading}>We do more than delivery.</h2>
        <p className={styles.featureParagraph}>
          Stocking Your Restaurant Kitchen Finding Reliable Sellers Of Cookware In The Brick And
          Mortar World
        </p>
      </div>
    </div>
    <div className="row margin-bottom">
      <div className="col-md-6 text-center">
        <img src={scooter} className={styles.image} alt="scooter" />
      </div>
      <div className="col-md-6">
        <h2 className={styles.featureHeading}>Fast Delivery with tracking.</h2>
        <p className={styles.featureParagraph}>
          Breast Augmentation Breast Enlargement Medical Tourism In The Philippine
        </p>
      </div>
    </div>
    <div className="row margin-bottom">
      <div className="col-md-6 text-center order-md-last">
        <img src={pack} className={styles.image} alt="pack" />
      </div>
      <div className="col-md-6">
        <h2 className={styles.featureHeading}>Stay at home we do it for you</h2>
        <p className={styles.featureParagraph}>
          Planning Helps Make A Party Perfect Keep Dinner Simple Heat Frozen Vegetables And
          Precooked Smoked Sausage Together For A Complete Meal
        </p>
      </div>
    </div>
  </div>
)

export default HowTo

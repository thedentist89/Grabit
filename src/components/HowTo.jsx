import React from 'react'
import scooter from '../img/scooter.svg'
import shop from '../img/shop.svg'
import pack from '../img/package.svg'
import styles from '../styles/HowTo.module.css'

const HowTo = () => (
  <div className="container">
    <h2 className={styles.sectionHeading}>How it works</h2>
    <div className="row" style={{ marginBottom: 100 }}>
      <div className="col-md-6">
        <h2 className={styles.featureHeading}>We do more than delivery .</h2>
        <p className={styles.featureParagraph}>
          Stocking Your Restaurant Kitchen Finding Reliable Sellers Of Cookware In The Brick And
          Mortar World
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img src={shop} alt="shop" />
      </div>
    </div>
    <div className="row" style={{ marginBottom: 100 }}>
      <div className="col-md-6 text-center">
        <img src={scooter} alt="shop" />
      </div>
      <div className="col-md-6">
        <h2 className={styles.featureHeading}>Fast Delivery with tracking.</h2>
        <p className={styles.featureParagraph}>
          Breast Augmentation Breast Enlargement Medical Tourism In The Philippine
        </p>
      </div>
    </div>
    <div className="row" style={{ marginBottom: 100 }}>
      <div className="col-md-6 ">
        <h2 className={styles.featureHeading}>Stay at home we do it for you</h2>
        <p className={styles.featureParagraph}>
          Planning Helps Make A Party Perfect Keep Dinner Simple Heat Frozen Vegetables And
          Precooked Smoked Sausage Together For A Complete Meal
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img src={pack} alt="shop" />
      </div>
    </div>
  </div>
)

export default HowTo

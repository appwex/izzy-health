import React from 'react'
import stl from './comparePricing.module.scss'
import IzzyButton from 'components/izzyButton/'
import { BUTTON_TYPE } from 'components/izzyButton/IzzyButton'

const PricingCard = props => {
  return (
    <div className={stl.card}>
      <h3 className={stl.card__header}>Pricing</h3>
      <p className={stl.card__subscription}>
        Our Subscription <span>$10</span> cost vs 1 time average appointment
        cost in countries
      </p>
      <div className={stl.average}>
        <div className={stl.info}>
          <h3>Average Price</h3>
          <p>National average price for a cear team per visit</p>
        </div>

        <p className={stl.price}>
          <span>$</span>
          {props.average}
        </p>
      </div>
      <div className={stl.doctors}>
        <div>
          <p className={stl.doctor}>Physician </p>
          <p className={stl.price}>
            <span>$</span>
            {props.physician}
          </p>
        </div>
        <div>
          <p className={stl.doctor}>Psychologist </p>
          <p className={stl.price}>
            <span>$</span>
            {props.psychologist}
          </p>
        </div>
        <div>
          <p className={stl.doctor}> Nutritionist</p>
          <p className={stl.price}>
            <span>$</span>
            {props.nutritionist}
          </p>
        </div>
      </div>
      <IzzyButton
        label="Get Started"
        variant={BUTTON_TYPE.btnPrimary}
        btnType={BUTTON_TYPE.btnRounded}
      />
    </div>
  )
}
PricingCard.defaultProps = {
  average: 85,
  physician: 45,
  psychologist: 16,
  nutritionist: 24,
}
export default PricingCard

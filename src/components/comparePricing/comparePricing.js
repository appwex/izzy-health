import React from 'react'
import stl from './comparePricing.module.scss'
import PricingCard from './pricingCard'
import {
  Nigeria,
  India,
  Mexico,
  CostaRica,
  Colombia,
  Dominican,
} from 'assets/svg'

// const counrties = {
//   Nigeria: {
//     average: '62',
//     physician: '35',
//     psychologist: '3',
//     nutritionist: '24',
//   },
//   India: {
//     average: '82',
//     physician: '45',
//     psychologist: '13',
//     nutritionist: '24',
//   },
//   Mexico: {
//     average: '85',
//     physician: '45',
//     psychologist: '16',
//     nutritionist: '24',
//   },
//   CostaRica: {
//     average: '81',
//     physician: '45',
//     psychologist: '12',
//     nutritionist: '24',
//   },
//   Colombia: {
//     average: '80',
//     physician: '40',
//     psychologist: '16',
//     nutritionist: '24',
//   },
//   Dominican: {
//     average: '75',
//     physician: '45',
//     psychologist: '16',
//     nutritionist: '14',
//   },
// }

const ComparePricing = props => {
  return (
    <section className={stl.container}>
      <div className={stl.pricing}>
        <div className={stl.countries}>
          <div className={stl.country}>
            <Nigeria />
            <span>Nigeria</span>
          </div>
          <div className={stl.country}>
            <India />
            <span>India</span>
          </div>
          <div className={stl.country}>
            <Mexico />
            <span>Mexico</span>
          </div>
          <div className={stl.country}>
            <CostaRica />
            <span>Costa Rica</span>
          </div>
          <div className={stl.country}>
            <Colombia />
            <span>Colombia</span>
          </div>
          <div className={stl.country}>
            <Dominican />
            <span>Dominican Republic</span>
          </div>
        </div>
        <PricingCard />
      </div>
    </section>
  )
}

export default ComparePricing

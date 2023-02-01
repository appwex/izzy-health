import React, { useState } from 'react'
import stl from './comparePricing.module.scss'
import clsx from 'clsx'
import PricingCard from './pricingCard'
import rawData from './rawData'

import { India, Mexico, Nigeria } from './assets'

const ComparePricing = () => {
  const [element, setData] = useState(rawData[0])

  const countryData = rawData.map(element => {
    const parentToChild = () => {
      setData(element)
    }
    return (
      <div
        key={element.index}
        className={clsx(stl.country)}
        onClick={() => parentToChild(element.country)}
      >
        {/* flag icon */}
        <India />
        {/* <img src={`./assets/${element.flagIcon}`} />  DOESNT'T WORK */}

        {/* country name */}
        <span>{element.country}</span>
      </div>
    )
  })

  return (
    <section className={stl.container}>
      <div className={stl.pricing}>
        {/* list of countries (flag and name) */}
        <div className={stl.countries}>{countryData}</div>
        {/* pricing card dinamically changing */}
        <PricingCard {...element} />
      </div>
    </section>
  )
}

export default ComparePricing

{
  /* default values
          <div
            className={clsx(
              stl.country 
              // data.country === 'Nigeria' ? stl.active : ''
            )}
            onClick={() => parentToChild('Nigeria')}
          >
            <Nigeria />
            <span>Nigeria</span>
          </div>
     
          <div
            className={clsx(stl.country)}
            onClick={() => parentToChild('India')}
          >
            <India />
            <span>India</span>
          </div>
          <div className={stl.country} onClick={() => parentToChild('Mexico')}>
            <Mexico />
            <span>Mexico</span>
          </div>
          <div
            className={stl.country}
            onClick={() => parentToChild('CostaRica')}
          >
            <CostaRica />
            <span>Costa Rica</span>
          </div>
          <div
            className={stl.country}
            onClick={() => parentToChild('Colombia')}
          >
            <Colombia />
            <span>Colombia</span>
          </div>
          <div
            className={stl.country}
            onClick={() => parentToChild('Dominican')}
          >
            <Dominican />
            <span>Dominican Republic</span>
          </div>*/
}

import React, { useState } from 'react'
import stl from './comparePricing.module.scss'
import clsx from 'clsx'
import PricingCard from './pricingCard'
import rawData from './rawData'

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
        onClick={() => {
          parentToChild(element.country)
        }}
      >
        {/* flag icon */}
        <img
          src={`../../assets/${element.flagIcon}`}
          alt="icon"
          // width={50}
          // height={50}
        />
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

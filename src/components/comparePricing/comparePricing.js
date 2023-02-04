import React, { useState } from 'react'
import stl from './comparePricing.module.scss'
import clsx from 'clsx'
import PricingCard from './pricingCard'
import rawData from './rawData'
import Image from 'next/image'

const ComparePricing = () => {
  const [element, setData] = useState(rawData[0])
  const [activeIndex, setActiveIndex] = useState(rawData[0].index)

  const countryData = rawData.map(element => {
    const parentToChild = () => {
      setData(element)
      setActiveIndex(element.index)
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
        <Image
          src={`../../assets/${element.flagIcon}`}
          alt={`${element.country} icon`}
          width={50}
          height={50}
        />
        {/* country name */}
        <span className={`${activeIndex === element.index ? stl.active : ''}`}>
          {element.country}
        </span>
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

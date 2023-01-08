import React from 'react'
import stl from './Dontneed.module.scss'
import Image from 'next/image'
import img from 'assets/images/dontneed-bg.png'

const DontneedImg = () => {
  return <Image src={img} layout="responsive" className={stl.dontneedImg} />
}

const Dontneed = () => {
  return (
    <section id="care-section" className={stl.Dontneed}>
      <div className={stl.container}>
        <div className={stl.careWrapper}>
          <div className={stl.left}>
            <div className={stl.dontneedImg}>
              <DontneedImg />
            </div>
          </div>
          <div className={stl.right}>
            <h2>You don’t need to</h2>
            <ul>
              <li>Schedule an appointment </li>
              <li>Give up a day of work</li>
              <li>
                Ask for medical records. Your records say with you at all times.{' '}
              </li>
              <li>
                Continue to see new doctors. Your care team is with you longterm{' '}
              </li>
            </ul>
            <div className={stl.shapes}>
              <span className="shape"></span>
              <span className="shape"></span>
              <span className="shape"></span>
              <span className="shape"></span>
              <div className={stl.smallShapes}>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dontneed

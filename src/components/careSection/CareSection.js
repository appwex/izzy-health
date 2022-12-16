import Button from 'components/button'
import stl from './CareSection.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import { Nutrionist, Physician, Psychologist } from '../../assets/svg/index'

const CareSection = () => {
  return (
    <section id="care-section" className={clsx(stl.careSection)}>
      <div className={clsx(stl.flexColStart)}>
        <div className={clsx(stl.careSectionHeader)}>
          <h1>Medical Care Team</h1>
          <span>Primary Health Care</span>
        </div>
        <div className={clsx(stl.flexStart, stl.careSectionBody)}>
          <div className={clsx(stl.flexColStart)}>
            <div className={clsx(stl.contactText)}>
              <p>
                Contact our Doctor for the first time <span>Free</span>{' '}
                
                  <Button label="Let's Start" btnType="rounded" />
              
              </p>
            </div>
            <div className={clsx(stl.contactText2)}>
              <p>
                Lets compare our service pricing with a few countries we serve
              </p>
            </div>
          </div>
          <div className={clsx(stl.flexStart, stl.doctors)}>
            <div className={clsx(stl.spaceBetween)}>
              <div className={clsx(stl.flexCenterCol)}>
                <Physician />
              </div>
              <span>Physician</span>
            </div>
            <div className={clsx(stl.spaceBetween)}>
              <div className={clsx(stl.flexCenterCol)}>
                <Psychologist />
              </div>
              <span>Psychologist</span>
            </div>
            <div className={clsx(stl.spaceBetween)}>
              <div className={clsx(stl.flexCenterCol)}>
                <Nutrionist />
              </div>
              <span>Nutrionist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareSection

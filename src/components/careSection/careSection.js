import clsx from 'clsx'
import stl from './careSection.module.scss'
import Link from 'next/link'
import Physician from 'assets/svg/physician.svg'
import Psychologist from 'assets/svg/psychologist.svg'
import Nutritionist from 'assets/svg/nutritionist.svg'
import Button from 'components/button'

const CareSection = () => {
  return (
    <section id="care-section">
      <div className={clsx(stl.container)}>
        <div className={clsx(stl.header)}>
          <h1>Medical Care Team</h1>
          <p>Primary Healh Care</p>
        </div>
        <div className={stl.body}>
          <div className={stl.text}>
            <p className={clsx(stl.contact)}>
              Contact our Doctor for the first time <span>Free </span>
              <Link
                href={`#start`}
                passHref
              >
                <Button label="Let's start" btnType='rounded'/>
              </Link>
            </p>
            <p className={stl.compare}>
              Lets compare our service pricing with a few countries we serve
            </p>
          </div>
          <div className={clsx(stl.doctors)}>
            <div>
              <Physician />
              <p>Physician</p>
            </div>
            <div>
              <Psychologist />
              <p>Psychologist</p>
            </div>
            <div>
              <Nutritionist />
              <p>Nutritionist</p>
            </div>
          </div>
          <div className={clsx(stl.mobileCompareText)}>
            <p>
              Lets compare our service pricing with a few countries we serve
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareSection

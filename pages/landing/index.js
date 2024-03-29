import Cta from 'components/cta'
import Navbar from '../../src/components/navbar/navbar'
import CareSection from '../stories/care-section'
import Combat from '../stories/combat'
import Dontneed from '../stories/dontneed'
import Footer from '../stories/footer'
import LandingEnd from '../stories/landingEnd'
import ComparePricing from '../stories/comparePricing'

import stl from './Landing.module.scss'

const Landing = () => (
  <>
    <div className={stl.wrapper}>
      <Navbar />
      <Cta />
      <CareSection />
      <ComparePricing />
      <Combat />
      <Dontneed />
      <LandingEnd />
    </div>
    <div className={stl.footer}>
      <Footer />
    </div>
  </>
)

export default Landing

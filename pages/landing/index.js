import Cta from 'components/cta'
import Navbar from '../../src/components/navbar/navbar'
import CareSection from '../stories/care-section'
import Combat from '../stories/combat'
import Dontneed from '../stories/dontneed'
import Footer from '../stories/footer'
import LandingEnd from '../stories/landingEnd'

import stl from './Landing.module.scss'

const Landing = () => (
  <div className={stl.wrapper}>
    <Navbar />
    <Cta />
    <CareSection />
    <Combat />
    <Dontneed />
    <LandingEnd />
    <Footer />
  </div>
)

export default Landing

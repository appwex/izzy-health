import Cta from 'components/cta'
import Navbar from '../../src/components/navbar/navbar'

import stl from './Landing.module.scss'

const Landing = () => (
  <div className={stl.wrapper}>
    <Navbar />
    <Cta />
  </div>
)

export default Landing

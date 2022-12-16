import Link from 'next/link'

import Button from 'components/button'

import stl from './Home.module.scss'
import CareSection from 'components/careSection/CareSection'


const Home = () => (
  <div className={stl.wrapper}>
    <h1>{`Let's Start without wasting our precious time 🕗`}</h1>

    <Button label="Yay!" />

    <Link href="/stories">
      <a className={stl.link}>
        You can also checkout story of the components 🚀
      </a>
    </Link>
    <CareSection />
  </div>
)

export default Home

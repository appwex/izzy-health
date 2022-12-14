import Link from 'next/link'

import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.mainWrapper}>
    <h1>Home Page</h1>
    <Link href="/stories">Go to Story Page</Link>
  </div>
)

export default Home

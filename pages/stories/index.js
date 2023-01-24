import Link from 'next/link'

import stl from './Stories.module.scss'

const StoriesLinks = () => (
  <div className={stl.wrapper}>
    <h3>Stories of Components</h3>

    <Link href="/stories/button">Button</Link>
    <Link href="/stories/modal">Modal</Link>
    <Link href="/stories/dialog">Dialog</Link>
    <Link href="/stories/navbar">Navbar</Link>
    <Link href="/stories/izzyButton">izzyButton</Link>
    <Link href="/stories/combat">combat section</Link>
    <Link href="/stories/care-section">Care Section</Link>
    <Link href="/stories/cta">CTA Section</Link>
    <Link href="/stories/dontneed">Dontneed Section</Link>
    <Link href="/stories/landingEnd">Landing End section</Link>
    <Link href="/stories/footer">Footer Section</Link>
  </div>
)

export default StoriesLinks

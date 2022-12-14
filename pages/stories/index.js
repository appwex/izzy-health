import Link from 'next/link'

import stl from './Story.module.scss'

const Story = () => (
  <div className={stl.mainWrapper}>
    <h1>Story Page</h1>

    <div className={stl.linkContainer}>
      <Link href="stories/button">Button</Link>
    </div>
  </div>
)

export default Story

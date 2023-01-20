import React from 'react'
import styl from './landingEnd.module.scss'

function LandingEnd() {
  return (
    <div className={styl.landingEndContainer}>
      <div className={styl.gradientContainer} />
      <div className={styl.highlightedDoctors}>
        <p>High lighted doctors</p>
      </div>
    </div>
  )
}

export default LandingEnd

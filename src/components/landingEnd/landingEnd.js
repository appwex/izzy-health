import React from 'react'
import styl from './landingEnd.module.scss'
import doc1 from '../../assets/images/doc1.png'
import doc2 from '../../assets/images/doc2.png'
import doc3 from '../../assets/images/doc3.png'
import doc4 from '../../assets/images/doc4.png'
import doc5 from '../../assets/images/doc5.png'
import doc6 from '../../assets/images/doc6.png'
import DocInfo from './docInfo'

function LandingEnd() {
  return (
    <div className={styl.landingEndContainer}>
      <div className={styl.gradientContainer} />
      <div className={styl.highlightedDoctors}>
        <div className={styl.headingText}>
          <h1>Our highlighted doctors</h1>
        </div>
        <div className={styl.doctorsInfoContainer}>
          <DocInfo source={doc1} />
          <DocInfo source={doc2} />
          <DocInfo source={doc3} />
          <DocInfo source={doc4} />
          <DocInfo source={doc5} />
          <DocInfo source={doc6} />
        </div>
      </div>
    </div>
  )
}

export default LandingEnd

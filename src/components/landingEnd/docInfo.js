import React from 'react'
import styl from './landingEnd.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FbLogo, YtLogo, TwLogo, LnLogo } from 'assets/svg'

function DocInfo({ source }) {
  return (
    <div className={styl.docInfor}>
      <div className={styl.docPic}>
        <Image src={source} alt="Doctor's profile" className={styl.docPic} />
      </div>
      <h4>Harsha Kakkeir</h4>
      <p>MBBS M.D. (MEDICINE)</p>
      <div className={styl.socialLinks}>
        <div className={styl.fbDiv}>
          <Link href="/" passHref>
            <FbLogo />
          </Link>
        </div>
        <div className={styl.ytDiv}>
          <Link href="/" passHref>
            <YtLogo />
          </Link>
        </div>
        <div className={styl.twDiv}>
          <Link href="/" passHref>
            <TwLogo />
          </Link>
        </div>
        <div className={styl.lnDiv}>
          <Link href="/" passHref>
            <LnLogo />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DocInfo

import React from 'react'
import styl from './footer.module.scss'
import Link from 'next/link'
import { FooterLogo, FbLogo, YtLogo, TwLogo, LnLogo } from 'assets/svg'

function Footer() {
  return (
    <div className={styl.footerContainer}>
      <div id="upperFooterContents" className={styl.upperFooterContainer}>
        <FooterLogo />
        <div id="footerLinks">
          <ul className={styl.footerLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Product</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Contact us</Link>
            </li>
          </ul>
        </div>
        <div id="socialLinks" className={styl.socialLinks}>
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
      <div id="lowerFooterContent"></div>
    </div>
  )
}

export default Footer

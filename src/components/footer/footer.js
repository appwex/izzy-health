import React from 'react'
import styl from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import FooterLogo from 'assets/images/footerLogo.png'
import { FbLogo, YtLogo, TwLogo, LnLogo, IzzyAi } from 'assets/svg'

function Footer() {
  return (
    <footer className={styl.footerContainer}>
      <div id="upperFooterContents" className={styl.upperFooterContainer}>
        {/* <FooterLogo className={styl.link} /> */}
        <Link href="/" passHref>
          <Image
            src={FooterLogo}
            className={styl.link}
            alt="izzy health logo"
          />
        </Link>
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
      <div className={styl.izzyAi}>
        <Link href="/" passHref>
          <IzzyAi />
        </Link>
      </div>
      <div id="lowerFooterContent" className={styl.lowerFooterContent}>
        <p>© lezzyhealth2019. All rights reserved.</p>
        <div className={styl.termsNPrivacy}>
          <Link href="/">Terms and condition</Link>
          <Link href="/">Privacy policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

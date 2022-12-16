import stl from './navbar.module.scss'

import Logo from 'assets/svg/logo.svg'

import Link from 'next/link'

import { useState } from 'react'

import clsx from 'clsx'

import IzzyButton from 'components/izzyButton'
import { BUTTON_TYPE } from 'components/izzyButton/izzyButton'

const Navbar = () => {
  const [navIcon, setNavIcon] = useState(false)
  const [expendNav, setExpendNav] = useState(false)

  const handelClick = () => {
    setNavIcon(!navIcon)
    setExpendNav(!expendNav)
  }

  return (
    <header className={stl.header}>
      <nav className={clsx(stl.navbar, `${expendNav ? stl.expend : ''}`)}>
        <Logo className={stl.logo} />

        <ul className={stl.navLinks}>
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
            <Link href="/">Health Professional</Link>
          </li>
        </ul>

        <div className={stl.login}>
          <Link href="/">Login</Link>
          {/* <Link href="/">Get Started</Link> */}
          <IzzyButton
            varient={BUTTON_TYPE.btnSecondary}
            btnType={BUTTON_TYPE.btnRounded}
            label={'Get Started'}
          />
        </div>
      </nav>

      <div
        className={clsx(stl.mobileNav, `${navIcon ? stl.show : ''}`)}
        onClick={handelClick}
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  )
}

export default Navbar

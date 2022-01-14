import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { container, logo, navigation, active } from "./header.module.scss"

const Header = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <header className={container}>
      <Link to={`/`}>
        <StaticImage
          src="../images/logo.png"
          alt="Logo"
          width={160}
          height={160}
          placeholder="none"
          className={logo}
        />
      </Link>
      <nav className={navigation}>
        <Link
          className={location.pathname === rootPath && active}
          to={rootPath}
        >
          Works
        </Link>
        <Link
          className={location.pathname === "/about" && active}
          to={`/about`}
        >
          About
        </Link>
        <Link
          className={location.pathname === "/journal" && active}
          to={`/journal`}
        >
          Journal
        </Link>
        <Link to={`/`}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header

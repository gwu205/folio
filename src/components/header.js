import React, { useState, useEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect"
import Logo from "./logo"
import { Mail, MailOpen, Sunny } from "react-ionicons"
import {
  container,
  navigation,
  active,
  mail,
  toggle,
  pattern,
} from "./header.module.scss"

const isBrowser = typeof window !== "undefined"

const Header = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isWorks =
    location.pathname === rootPath || location.pathname.indexOf("/works") > -1

  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  let prefersDarkScheme = false
  if (isBrowser) {
    prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
  }
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    document.querySelector("body").classList = "active"
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("DARK_MODE"))
    if (currentTheme === null) {
      setDarkMode(prefersDarkScheme)
    } else if (currentTheme) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }
    localStorage.setItem("DARK_MODE", darkMode)
  }, [darkMode])

  return (
    <StaticQuery
      query={graphql`
        query mail {
          site {
            siteMetadata {
              social {
                mail
              }
            }
          }
        }
      `}
      render={data => (
        <header className={container}>
          <div className={pattern} />
          <Link to={`/`}>
            <Logo />
          </Link>
          <nav className={navigation}>
            <Link className={isWorks ? active : undefined} to={rootPath}>
              Works
            </Link>
            <Link
              className={location.pathname === "/about/" ? active : undefined}
              to={`/about/`}
            >
              About
            </Link>
            <Link
              className={
                location.pathname.indexOf("/journal/") > -1 ? active : undefined
              }
              to={`/journal/`}
            >
              Journal
            </Link>
            <a
              href={`mailto:${data.site.siteMetadata.social.mail}`}
              rel="noopener noreferrer"
              title="Get in touch"
              className={isMobile ? "" : mail}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {isMobile ? (
                "Contact"
              ) : isHovering ? (
                <MailOpen width="16px" height="16px" />
              ) : (
                <Mail width="16px" height="16px" />
              )}
            </a>
            <a
              className={toggle}
              onClick={() => toggleTheme()}
              title={darkMode ? "Let there be light!" : "Dim the lights!"}
            >
              <Sunny width="16px" height="16px" />
            </a>
          </nav>
        </header>
      )}
    />
  )
}

export default Header

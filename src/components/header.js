import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect"
import { StaticImage } from "gatsby-plugin-image"
import { Mail, MailOpen } from "react-ionicons"
import { container, logo, navigation, active, mail } from "./header.module.scss"

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
          <Link to={`/`}>
            <StaticImage
              src="../../content/assets/gwlogo.png"
              alt="Logo"
              width={160}
              height={160}
              placeholder="none"
              className={logo}
            />
          </Link>
          <nav className={navigation}>
            <Link className={isWorks && active} to={rootPath}>
              Works
            </Link>
            <Link
              className={location.pathname === "/about" && active}
              to={`/about`}
            >
              About
            </Link>
            <Link
              className={location.pathname.indexOf("/journal") > -1 && active}
              to={`/journal`}
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
          </nav>
        </header>
      )}
    />
  )
}

export default Header

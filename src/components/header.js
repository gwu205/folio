import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { container, logo, navigation, active } from "./header.module.scss"

const Header = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`

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
            <a
              href={`mailto:${data.site.siteMetadata.social.mail}`}
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </nav>
        </header>
      )}
    />
  )
}

export default Header

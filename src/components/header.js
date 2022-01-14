import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import LogoGithub from "react-ionicons/lib/LogoGithub"
// import LogoLinkedin from "react-ionicons/lib/LogoLinkedin"
// import LogoInstagram from "react-ionicons/lib/LogoInstagram"
// import styles from "./layout.module.scss"

import { rhythm } from "../utils/typography"

const Header = () => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <StaticQuery
      query={graphql`
        query logo {
          logo: file(absolutePath: { regex: "/gwlogo.png/" }) {
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              backgroundImage: "none",
            }}
            to={`/`}
          >
            <Img
              fixed={data.logo.childImageSharp.fixed}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                maxWidth: 80,
                maxHeight: 80,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Link to={rootPath}>Works</Link>
            <Link to={`/about`}>About</Link>
            <Link to={`/journal`}>Journal</Link>
            <Link to={`/`}>Contact</Link>
          </div>
        </header>
      )}
    />
  )
}

export default Header

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children, logo, linkedin, github, instagram } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              backgroundImage: 'none',
            }}
            to={`/`}
          >
            <Img
              fixed={logo}
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
          <div>
            <a href={`https://www.linkedin.com/in/${linkedin}/`} target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href={`https://github.com/${github}/`} target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href={`https://www.instagram.com/${instagram}/`} target="_blank" rel="noopener noreferrer">
              instagram
            </a>
          </div>
        </div>
      )
    } else {
      header = (
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
            backgroundImage: 'none',
          }}
          to={`/`}
        >
          <Img
            fixed={logo}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              maxWidth: 50,
              maxHeight: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </Link>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{fontSize: rhythm(1/2), textAlign: "center", opacity: 0.5}}>
          Copyright © {new Date().getFullYear()} Geoffrey Wu
        </footer>
      </div>
    )
  }
}

export default Layout

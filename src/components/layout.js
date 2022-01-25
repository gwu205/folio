import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Header from "./header"
import Footer from "./footer"
import "./global.scss"
import styles from "./layout.module.scss"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, children, logo, linkedin, github, instagram } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // let header

    // if (location.pathname === rootPath) {
    //   header = (
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignContent: "center",
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //           backgroundImage: "none",
    //         }}
    //         to={`/`}
    //       >
    //         <Img
    //           fixed={logo}
    //           style={{
    //             marginRight: rhythm(1 / 2),
    //             marginBottom: 0,
    //             maxWidth: 80,
    //             maxHeight: 80,
    //             borderRadius: `100%`,
    //           }}
    //           imgStyle={{
    //             borderRadius: `50%`,
    //           }}
    //         />
    //       </Link>
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <a
    //           className={styles.socials}
    //           href={`https://www.linkedin.com/in/${linkedin}/`}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <LogoLinkedin color="#444" />
    //         </a>
    //         <a
    //           className={styles.socials}
    //           href={`https://github.com/${github}/`}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <LogoGithub color="#444" />
    //         </a>
    //         <a
    //           className={styles.socials}
    //           href={`https://www.instagram.com/${instagram}/`}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <LogoInstagram color="#444" />
    //         </a>
    //       </div>
    //     </div>
    //   )
    // } else {
    //   header = (
    //     <Link
    //       style={{
    //         boxShadow: `none`,
    //         textDecoration: `none`,
    //         color: `inherit`,
    //         backgroundImage: "none",
    //       }}
    //       to={`/`}
    //       title="Return Home"
    //     >
    //       <Img
    //         fixed={logo}
    //         className={styles.logo}
    //         style={{
    //           marginRight: rhythm(1 / 2),
    //           marginBottom: 0,
    //           maxWidth: 50,
    //           maxHeight: 50,
    //           borderRadius: `100%`,
    //         }}
    //         imgStyle={{
    //           borderRadius: `50%`,
    //         }}
    //       />
    //     </Link>
    //   )
    // }
    return (
      <>
        <Header location={this.props.location} />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout

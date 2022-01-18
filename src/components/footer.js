import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { LogoInstagram, LogoGithub, LogoLinkedin } from "react-ionicons"
import { container, socials, icon } from "./footer.module.scss"

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query socials {
          site {
            siteMetadata {
              social {
                instagram
                linkedin
                github
              }
            }
          }
        }
      `}
      render={data => (
        <footer className={container}>
          <span>
            <strong>Geoffrey Wu</strong>
            <em> — Copyright © {new Date().getFullYear()}</em>
          </span>
          <div className={socials}>
            <span>
              <strong>Find me online:</strong>
            </span>
            <a
              className={icon}
              href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoLinkedin width="16px" height="16px" />
            </a>
            <a
              className={icon}
              href={`https://github.com/${data.site.siteMetadata.social.github}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGithub width="16px" height="16px" />
            </a>
            <a
              className={icon}
              href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoInstagram width="16px" height="16px" />
            </a>
          </div>
        </footer>
      )}
    />
  )
}

export default Footer

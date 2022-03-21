import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { LogoInstagram, LogoGithub, LogoLinkedin } from "react-ionicons"
import { socials, icon } from "./socials.module.scss"

const Socials = () => {
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
        <div className={socials}>
          <span>
            <strong>Find me online:</strong>
          </span>
          <a
            className={icon}
            href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}/`}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LogoLinkedin width="16px" height="16px" />
          </a>
          <a
            className={icon}
            href={`https://github.com/${data.site.siteMetadata.social.github}/`}
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <LogoGithub width="16px" height="16px" />
          </a>
          <a
            className={icon}
            href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <LogoInstagram width="16px" height="16px" />
          </a>
        </div>
      )}
    />
  )
}

export default Socials

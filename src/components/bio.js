/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
    }
  }
  logo: file(absolutePath: {regex: "/gwlogo.png/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
    }
  }
  site {
    siteMetadata {
      author
      social {
        mail
      }
    }
  }
}
`)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        marginTop: rhythm(2.5),
        width: '100%'
      }}
    >
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }} />
      <p
        style={{
          marginBottom: 0
        }}
      >
        <strong>Hi! I'm Geoff</strong> - a UI/UX designer building awesome product experiences.<br />Like what you see?&nbsp;
        <a href={`mailto:${social.mail}`} target="_blank" rel="noopener noreferrer">
          Let's work together!
        </a>
      </p>
    </div>
  );
}

export default Bio

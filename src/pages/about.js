import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

class About extends React.Component {
  render() {
    // const { data } = this.props

    return (
      <Layout location={this.props.location}>
        <p>About page</p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          mail
          instagram
          linkedin
          github
        }
      }
    }
    logo: file(absolutePath: { regex: "/gwlogo.png/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            cover_image {
              publicURL
              childImageSharp {
                fluid {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./index.module.scss"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const linkedin = data.site.siteMetadata.social.linkedin
    const github = data.site.siteMetadata.social.github
    const instagram = data.site.siteMetadata.social.instagram
    const posts = data.allMarkdownRemark.edges
    const logo = data.logo.childImageSharp.fixed

    return (
      <div className={styles.index}>
        <Layout
          location={this.props.location}
          title={siteTitle}
          logo={logo}
          linkedin={linkedin}
          github={github}
          instagram={instagram}
        >
          <SEO title="UI/UX Product Designer in Tokyo" />

          <h1
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            All projects
          </h1>

          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article className={styles.list} key={node.fields.slug}>
                <header>
                  <Link to={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      {title}
                    </h3>
                  </Link>
                  <small>{node.frontmatter.tags}</small>
                </header>
              </article>
            )
          })}
          <small
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <a href="https://tinyurl.com/gwu205cv" target="_blank">
              My full work history and professional skills are displayed on my
              CV
            </a>
          </small>
          <Bio />
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

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
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
    const posts = data.allMarkdownRemark.edges
    const logo = data.logo.childImageSharp.fixed

    return (
      <div className={styles.index}>
        <Layout location={this.props.location} title={siteTitle} logo={logo}>
        <SEO title="Geoffrey Wu" />
        
        <h1 style={{width: '100%'}}>Projects</h1>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <Img 
                  fluid={node.frontmatter.cover_image.childImageSharp.fluid} 
                  style={{
                    minHeight: 200,
                  }}
                />
                <header>  
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                      {title}
                  </h3>
                  <small>{node.frontmatter.tags}</small>
                </header>
              </Link>
              {/* <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section> */}
            </article>
          )
        })}

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

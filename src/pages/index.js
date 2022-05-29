import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { isMobile } from "react-device-detect"
import {
  name,
  headline,
  tagline,
  blogItem,
  image,
  itemTitle,
} from "./index.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="Works" />

        <h2 className={name}>Geoffrey Wu</h2>
        <h1 className={headline}>Product Designer</h1>
        <h3 className={tagline}>
          I’m a UI and branding designer dedicated to building awesome product
          experiences.
        </h3>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <Link to={node.fields.slug} className={blogItem}>
                {isMobile && node.frontmatter.mobile_image ? (
                  <GatsbyImage
                    image={
                      node.frontmatter.mobile_image.childImageSharp
                        .gatsbyImageData
                    }
                    className={image}
                    alt={title}
                  />
                ) : (
                  <GatsbyImage
                    image={
                      node.frontmatter.cover_image.childImageSharp
                        .gatsbyImageData
                    }
                    className={image}
                    alt={title}
                  />
                )}
                <header className={itemTitle}>
                  <h3>{title}</h3>
                  <h3 className="text-gray">{node.frontmatter.tagline}</h3>
                </header>
              </Link>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(/content/projects)/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            tagline
            cover_image {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            mobile_image {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

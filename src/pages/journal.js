import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { banner, divider, list } from "./journal.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="Journal" />

        <StaticImage
          src="../../content/assets/banner.png"
          layout="fullWidth"
          alt=""
          className={banner}
        />

        <h2>Journal</h2>
        <h3>
          Guides, design process, and personal reflections. <br />
          Thoughts and ideas - from me to you.
        </h3>
        <hr className={divider} />

        <section className={list}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.description || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <Link to={node.fields.slug}>
                    <h4>{title}</h4>
                  </Link>
                  <p>
                    {node.frontmatter.date}&nbsp;—&nbsp;
                    {node.timeToRead} minute read
                  </p>
                </header>
              </article>
            )
          })}
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(/content/journal)/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            description
            date(formatString: "MMMM YYYY")
          }
        }
      }
    }
  }
`

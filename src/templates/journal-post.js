import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { container, header, title, nav } from "./journal-post.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

class JournalPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className={container}>
          <header className={header}>
            <h3 className={title}>{post.frontmatter.description}</h3>
            <h4>{post.frontmatter.date}</h4>
            <h1>{post.frontmatter.title}</h1>
          </header>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
          <footer>
            <nav className={nav}>
              <ul>
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            <Link className="h3 back" to="/journal">
              Back
            </Link>
          </footer>
        </article>
      </Layout>
    )
  }
}

export default JournalPostTemplate

export const pageQuery = graphql`
  query JournalPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    logo: file(absolutePath: { regex: "/gwlogo.png/" }) {
      childImageSharp {
        gatsbyImageData(width: 50, height: 50, layout: FIXED)
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        interval
        description
        link
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import {
  article,
  info,
  block,
  responsive,
  columns,
  imgCol,
  nav,
} from "./blog-post.module.scss"

import ProjectInfo from "../components/project-info"
import Layout from "../components/layout"
import SEO from "../components/seo"

const shortcodes = {
  ProjectInfo,
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className={article}>
          <MDXProvider components={shortcodes}>
            <MDXRenderer
              frontmatter={post.frontmatter}
              info={info}
              block={block}
              responsive={responsive}
              columns={columns}
              imgCol={imgCol}
            >
              {post.body}
            </MDXRenderer>
          </MDXProvider>
          <footer className="flex flex-col">
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
            <Link className="h3 back" to="/">
              Back to home
            </Link>
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "YYYY")
        description
        tags
        link
      }
    }
  }
`

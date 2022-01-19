import React from "react"
import { Link, graphql } from "gatsby"
import { button } from "./blog-post.module.scss"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class JournalPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const logo = this.props.data.logo.childImageSharp.gatsbyImageData

    let projectLink
    if (post.frontmatter.link) {
      projectLink = (
        <a
          href={post.frontmatter.link}
          className={button}
          style={{ marginBottom: rhythm(1) }}
          target="_blank"
          rel="noopener noreferrer"
          title="Go to live project"
        >
          View Project
        </a>
      )
    } else {
      projectLink = null
    }

    return (
      <Layout location={this.props.location} title={siteTitle} logo={logo}>
        <h1>THIS IS A JOURNAL POST</h1>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <h3
            style={{
              display: `block`,
              textAlign: `right`,
              fontSize: `0.7rem`,
              margin: `0.5rem 0`,
              textTransform: `uppercase`,
              letterSpacing: `0.1rem`,
            }}
          >
            {post.frontmatter.date}
          </h3>
          <header
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.title}
            </h1>
            <small
              style={{
                textAlign: "center",
                paddingLeft: "1em",
                fontStyle: "italic",
                whiteSpace: "pre-wrap",
              }}
            >
              {"Interval:\n" + post.frontmatter.interval}
            </small>
          </header>
          {projectLink}
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              marginLeft: 0,
              marginBottom: 0,
            }}
          >
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
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

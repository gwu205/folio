import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { LinkOutline } from "react-ionicons"
import {
  container,
  header,
  title,
  nav,
  profile,
  bio,
  link,
} from "./journal-post.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ExternalLink = props => {
  if (
    props.href.includes("geoffreywu.digital") ||
    props.href[0] === ("/" || "#")
  ) {
    return <a href={props.href}>{props.children}</a>
  }
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

const Permalink = props => {
  const id = props.children.replace(/\s/g, "")
  const copyURL = e => {
    e.preventDefault()
    navigator.clipboard.writeText(window.location.href + `#${id}`)
  }
  return (
    <h3 id={id}>
      {props.children}
      <a href={`#${id}`} className={link} onClick={copyURL} title="Copy link">
        <LinkOutline />
      </a>
    </h3>
  )
}

const components = {
  a: ExternalLink,
  h3: Permalink,
}

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
            <h4 className={title}>{post.frontmatter.description}</h4>
            <h6>{post.frontmatter.date}</h6>
            <h1>{post.frontmatter.title}</h1>
          </header>
          <section>
            <MDXProvider components={components}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </section>
          <footer>
            <hr />
            <div className={bio}>
              <StaticImage
                src="../../content/assets/profile-pic.jpg"
                alt="Geoffrey Wu"
                className={profile}
                placeholder="blurred"
                width={80}
                quality={90}
              />
              <div>
                <h4>Geoffrey Wu</h4>
                <p>
                  A digital designer and web developer who believes in crafting
                  ideas through a process-driven approach.
                </p>
              </div>
            </div>
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
            <Link className="h3 back" to="/journal/">
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        description
        link
      }
    }
  }
`

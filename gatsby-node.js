const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const journalPost = path.resolve(`./src/templates/journal-post.js`)
  const fetchBlog = await graphql(
    `
      {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/(/content/projects)/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const fetchJournal = await graphql(
    `
      {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/(/content/journal)/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (fetchBlog.errors) {
    throw fetchBlog.errors
  }

  if (fetchJournal.errors) {
    throw fetchJournal.errors
  }

  const blogPostsData = fetchBlog.data.allMdx.edges
  const journalData = fetchJournal.data.allMdx.edges

  const makePages = (data, post, index, template) => {
    const previous = index === data.length - 1 ? null : data[index + 1].node
    const next = index === 0 ? null : data[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: template,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  }

  blogPostsData.forEach((post, index) =>
    makePages(blogPostsData, post, index, blogPost)
  )
  journalData.forEach((post, index) =>
    makePages(journalData, post, index, journalPost)
  )
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

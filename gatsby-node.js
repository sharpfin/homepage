const path = require(`path`)
exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/blog-post.jsx`)

    const result = await graphql(`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
  `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {},
        })
    })
}
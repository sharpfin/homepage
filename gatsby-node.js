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
            lang
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
    if (node.frontmatter.lang === "all") {
      ["sv", "en"].forEach(lang => { createPageWithLang(node, lang, createPage, blogPostTemplate) })
    } else {
      createPageWithLang(node, node.frontmatter.lang, createPage, blogPostTemplate)
    }
  })
}

const createPageWithLang = (node, lang, createPage, blogPostTemplate) => {
  let path;
  if (lang === "en") {
    path = node.frontmatter.path
  } else {
    path = "/" + lang + "/" + node.frontmatter.path
  }
  createPage({
    path: path,
    component: blogPostTemplate,
    context: {
      id: node.frontmatter.path,
      langKey: lang
    },
  })
}
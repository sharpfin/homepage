const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.jsx`)
  const pressReleaseTemplate = path.resolve(`src/templates/press-release.jsx`)

  const result = await graphql(`
  {
    allMdx {
      edges {
        node {
          fields {
            source
          }
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

  const createPageWithLang = (node, lang, createPage) => {
    let path;
    if (lang === "en") {
      path = node.frontmatter.path
    } else {
      path = "/" + lang + "/" + node.frontmatter.path
    }

    createPage({
      path: path,
      component: node.fields.source === "press_release" ? pressReleaseTemplate : blogPostTemplate,
      context: {
        id: node.frontmatter.path,
        langKey: lang
      },
    })
  }


  result.data.allMdx.edges.forEach(({ node }) => {
    if (node.frontmatter.lang === "all") {
      ["sv", "en"].forEach(lang => { createPageWithLang(node, lang, createPage) })
    } else {
      createPageWithLang(node, node.frontmatter.lang, createPage)
    }
  })


}


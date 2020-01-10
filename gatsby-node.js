const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      articles: allContentfulArticles {
        edges {
          node {
            slug
          }
        }
      }
      works: allContentfulWorks {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.articles.edges.forEach(({ node }) => {
    createPage({
      path: `articles/${node.slug}`,
      component: path.resolve("./src/templates/article-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.works.edges.forEach(({ node }) => {
    createPage({
      path: `works/${node.slug}`,
      component: path.resolve("./src/templates/work-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}

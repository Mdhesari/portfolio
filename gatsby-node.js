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
        totalCount
      }
      works: allContentfulWorks {
        edges {
          node {
            slug
            url
          }
        }
        totalCount
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
    if (node.url === null) {
      createPage({
        path: `works/${node.slug}`,
        component: path.resolve("./src/templates/work-template.js"),
        context: {
          slug: node.slug,
        },
      })
    }
  })

  const postsPerPage = 10

  // articles page
  let numPages = Math.ceil(data.articles.totalCount / postsPerPage)
  const blogRoot = "/articles"

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `${blogRoot}/` : `${blogRoot}/${i + 1}`,
      component: path.resolve("./src/templates/article-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numPages,
        currentPage: i + 1,
      },
    })
  })

  // works page
  let numWorksPages = Math.ceil(data.works.totalCount / postsPerPage)
  const worksRoot = "/works"

  Array.from({ length: numWorksPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `${worksRoot}/` : `${worksRoot}/${i + 1}`,
      component: path.resolve("./src/templates/works-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numWorksPages,
        currentPage: i + 1,
      },
    })
  })
}

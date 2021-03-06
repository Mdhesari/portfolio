import React from "react"
import ArticlesList from "../components/article/ArticlesList"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default class ArticleList extends React.Component {
  render() {
    const { articles } = this.props.data
    const { pageContext } = this.props
    return (
      <Layout>
        <SEO title="Blog" />
        <ArticlesList pageContext={pageContext} articles={articles} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    articles: allContentfulArticles(
      sort: { fields: createdAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id: contentful_id
          excerpt
          title
          slug
          body {
            childMarkdownRemark {
              excerpt(format: HTML)
            }
          }
          thumbnailImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          createdAt
        }
      }
    }
  }
`

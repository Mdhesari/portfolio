import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ArticleSingle from "../components/article/ArticleSingle"

export default ({ data }) => {
  let { article } = data

  return (
    <Layout>
      <SEO title={article.title} />
      <ArticleSingle article={article} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    article: contentfulArticles(slug: { eq: $slug }) {
      id: contentful_id
      excerpt
      title
      slug
      body {
        body
        childMarkdownRemark {
          html
        }
      }
      thumbnailImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      createdAt
    }
  }
`

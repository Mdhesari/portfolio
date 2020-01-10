import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

export default ({ data }) => {
  let { articles } = data

  return (
    <Layout>
      <SEO title={articles.title} />
      <h1>{articles.title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: articles.body.childMarkdownRemark.html,
        }}
      ></p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    articles: contentfulArticles(slug: { eq: $slug }) {
      id: contentful_id
      excerpt
      title
      slug
      body {
        childMarkdownRemark {
          html
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
`

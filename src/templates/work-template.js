import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

export default ({ data }) => {
  let { works } = data

  return (
    <Layout>
      <SEO title={works.title} />
      <h1>{works.title}</h1>
      <p>{works.description}</p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    works: contentfulWorks(slug: { eq: $slug }) {
      pictures {
        fluid {
          src
        }
      }
      description
      id: contentful_id
      slug
      title
      text {
        childMarkdownRemark {
          html
        }
      }
      technologies
    }
  }
`

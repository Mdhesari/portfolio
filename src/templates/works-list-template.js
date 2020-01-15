import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import WorksList from "../components/works/WorksList"
import { graphql } from "gatsby"

export default class worksList extends React.Component {
  render() {
    const { works } = this.props.data
    const { pageContext } = this.props
    return (
      <Layout>
        <Seo title="recent works" />
        <WorksList works={works} pageContext={pageContext} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    works: allContentfulWorks(
      sort: { fields: createdAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          pictures {
            fluid {
              src
            }
          }
          description
          id: contentful_id
          slug
          title
          url
          technologies
          featured
        }
      }
    }
  }
`

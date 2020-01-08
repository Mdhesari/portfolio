import React from "react"
import MasnoryItem from "../MasnoryItem"
import { graphql, useStaticQuery } from "gatsby"

const getWorks = graphql`
  query {
    all: allContentfulWorks {
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
        }
      }
    }
  }
`

export default () => {
  const works = useStaticQuery(getWorks)

  return (
    <section className="latest-works mt-5">
      <div className="container">
        <h3 className="text-center py-5 text-primary-title">Latest Projects</h3>
        <div className="masonry-items pb-5">
          {works.all.edges.map(({ node }) => (
            <MasnoryItem key={node.id} work={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

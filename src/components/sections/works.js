import React from "react"
import MasnoryItem from "../MasnoryItem"
import { graphql, useStaticQuery,Link } from "gatsby"
import Title from "../Title"

const getWorks = graphql`
  query {
    all: allContentfulWorks(sort: { fields: createdAt, order: DESC }) {
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
        <Title className="text-center pt-5">
          <Link to="/works/">Recent Works</Link>
        </Title>
        <div className="masonry-items pb-5">
          {works.all.edges.map(({ node }) => (
            <MasnoryItem key={node.id} work={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

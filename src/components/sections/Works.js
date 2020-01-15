import React from "react"
import MasnoryItem from "../MasnoryItem"
import { graphql, useStaticQuery, Link } from "gatsby"
import Title from "../Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import MoreBtn from "../MoreBtn"

const getWorks = graphql`
  query {
    all: allContentfulWorks(
      sort: { fields: createdAt, order: DESC }
      limit: 8
      filter: { featured: { eq: true } }
    ) {
      totalCount
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

export default () => {
  const works = useStaticQuery(getWorks)

  return (
    <section className="latest-works mt-5 pb-5">
      <div className="container-md">
        <Title className="text-center pt-5">
          <Link to="/works/">Recent Works</Link>
        </Title>
        <div className="masonry-items">
          {works.all.edges.map(({ node }) => (
            <MasnoryItem key={node.id} work={node} />
          ))}
        </div>
        {works.all.totalCount > 8 ? (
          <MoreBtn url="/works/">
            See More Projects <FaAngleDoubleRight />
          </MoreBtn>
        ) : (
          ""
        )}
      </div>
    </section>
  )
}

import React from "react"
import WorkGrid from "../works/WorkGrid"
import { graphql, useStaticQuery, Link } from "gatsby"
import Title from "../Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import MoreBtn from "../MoreBtn"
import Masonry from "react-masonry-css"

const getWorks = graphql`
  query {
    allForCount: allContentfulWorks {
      totalCount
    }
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
      <div className="container-lg">
        <Title className="text-center pt-5">
          <Link to="/works/">Recent Works</Link>
        </Title>

        <Masonry
          breakpointCols={{
            default: 3,
            700: 2,
          }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {works.all.edges.map(({ node }) => (
            <WorkGrid key={node.id} work={node} />
          ))}
        </Masonry>
        {works.allForCount.totalCount > works.all.totalCount ? (
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

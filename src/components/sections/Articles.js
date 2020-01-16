import React from "react"
import Article from "../article/Article"
import Title from "../Title"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"
import MoreBtn from "../MoreBtn"
import CardGroup from "react-bootstrap/CardGroup"

const getArticles = graphql`
  query {
    articles: allContentfulArticles(
      sort: { fields: createdAt, order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id: contentful_id
          title
          slug
          thumbnailImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default ({ title }) => {
  const { articles } = useStaticQuery(getArticles)

  let the_title = title !== undefined ? title : ""

  return (
    <section className="articles my-4 py-4">
      <div className="container-lg">
        <Title className="text-center">
          <Link to="/articles/">
            {the_title !== "" ? the_title : "Latest Articles"}
          </Link>
        </Title>
        <CardGroup>
          {articles.edges.map(({ node }) => (
            <Article key={node.id} article={node} />
          ))}
        </CardGroup>
        {articles.totalCount > 3 ? (
          <MoreBtn url="/articles/">
            Read More Articles <FaAngleDoubleRight />
          </MoreBtn>
        ) : (
          ""
        )}
      </div>
    </section>
  )
}

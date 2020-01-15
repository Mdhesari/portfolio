import React from "react"
import CardGroup from "../CardGroup"
import Article from "../article/Article"
import Title from "../Title"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"
import MoreBtn from "../MoreBtn"

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

  let the_title = title !== null ? title:""
  return (
    <section className="articles my-4 py-4">
      <div className="container-lg">
        <Title className="text-center">
          <Link to="/articles/">
            {the_title !== "" ?the_title : "Latest Articles"}
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

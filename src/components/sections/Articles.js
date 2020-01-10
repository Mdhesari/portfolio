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

export default () => {
  const { articles } = useStaticQuery(getArticles)

  return (
    <section className="articles my-4 py-4">
      <div className="container-lg">
        <Title className="text-center">
          <Link to="/articles/">Latest Articles</Link>
        </Title>
        <CardGroup>
          {articles.edges.map(({ node }) => (
            <Article key={node.id} article={node} />
          ))}
        </CardGroup>
        <MoreBtn url="/articles/">
          Read More Articles <FaAngleDoubleRight />
        </MoreBtn>
      </div>
    </section>
  )
}

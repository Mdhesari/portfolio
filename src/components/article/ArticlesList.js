import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Title from "../Title"
import ArticleRow from "./ArticleRow"
import { FaArrowLeft } from "react-icons/fa"

const getArticles = graphql`
  query {
    articles: allContentfulArticles(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id: contentful_id
          excerpt
          title
          slug
          body {
            childMarkdownRemark {
              excerpt(format: HTML)
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
    }
  }
`

export default () => {
  const { articles } = useStaticQuery(getArticles)

  return (
    <section className="articles my-4 py-4">
      <div className="container-lg">
        <Title className="mb-0 text-center">
          <Link to="/articles/">All Articles</Link>
        </Title>
        <p className="mb-4 text-center text-secondary">
          Find out more about what I write
        </p>
        <Link to="/" className="btn btn-link pl-4">
          <FaArrowLeft /> Back Home
        </Link>
        {articles.edges.map(({ node }) => (
          <ArticleRow className="mt-4" key={node.id} article={node} />
        ))}
      </div>
    </section>
  )
}

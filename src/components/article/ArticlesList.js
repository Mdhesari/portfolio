import React from "react"
import { Link } from "gatsby"
import Title from "../Title"
import ArticleRow from "./ArticleRow"
import { FaArrowLeft } from "react-icons/fa"
import Pagination from "../Pagination"

export default ({ articles, pageContext }) => {
  const { currentPage, numPages } = pageContext

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
        {numPages > 1 ? (
          <Pagination
            rootUrl="/articles"
            currentPage={currentPage}
            numPages={numPages}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  )
}

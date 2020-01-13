import React from "react"
import { Link } from "gatsby"
import Title from "../Title"
import { FaArrowLeft } from "react-icons/fa"
import MasnoryItem from "../MasnoryItem"
import Pagination from "../Pagination"

export default ({ works, pageContext }) => {
  const { currentPage, numPages } = pageContext

  return (
    <section className="my-4 py-4">
      <div className="container-lg">
        <Title className="mb-0 text-center">
          <Link to="/works/">All Works & Projects</Link>
        </Title>
        <p className="mb-4 text-center text-secondary">
          Recent exciting projects with amazing people
        </p>
        <Link to="/" className="btn btn-link pl-4">
          <FaArrowLeft /> Back Home
        </Link>
        <div className="masonry-items pt-3 pb-5">
          {works.edges.map(({ node }) => (
            <MasnoryItem key={node.id} work={node} />
          ))}
        </div>

        {numPages > 1 ? (
          <Pagination
            rootUrl="/works"
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

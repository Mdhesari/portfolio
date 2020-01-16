import React from "react"
import { Link } from "gatsby"
import Title from "../Title"
import { FaArrowLeft } from "react-icons/fa"
import WorkGrid from "./WorkGrid"
import Pagination from "../Pagination"
import Masonry from "react-masonry-css"

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

        <Masonry
          breakpointCols={{
            default: 3,
            700: 2,
          }}
          className="masonry-grid mt-4"
          columnClassName="masonry-grid_column"
        >
          {works.edges.map(({ node }) => (
            <WorkGrid key={node.id} work={node} />
          ))}
        </Masonry>

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

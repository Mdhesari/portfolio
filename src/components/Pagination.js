import React from "react"
import { Link } from "gatsby"

export default ({ currentPage, numPages, rootUrl }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  if (rootUrl === undefined || rootUrl === null) {
    rootUrl = "/"
  }

  return (
    <nav className="mt-5">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${isFirst ? "disabled" : ""}`}>
          <Link
            className="page-link"
            to={`${rootUrl}/${prevPage ? prevPage : ""}`}
            rel="prev"
          >
            ← Previous
          </Link>
        </li>
        {numPages > 2 &&
          Array.from({ length: numPages }, (_, i) => {
            return (
              <li
                key={`pagination-number-${i + 1}`}
                className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
              >
                <Link
                  key={`pagination-number-${i + 2}`}
                  className="page-link"
                  to={`${rootUrl}/${i === 0 ? "" : i + 1}`}
                >
                  {i + 1}
                </Link>
              </li>
            )
          })}

        <li className={`page-item ${isLast ? "disabled" : ""}`}>
          <Link
            className="page-link"
            to={`${rootUrl}/${nextPage ? nextPage : ""}`}
            rel="next"
          >
            Next →
          </Link>
        </li>
      </ul>
    </nav>
  )
}

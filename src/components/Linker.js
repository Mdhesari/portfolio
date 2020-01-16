import React from "react"
import { Link } from "gatsby"

export default ({ url, isLocal, children, className, isAllowed }) => {
  if (isAllowed !== "undefined" && isAllowed === false) {
    return <>{children}</>
  }

  if (isLocal === "undefined") {
    isLocal = false
  }

  return (
    <>
      {isLocal === true ? (
        <Link to={url} className={className}>
          {children}
        </Link>
      ) : (
        <a
          href={url}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </>
  )
}

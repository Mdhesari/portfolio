import React from "react"
import {Link} from "gatsby"

export default ({ url, children, className }) => (
  <div className={"text-center " + className}>
    <Link to={url} className="btn btn-link text-info mt-4">
      {children}
    </Link>
  </div>
)

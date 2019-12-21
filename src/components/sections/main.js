import React from "react"
import {Link} from "gatsby"

export default () => (
  <section className="main-head">
    <div className="main-head-container">
      <div className="inner">
        <div className="title text-left">
          <p>Hello</p>

          <h3>I'm Mohamad Fazel</h3>

          <p>Web application developer & tech enthusiastic</p>

          <div className="actions mt-4">
            <Link to="#modal" className="btn btn-success mr-1">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

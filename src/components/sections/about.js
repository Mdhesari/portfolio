import React from "react"
import { Link } from "gatsby"
import Image from "../../components/image"


export default () => (
  <section className="about-me">
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <div className="inner-picture mx-auto">
            <Image src="me-3.png"></Image>
          </div>
          <h3 className="text-primary-title">About Me</h3>
          <p className="mt-3 text-secondary caption mx-auto lead">
            hey there, mohamad fazel is technology and nature lover, he always
            tries to be creative and productive every minute of his life.
          </p>
          <Link to="#cv" className="btn btn-outline-primary btn-sm mr-1 mt-3">
            Download CV
          </Link>
        </div>
      </div>
    </div>
  </section>
)

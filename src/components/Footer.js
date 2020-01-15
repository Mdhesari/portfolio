import React from "react"
import { FaHeart, FaCode, FaRegArrowAltCircleUp } from "react-icons/fa"
import SocialMedia from "./SocialMedia"
import Linker from "./Linker"
import { Link } from "gatsby"

const goToTop = e => {
  e.preventDefault()
  if (typeof document !== 'undefined')
    document.querySelector("#page").scrollIntoView({ behavior: "smooth" })
}

export default () => (
  <footer className="main-footer pt-5">
    <SocialMedia />
    <div className="container">
      <p className="text-center my-3">
        <span>
          <FaCode className="text-secondary" /> Built with{" "}
          <FaHeart className="text-danger" /> © {new Date().getFullYear()}
        </span>
        <span className="pl-2 d-inline-block">
          hosted on
          <Linker
            isLocal={false}
            url="https://www.netlify.com/"
            className="btn btn-link pl-1 pt-1"
          >
            @netlify
          </Linker>
        </span>
        <Link
          to="#"
          data-target="#page"
          onClick={goToTop}
          className="btn btn-link text-primary"
        >
          <FaRegArrowAltCircleUp size={25} className="text-secondary" />
        </Link>
      </p>
    </div>
  </footer>
)

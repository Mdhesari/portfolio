
import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import SocialMedia from "./SocialMedia"
import { FaCode, FaHeart } from "react-icons/fa"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <footer className="main-footer pt-5">
          <SocialMedia />
          <div className="container">
            <p className="text-center my-3">
              © {new Date().getFullYear()}, <FaCode className="text-secondary" /> Built with <FaHeart className="text-danger" /> 
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

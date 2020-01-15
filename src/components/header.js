import PropTypes from "prop-types"
import React from "react"
import Navbar from "./Navbar"

const Header = () => (
  <header id="page" className="main-header bg-light">
    <div className="container-md">
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

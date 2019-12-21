import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, titleType }) => (
  <header className="main-header bg-light">
    <div className="container-md">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="tel:+989105667705" className="nav-link">
              +989105667705
            </Link>
          </li>
          <li className="nav-item">
            <Link to="mailto:contact@mdhesari.com" className="nav-link">
              contact@mdhesari.com
            </Link>
          </li>
        </ul>
      </nav>
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

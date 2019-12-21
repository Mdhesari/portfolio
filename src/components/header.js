import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { IoIosCall, IoIosMail } from "react-icons/io"

const Header = ({ siteTitle, titleType }) => (
  <header className="main-header bg-light">
    <div className="container-md">
      <nav className="navbar navbar-expand-md navbar-light bg-light d-none d-md-flex">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="tel:+989105667705" className="nav-link">
              <IoIosCall />
              &nbsp; +989105667705
            </Link>
          </li>
          <li className="nav-item">
            <Link to="mailto:contact@mdhesari.com" className="nav-link">
              <IoIosMail />
              &nbsp; contact@mdhesari.com
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

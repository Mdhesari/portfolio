import React from "react"
import { IoIosCall, IoIosMail } from "react-icons/io"
import { Link } from "gatsby"
import { FaToggleOn, FaBlog, FaRProject, FaHome, FaProjectDiagram, FaPaintBrush, FaMoon } from "react-icons/fa"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      show: false,
    }
  }

  toggleMenu() {
    this.setState({ show: !this.state.show })
  }

  toggleChangeMode() {
    document.body.classList.toggle("dark-mode")
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light p-0">
        <button
          onClick={this.toggleMenu}
          id="main-navbar-toggler"
          className={`navbar-toggler ${this.state.show ? "open-menu" : ""}`}
          type="button"
        >
          <span className="icon-menu"></span>
        </button>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              href="tel:+989105667705"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosCall />
              &nbsp; +989105667705
            </a>
          </li>
          <li className="nav-item">
            <a
              href="mailto:contact@mdhesari.com"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosMail />
              &nbsp; contact@mdhesari.com
            </a>
          </li>
        </ul>

        <div
          className={`collapse navbar-collapse ${
            this.state.show ? "show" : ""
          }`}
          id="contentNavbar"
        >
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/articles">
                <FaBlog />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/works">
                <FaPaintBrush />
              </Link>
            </li>
            <li className="list-group-item">
              <button onClick={this.toggleChangeMode} type="button" className="btn btn-default">
                <span><FaMoon /></span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

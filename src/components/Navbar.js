import React from "react"
import { IoIosCall, IoIosMail } from "react-icons/io"

export default () => (
  <nav className="navbar navbar-expand navbar-light bg-light p-0">
    <ul className="navbar-nav ">
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
  </nav>
)

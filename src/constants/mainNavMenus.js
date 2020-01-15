import React from "react"
import { FaBlog, FaHome, FaPaintBrush } from "react-icons/fa"

export default [
  {
    text: <FaHome />,
    url: "/",
    tooltip: "Home",
  },
  {
    text: <FaBlog />,
    url: "/articles",
    tooltip: "Article"
  },
  {
    text: <FaPaintBrush />,
    url: "/works",
    tooltip: "Works & Projects"
  },
]

/* <li className="list-group-item">
              <button onClick={this.toggleChangeMode} type="button" className="btn btn-default dark-toggler">
                <span><FaMoon /></span>
              </button>
            </li> */

import React from "react"
import socialLinks from "../constants/social-media-links"
import { Link } from "gatsby"
import styles from "../css/social-media.module.css"

export default () => (
  <div className="text-center">
    <ul className={styles.socialIcons}>
      {socialLinks.map((item, index) => (
        <li key={index}>
          <Link to={item.link}>
            <span>{item.icon}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

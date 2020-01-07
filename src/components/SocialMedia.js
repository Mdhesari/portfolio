import React from "react"
import socialLinks from "../constants/social-media-links"
import styles from "../css/social-media.module.css"

export default () => (
  <div className="text-center">
    <ul className={styles.socialIcons}>
      {socialLinks.map((item, index) => (
        <li key={index}>
          <a href={item.link}>
            <span>{item.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

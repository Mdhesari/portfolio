import React from "react"
import socialLinks from "../constants/social-media-links"
import styles from "../css/social-media.module.css"
import Linker from "./Linker"

export default () => (
  <div className="text-center">
    <ul className={styles.socialIcons}>
      {socialLinks.map((item, index) => (
        <li key={index}>
          <Linker url={item.link} isLocal={false}>
            <span>{item.icon}</span>
          </Linker>
        </li>
      ))}
    </ul>
  </div>
)

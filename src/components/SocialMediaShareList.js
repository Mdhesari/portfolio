import React from "react"
import styles from "../css/social-media.module.css"
import socialMediaLinks from "../constants/social-media-share-links"
import Linker from "./Linker"

export default ({ url, text }) => {
  return (
    <ul className={styles.socialShare}>
      {socialMediaLinks.map((item, index) => (
        <li key={index * 173}>
          <Linker
            key={index * 174}
            isLocal={false}
            url={item.link.replace("$the_url", url).replace("$the_text", text)}
          >
            <span>{item.icon}</span>
          </Linker>
        </li>
      ))}
    </ul>
  )
}

import React from "react"
import {
  FaTelegramPlane,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa"
import styles from "../css/social-media.module.css"

export default [
  {
    icon: <FaTwitter className={styles.twitter} />,
    link: "https://twitter.com/intent/tweet?url=$the_url&text=$the_text",
  },
  {
    icon: <FaTelegramPlane className={styles.twitter} />,
    link: "https://telegram.me/share/url?url=$the_url&text=$the_text",
  },
  {
    icon: <FaFacebookF className={styles.facebook} />,
    link: "https://www.facebook.com/sharer/sharer.php?u=$the_url",
  },
  {
    icon: <FaLinkedinIn className={styles.linkedin} />,
    link:
      "http://www.linkedin.com/shareArticle?mini=true&url=$the_url&title=$the_text",
  },
]

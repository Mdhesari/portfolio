import React from "react"
import {
  FaTwitterSquare,
  FaFacebook,
  FaLinkedinIn,
  FaFacebookMessenger,
  FaFacebookF,
  FaTwitter,
  FaTelegram,
  FaTelegramPlane,
} from "react-icons/fa"
import styles from "../css/social-media.module.css"

export default ({ url, text }) => {
  const twitter_url =
    "https://twitter.com/intent/tweet?url=" + url + "%20link&text=" + text

  const facebook_url = "https://www.facebook.com/sharer/sharer.php?u=" + url

  const linkedin_url =
    "http://www.linkedin.com/shareArticle?mini=true&url=" +
    text +
    "&title=" +
    text

  return (
    <ul className={styles.socialShare}>
      <li>
        <a href={twitter_url}>
          <FaTwitter className={styles.twitter} />
        </a>
      </li>
      <li>
        <a href={facebook_url}>
          <FaFacebookF className={styles.facebook} />
        </a>
      </li>
      <li>
        <a href={linkedin_url}>
          <FaLinkedinIn className={styles.linkedin} />
        </a>
      </li>
      <li>
        <a href={twitter_url}>
          <FaTelegramPlane className={styles.twitter} />
        </a>
      </li>
    </ul>
  )
}

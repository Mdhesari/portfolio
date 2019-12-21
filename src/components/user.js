import React from "react"
import styles from "./about.module.css"

const User = props => (
  <div className={styles.User}>
    <img src={props.avatar} className={styles.avatar} alt={props.alt} />

    <div className={styles.description}>
      <h2 className={styles.username}></h2>
      <p className={styles.excerpt}></p>
    </div>
  </div>
)

export default () => User
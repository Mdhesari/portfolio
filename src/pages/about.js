import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link } from "gatsby"
import styles from "../components/about.module.css"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt={props.alt} />

    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <Header siteTitle="About Me page" />
    <User
      username="hi"
      avatar="
    https://loremflickr.com/320/240"
      excerpt="test"
    />
    <Link>Home</Link>
  </Container>
)

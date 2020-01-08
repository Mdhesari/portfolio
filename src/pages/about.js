import React from "react"
import Header from "../components/Header"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import Seo from "../components/Seo"

export default () => (
  <Container>
    <Seo title="About me" />
    <Header siteTitle="About Me page" />
    <Link>Home</Link>
  </Container>
)

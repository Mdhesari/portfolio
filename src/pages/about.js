import React from "react"
import Header from "../components/header"
import {Container} from "react-bootstrap"
import { Link } from "gatsby"
import SEO from "../components/Seo"

export default () => (
  <Container>
    <SEO title="About me" />
    <Header siteTitle="About Me page" />
    <Link>Home</Link>
  </Container>
)

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainSection from "../components/sections/main"
import AboutSection from "../components/sections/about"
import ContactSection from "../components/sections/contact"
import Img from "gatsby-image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <AboutSection />
    <ContactSection />
  </Layout>
)

export default IndexPage

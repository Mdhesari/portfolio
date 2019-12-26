import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import MainSection from "../components/sections/main"
import AboutSection from "../components/sections/about"
import ContactSection from "../components/sections/contact"
import ContactModel from "../components/ContactModel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <AboutSection />
    <ContactSection />
    <ContactModel />
  </Layout>
)

export default IndexPage

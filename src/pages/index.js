import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import MainSection from "../components/sections/main"
import AboutSection from "../components/sections/about"
import ContactSection from "../components/sections/contact"
import ContactModel from "../components/ContactModal"
import WorksSection from "../components/sections/works"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <AboutSection />
    <WorksSection />
    <ContactSection />
    <ContactModel />
  </Layout>
)

export default IndexPage

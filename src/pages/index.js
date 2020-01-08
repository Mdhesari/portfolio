import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import MainSection from "../components/sections/Main"
import AboutSection from "../components/sections/About"
import ContactSection from "../components/sections/Contact"
import ContactModal from "../components/ContactModal"
import WorksSection from "../components/sections/Works"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <AboutSection />
    <WorksSection />
    <ContactSection />
    <ContactModal />
  </Layout>
)

export default IndexPage

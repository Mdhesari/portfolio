import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import MainSection from "../components/sections/Main"
import AboutSection from "../components/sections/About"
import ContactSection from "../components/sections/Contact"
import WorksSection from "../components/sections/Works"
import ArticlesSection from "../components/sections/Articles"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MainSection />
    <AboutSection />
    <WorksSection />
    <ContactSection />
    <ArticlesSection />
   
  </Layout>
)

export default IndexPage

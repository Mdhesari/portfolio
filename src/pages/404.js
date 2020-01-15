import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ArticlesSection from "../components/sections/Articles"
import {MdError} from "react-icons/md"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <section className="text-center my-5">
        <h1 className="text-info"><MdError /> Page Not Found</h1>
        <p>
          The page you are looking for is unavailable, but don't worry you are not alone!
        </p>
        <ArticlesSection title="Find out my latest articles" />
      </section>
    </div>
  </Layout>
)

export default NotFoundPage

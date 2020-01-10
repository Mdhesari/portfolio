import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import WorksList from "../components/works/WorksList"

export default () => (
    <Layout>
        <Seo title="recent works" />
        <WorksList />
    </Layout>
)
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ArticlesList from "../components/article/ArticlesList"

export default () => (
    <Layout>
        <Seo title="Blog" />
        <ArticlesList />
    </Layout>
)
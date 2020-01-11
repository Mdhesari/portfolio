import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Img from "gatsby-image"
import moment from "moment"
import {
  FaCalendar,
  FaBookReader,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa"
import readTime from "reading-time"

export default ({ data }) => {
  let { article } = data
  let reading_time = readTime(article.body.body)
  return (
    <Layout>
      <SEO title={article.title} />
      <div className="container">
        <article className="post post-full">
          <header className="post-header">
            <h1 className="post-title">{article.title}</h1>
            <div className="post-meta">
              <time
                className="published"
                dateTime={moment(article.createdAt).format("LL")}
              >
                <FaCalendar className="post-meta-icon" />
                {moment(article.createdAt).format("LL")}
              </time>
              <span>
                <FaBookReader className="post-meta-icon" />
                {reading_time.text}
              </span>
            </div>
            <div className="text-left mt-4">
              <Link to="/" className="btn btn-link pl-4">
                <FaArrowLeft /> Back Home
              </Link>
              <Link to="/articles" className="btn btn-link pl-4 float-right">
                All Articles <FaArrowRight />
              </Link>
            </div>
          </header>
          <Img fluid={article.thumbnailImage.fluid} />
          <div
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: article.body.childMarkdownRemark.html,
            }}
          ></div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    article: contentfulArticles(slug: { eq: $slug }) {
      id: contentful_id
      excerpt
      title
      slug
      body {
        body
        childMarkdownRemark {
          html
        }
      }
      thumbnailImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      createdAt
    }
  }
`

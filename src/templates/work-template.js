import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Gallery from "../components/Gallery"

export default ({ data }) => {
  let { works } = data

  return (
    <Layout>
      <SEO title={works.title} />
      <div className="container">
        <article className="post post-full">
          <header className="post-header">
            <h1 className="post-title">{works.title}</h1>
            <h2 className="post-subtitle text-muted">{works.description}</h2>
          </header>
          <div className="row">
            <div className="col-12 col-md-6">
              <ul className="gallery ">
                <Gallery pictures={works.pictures} />
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <p
                dangerouslySetInnerHTML={{
                  __html: works.text.childMarkdownRemark.html,
                }}
              ></p>
              {works.technologies !== null ? (
                <>
                  <h5 className="mt-4">Technologies : </h5>
                  <ul className="list-group list-group-horizontal list-technologies list-technologies-single text-dark flex-flow-wrap">
                    {works.technologies.map((item, index) => {
                      return (
                        <li key={index} className="list-group-item">
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    works: contentfulWorks(slug: { eq: $slug }) {
      pictures {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description
      id: contentful_id
      slug
      title
      text {
        childMarkdownRemark {
          html
        }
      }
      technologies
    }
  }
`

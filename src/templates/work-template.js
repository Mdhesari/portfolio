import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Gallery from "../components/Gallery"
import { FaArrowLeft, FaArrowRight, FaEye, FaGithub } from "react-icons/fa"
import Container from "react-bootstrap/Container"
import Linker from "../components/Linker"

export default ({ data }) => {
  let { works } = data

  return (
    <Layout>
      <SEO title={works.title} />
      <Container>
        <article className="post post-full">
          <header className="post-header">
            <h1 className="post-title">{works.title}</h1>
            <h2 className="post-subtitle text-muted">{works.description}</h2>
            <div className="text-left mt-4">
              <Link to="/" className="btn btn-link pl-4">
                <FaArrowLeft /> Back Home
              </Link>
              <Link to="/works" className="btn btn-link pl-4 float-right">
                All Works <FaArrowRight />
              </Link>
            </div>
          </header>
          <div className="row">
            <div className="col-12 col-md-6">
              <Gallery pictures={works.pictures} description={works.title} />
            </div>
            <div className="col-12 col-md-6 post-content">
              <p
                dangerouslySetInnerHTML={{
                  __html: works.text.childMarkdownRemark.html,
                }}
              ></p>
              <div className="post-meta">
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
                <div className="links mt-4">
                  <Linker
                    isLocal={false}
                    url="#"
                    className="btn btn-primary btn-sm py-1 px-3 btn-rounded"
                  >
                    Visit <FaEye />
                  </Linker>
                  <Linker
                  isLocal={false}
                  url="#"
                  className="btn btn-secondary btn-sm py-1 px-3 btn-rounded float-right"
                  >
                    Source <FaGithub />
                  </Linker>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
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

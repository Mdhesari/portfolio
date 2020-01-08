import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const getData = graphql`
  query {
    site {
      siteMetadata {
        about {
          title
          description
          button_text
        }
      }
    }
    resume: allContentfulResume(
      limit: 1
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          pdf {
            file {
              url
            }
          }
        }
      }
    }
    profilePicture: allContentfulAsset(
      filter: { title: { eq: "profile" } }
      limit: 1
    ) {
      edges {
        node {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(getData)

  const { profilePicture, resume, site } = data

  const { title, description, button_text } = site.siteMetadata.about

  const pdf_url = "https://" + resume.edges[0].node.pdf.file.url

  return (
    <section className="about-me">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="inner-picture mx-auto">
              <Img fluid={profilePicture.edges[0].node.fluid} />
            </div>
            <h3 className="text-primary-title">{title}</h3>
            <p className="mt-3 text-secondary caption mx-auto lead">
              {description}
            </p>
            <a
              href={pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm mr-1 mt-3"
            >
              {button_text}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

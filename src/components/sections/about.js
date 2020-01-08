import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const getData = graphql`
  query {
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
    profileImage: file(relativePath: { eq: "me-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(getData)

  const pdf_url = "https://" + data.resume.edges[0].node.pdf.file.url

  return (
    <section className="about-me">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="inner-picture mx-auto">
              <Img fluid={data.profileImage.childImageSharp.fluid} />
            </div>
            <h3 className="text-primary-title">About Me</h3>
            <p className="mt-3 text-secondary caption mx-auto lead">
              hey there, mohamad fazel is technology and nature lover, he always
              tries to be creative and productive every minute of his life.
            </p>
            <a href={pdf_url} target="_blank" className="btn btn-outline-primary btn-sm mr-1 mt-3">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

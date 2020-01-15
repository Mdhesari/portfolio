import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Title from "../Title"

const getData = graphql`
  query {
    aboutProfile: allContentfulAboutProfile(
      limit: 1
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          buttonText
          profilePicture {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          resume {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default () => {
  let data = useStaticQuery(getData)

  const aboutProfile = data.aboutProfile.edges[0].node

  let { resume, profilePicture, title, description, buttonText } = aboutProfile

  resume = "https://" + resume.file.url

  return (
    <section className="about-me">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {profilePicture !== null ? (
              <div className="inner-picture mx-auto">
                <Img fluid={profilePicture.fluid} />
              </div>
            ) : (
              ""
            )}

            <Title>{title}</Title>
            <p
              className="mt-3 text-secondary caption mx-auto lead"
              dangerouslySetInnerHTML={{
                __html: description.childMarkdownRemark.html,
              }}
            ></p>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm btn-rounded py-2 px-3 mr-1 mt-3"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

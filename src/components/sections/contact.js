import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ContactModal from "../ContactModal"

const getData = graphql`
  query {
    site {
      siteMetadata {
        contact {
          alert {
            success {
              title
              body
              button_text
            }
            error {
              title
              body
              button_text
            }
          }
        }
      }
    }
  }
`

export default () => {
  const { site } = useStaticQuery(getData)
  return (
    <>
      <section className="contact py-5">
        <div className="container">
          <div className="inner-contact text-center py-5">
            <h3>Can I help you there?</h3>
            <button
              data-target="#contact"
              data-toggle="modal"
              className="btn btn-info btn-lg mt-4"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
      <ContactModal data={site.siteMetadata} />
    </>
  )
}

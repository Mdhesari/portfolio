/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "../styles/bootstrap.css"
import "jquery/dist/jquery.slim"
import "bootstrap/dist/js/bootstrap"
import SocialMedia from "./SocialMedia"
import { FaCode, FaHeart } from "react-icons/fa"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className="main-footer pt-5">
          <SocialMedia />
          <div className="container">
            <p className="text-center my-3">
              © {new Date().getFullYear()}, <FaCode className="text-secondary" /> Built with <FaHeart className="text-danger" /> 
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

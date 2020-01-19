import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    let dark = localStorage.getItem("dark-mode")

    if (dark === "true") {
      if (!document.body.classList.contains("dark-mode"))
        document.body.classList.add("dark-mode")
    }
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

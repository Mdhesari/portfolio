import React from "react"
import Card from "../Card"
import { Link } from "gatsby"
import GImage from "gatsby-image"

export default ({ article }) => {
  let { title, thumbnailImage, slug, excerpt } = article

  slug = "/articles/" + slug

  return (
    <Card className="blog-card">
      <Link to={slug}>
        <div className="card-inner-img-top">
          {thumbnailImage !== null ? (
            <GImage fluid={thumbnailImage.fluid} className="card-img-top" alt={title} />
          ) : (
            ""
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          {/* <p className="card-text">{excerpt}</p> */}
        </div>
      </Link>
    </Card>
  )
}

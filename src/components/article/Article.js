import React from "react"
import Card from "../Card"
import { Link } from "gatsby"
import GImage from "gatsby-image"

export default ({ article }) => {
  let { title, thumbnailImage, slug} = article

  slug = "/articles/" + slug

  return (
    <Card className="blog-card">
      <Link to={slug}>
        <div className="card-inner-img-top">
          {thumbnailImage !== null ? (
            <GImage fluid={thumbnailImage.fluid} className="card-img-top card-img-fix-height" alt={title} />
          ) : (
            ""
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
        </div>
      </Link>
    </Card>
  )
}

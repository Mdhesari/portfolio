import React from "react"
import Card from "../Card"
import { Link } from "gatsby"
import GImage from "gatsby-image"
import moment from "moment"

export default ({ article, className }) => {
  let { title, thumbnailImage, slug, excerpt, createdAt, body } = article

  slug = "/articles/" + slug

  className = "blog-card card-gatsby-init-pos " + className

  return (
    <Card className={className}>
      <Link to={slug} className="row no-gutters">
        <div className="col-md-4">
          {thumbnailImage !== null ? (
            <GImage
              fluid={thumbnailImage.fluid}
              className="card-img"
              alt={title}
            />
          ) : (
            ""
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <p
              className="card-text mb-4"
              dangerouslySetInnerHTML={
                excerpt !== null
                  ? { __html: body.childMarkdownRemark.excerpt }
                  : { __html: excerpt }
              }
            >
            </p>
            <p className="card-text">
              <small className="text-muted card-moment d-none d-lg-block">
                {moment(createdAt)
                  .startOf("hours")
                  .fromNow()}
              </small>
            </p>
          </div>
        </div>
      </Link>
    </Card>
  )
}

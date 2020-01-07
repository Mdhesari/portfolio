import React from "react"
import { Image } from "gatsby-image"

export default ({ work }) => {
  const { pictures, title, description, slug } = work

  console.log(pictures)
  return (
    <div className="masonry-items pb-5">
      <div className="item">
        <img src={pictures[0].fluid.src} />
        <a href={"/".slug} class="item-wrapper">
          <div class="item-inner">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </a>
      </div>
    </div>
  )
}

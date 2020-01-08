import React from "react"

export default ({ work }) => {
  let { pictures, title, description, slug } = work

  slug = "/works/" + slug

  return (
    <div className="item">
      <img src={pictures[0].fluid.src} alt={title} />
      <a href={slug} className="item-wrapper">
        <div className="item-inner">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </a>
    </div>
  )
}

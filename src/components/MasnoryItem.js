import React from "react"

export default ({ work }) => {
  const { pictures, title, description, slug,url } = work

  let has_picture = pictures !== null

  let class_name = (has_picture ? "item" : "item item-box")

  let full_url = url === null ? ("/works/" + slug) : url

  return (
    <div className={class_name}>
      {has_picture ? <img src={pictures[0].fluid.src} alt={title} /> : ""}
      <a href={full_url} className="item-wrapper">
        <div className="item-inner">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </a>
    </div>
  )
}

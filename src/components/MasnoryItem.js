import React from "react"

export default ({ work }) => {
  const { pictures, title, description, slug } = work

  return (
    <div className="masonry-items pb-5">
      <div className="item">
        <img src={pictures[0].fluid.src} />
        <a href={"/works/".slug} class="item-wrapper">
          <div class="item-inner">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </a>
      </div>
    </div>
  )
}

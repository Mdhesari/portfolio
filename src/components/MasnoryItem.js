import React from "react"
import Linker from "./Linker"

export default ({ work }) => {
  const { pictures, title, description, slug, url, technologies } = work

  let has_picture = pictures !== null

  let class_name = has_picture ? "item" : "item item-box"

  let full_url = url === null ? "/works/" + slug : url

  return (
    <div className={class_name}>
      {has_picture ? <img src={pictures[0].fluid.src} alt={title} /> : ""}
      <Linker url={full_url} className="item-wrapper" isLocal={url === null}>
        <div className="item-inner">
          <h5>{title}</h5>
          <p>{description}</p>
          {has_picture ? (
            ""
          ) : (
            <ul className="list-group list-group-horizontal list-technologies text-dark">
              {technologies.map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </Linker>
    </div>
  )
}

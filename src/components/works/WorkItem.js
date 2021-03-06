import React from "react"
import Linker from "../Linker"
import Card from "../Card"

/* 
<div className={class_name}>
        {has_picture ? <img src={pictures[0].fluid.src} alt={title} /> : ""}
        <Linker url={full_url} className="item-wrapper" isLocal={isLocal}>
          <div className="item-inner">
            <h5>{title}</h5>
            <p>{description}</p>
            {has_picture ? (
              ""
            ) : (
              <ul className="list-group list-group-horizontal list-technologies text-dark flex-flow-wrap">
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
*/

export default ({ work }) => {
  const { pictures, title, description, slug, url, technologies } = work

  let has_picture = pictures !== null

  let class_name = has_picture ? "item" : "item item-box"

  let isLocal = url === null

  let full_url = isLocal ? "/works/" + slug : url

  return (
    <Card>
      {has_picture ? <img src={pictures[0].fluid.src} alt={title} /> : ""}
      <div className="card-img-overlay">
        <Linker url={full_url} className="item-wrapper" isLocal={isLocal}>
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          {has_picture ? (
            ""
          ) : (
            <ul className="list-group list-group-horizontal list-technologies text-dark flex-flow-wrap">
              {technologies.map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                )
              })}
            </ul>
          )}
        </Linker>
      </div>
    </Card>
  )
}

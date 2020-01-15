import React from "react"

export default ({ className, children }) => {
  let class_name = "card " + className

  return <article className={class_name}>{children}</article>
}

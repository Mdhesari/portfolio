import React from "react"

export default ({ children, className }) => {
  let class_name = "text-primary-title " + className

  return <h3 class={class_name}>{children}</h3>
}

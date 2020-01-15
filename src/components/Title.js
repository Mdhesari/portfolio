import React from "react"

export default ({ children, className }) => {
  let class_name = "text-primary-title " + className

  return <h3 className={class_name}>{children}</h3>
}

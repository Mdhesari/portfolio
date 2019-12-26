import React from "react"

export default ({id, children}) => {
    return (
    <div className="modal fade" id={id}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body p-0">
      {children}
        </div>
      </div>
    </div>
  </div>
)
}
import React from "react"
import SimpleModal from "./SimpleModal"
import "../css/contact.css"

export default () => {
  return (
    <SimpleModal id="contact">
      <form action="" method="post" className="m-0 contact-form">
        <div className="container pt-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Full Name..."
              name="fullname"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email or Mobile Number..."
              name="email"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message..."
              className="form-control"
            ></textarea>
          </div>
        </div>
        <input type="submit" className="btn btn-success btn-full py-3" />
      </form>
    </SimpleModal>
  )
}

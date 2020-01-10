import React from "react"
import SimpleModal from "./SimpleModal"
import "../css/contact.css"
import { FaArrowLeft } from "react-icons/fa"
import swal from "sweetalert"

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: null,
    }
  }

  render() {
    return (
      <SimpleModal id="contact">
        <button
          type="button"
          className="btn btn-link text-secondary"
          data-dismiss="modal"
          id="contact-close-btn"
        >
          <FaArrowLeft />
        </button>
        <form
          action="https://formspree.io/xayeyven"
          method="post"
          className="m-0 contact-form"
          onSubmit={this.submitForm}
        >
          <div className="container pt-4">
            <div className="form-group">
              <label htmlFor="fullname">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="John Smith"
                name="fullname"
                id="fullname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="mdhesari99@gmail.com"
                name="_replyto"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="tell me what you need ,for ex : need technical consultant for our company"
                className="form-control"
                rows="6"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-success btn-full py-3 w-100 border-0 radius-0"
          />
        </form>
      </SimpleModal>
    )
  }

  submitForm(ev) {
    // prevent default behavior
    ev.preventDefault()

    // required info
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()

    // http request
    xhr.open(form.method, form.action)
    // set headers
    xhr.setRequestHeader("Accept", "application/json")
    // check response
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return

      if (xhr.status === 200) {
        // success
        this.setState({ status: 1 })
        swal(
          "Your data is submitted and we are going to contact you soon!",
          "+989105667705",
          "success"
        )
        form.reset()
        document.querySelector("#contact-close-btn").click()
      } else {
        // failed
        this.setState({ status: 0 })
        swal(
          "Something went wrong, please try again later.",
          "Be careful to enter valid values!",
          "error"
        )
      }
    }

    xhr.send(data)
  }
}

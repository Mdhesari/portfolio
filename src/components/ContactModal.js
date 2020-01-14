import React from "react"
import SimpleModal from "./SimpleModal"
import "../css/contact.css"
import { FaArrowLeft } from "react-icons/fa"
import swal from "sweetalert"

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.formValidate = this.formValidate.bind(this)
    this.state = {
      status: null,
      fullname: null,
      _replyto: null,
      message: null,
      fullname_feedback: "",
      _replyto_feedback: "",
      message_feedback: "",
      has_error: null,
    }
  }

  formValidate(e) {
    const handler = e.target

    this.singleValidate(handler)
  }

  singleValidate(handler) {
    if (handler === null) {
      return
    }
    let isValid = true
    let feedback = ""

    let text = handler.value

    let name_prop = handler.getAttribute("name")

    if (text === "") {
      isValid = false
      feedback = "Don't leave this field empty."
    }

    let new_state = {}
    new_state[name_prop] = isValid
    new_state[name_prop + "_feedback"] = feedback
    new_state["has_error"] = isValid
    this.setState(new_state)

    return isValid
  }

  validateAssign(key) {
    return key !== null ? (key ? "is-valid" : "is-invalid") : ""
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
                className={`form-control ${this.validateAssign(
                  this.state.fullname
                )}`}
                placeholder="John Smith"
                name="fullname"
                id="fullname"
                onKeyUp={this.formValidate}
              />
              <div className="invalid-feedback mt-2 ml-2">
                {this.state.fullname_feedback}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className={`form-control ${this.validateAssign(
                  this.state._replyto
                )}`}
                placeholder="mdhesari99@gmail.com"
                name="_replyto"
                id="email"
                onKeyUp={this.formValidate}
              />
              <div className="invalid-feedback mt-2 ml-2">
                {this.state._replyto_feedback}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                onKeyUp={this.formValidate}
                id="message"
                name="message"
                placeholder="tell me what you need ,for ex : need technical consultant for our company"
                className={`form-control ${this.validateAssign(
                  this.state.message
                )}`}
                rows="6"
              ></textarea>
              <div className="invalid-feedback mt-2 ml-2">
                {this.state.message_feedback}
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-success btn-full py-3 w-100 border-0 radius-0 form-validate"
            value="Send"
          />
        </form>
      </SimpleModal>
    )
  }

  submitForm(ev) {
    // prevent default behavior
    ev.preventDefault()

    const alertData = this.props.data.contact.alert

    let elements = document.querySelectorAll(".form-control")

    for (let element of elements) {
      let isValid = this.singleValidate(element)
      if (!isValid) {
        return 0
      }
    }

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
        swal(alertData.success.title, alertData.success.body, "success")
        form.reset()
        document.querySelector("#contact-close-btn").click()

        this.setState({
          status: null,
          fullname: null,
          _replyto: null,
          message: null,
        })
      } else {
        // failed
        this.setState({ status: 0 })
        swal(alertData.has_error.title, alertData.error.body, "error")
      }
    }

    xhr.send(data)
  }
}

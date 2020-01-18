import React from "react"
import SimpleModal from "./SimpleModal"
import "../css/contact.css"
import { FaArrowLeft } from "react-icons/fa"
import swal from "sweetalert"

function doesInclude(obj, key) {
  return obj.indexOf(key) !== -1
}

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

  /**
   * validate event is triggered whenever form is submitted
   * @param {event} e
   */
  formValidate(e) {
    const handler = e.target

    this.singleValidate(handler)
  }

  /**
   * pass dom element and validate its *value*
   * @param {object|document} handler
   */
  singleValidate(handler) {
    if (handler === null) {
      return
    }

    let isValid = true
    let feedback = ""
    let text = handler.value
    let name_prop = handler.getAttribute("name")
    let initial_validation = handler.getAttribute("data-validation").split("|")
    let validations = {}

    for (let rule of initial_validation) {
      if (doesInclude(rule, ":")) {
        let splitted = rule.split(":")

        if (splitted.length < 2) {
          continue
        }

        validations[splitted[0]] = splitted[1]
      } else {
        validations[rule] = true
      }
    }

    if ("required" in validations)
      if (text === "") {
        isValid = false
        feedback = "Don't leave this field empty."
      }

    if ("min" in validations) {
      if (text.length < validations["min"]) {
        isValid = false
        feedback =
          "You should enter at least " + validations["min"] + " characters."
      }
    }

    if ("max" in validations) {
      if (text.length > validations["max"]) {
        isValid = false
        feedback =
          "Characters are a lot, max chracter number is " +
          validations["max"] +
          "."
      }
    }

    if ("email" in validations) {
      let input = String(text).toLowerCase()

      isValid = false

      let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let is_email_valid = re.test(input)

      if (!is_email_valid) {
        if ("canNumber" in validations) {
          re = /^(\+|00){0,2}(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/

          let is_number_valid = re.test(input)

          if (is_number_valid) {
            isValid = true
          } else {
            re = /^(\+)|[0-9]+/

            if (re.test(input)) {
              feedback =
                "Phone number is not valid, start with your country code like +98"
            }
          }
        }

        if (!isValid && feedback === "") {
          feedback = "Email is not valid, correct format : example@gmail.com"
        }
      }
    }

    let new_state = {}
    new_state[name_prop] = isValid
    new_state[name_prop + "_feedback"] = feedback
    new_state["has_error"] = isValid
    this.setState(new_state)

    return isValid
  }

  /* set class for validation */
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
                onBlur={this.formValidate}
                type="text"
                className={`form-control ${this.validateAssign(
                  this.state.fullname
                )}`}
                placeholder="John Smith"
                name="fullname"
                id="fullname"
                data-validation="required|min:3"
              />
              <div className="invalid-feedback mt-2 ml-2">
                {this.state.fullname_feedback}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email or Phone Number</label>
              <input
                onBlur={this.formValidate}
                type="text"
                className={`form-control ${this.validateAssign(
                  this.state._replyto
                )}`}
                placeholder="example@gmail.com"
                name="_replyto"
                id="email"
                data-validation="required|email|canNumber|max:255"
              />
              <div className="invalid-feedback mt-2 ml-2">
                {this.state._replyto_feedback}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                onBlur={this.formValidate}
                id="message"
                name="message"
                placeholder="tell me what you need ,for ex : need technical consultant for our company"
                className={`form-control ${this.validateAssign(
                  this.state.message
                )}`}
                data-validation="min:8"
                rows="6"
              ></textarea>
              <div className="invalid-feedback mt-2 ml-2">
                {this.state.message_feedback}
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-success shadow-none btn-full py-3 w-100 border-0 radius-0 form-validate"
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

    let elements = []

    if (typeof document !== "undefined") {
      elements = document.querySelectorAll(".form-control")
    }

    let isValid = true

    for (let element of elements) {
      let isActionValid = this.singleValidate(element)
      if (!isActionValid) {
        isValid = false
      }
    }

    if (!isValid) {
      return 0
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

        if (typeof document !== "undefined")
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

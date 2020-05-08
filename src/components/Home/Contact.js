import React from "react"
import Title from "../Globals/Title"

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/katescottnapa@icloud.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>

            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="example@email.com"
              />
            </div>

            {/* message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                type="textarea"
                className="form-control"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Your message here."
              />
            </div>

            {/* submit */}
            <button
              type="submit"
              className="btn btn-block btn-yellow text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

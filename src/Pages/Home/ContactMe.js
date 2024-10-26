import React from "react";

function ContactMe() {
  return (
    <section id="Contact" className="container container1">
      <p className="sub--title">Get In touch</p>
      <h1>Connect with us</h1>
      <p className="text-lg">
        Get in touch with me I am chilling and approachable guy
      </p>
      <div className="contact-box">
        <div className="contact-right">
          <h3>Reach us</h3>
          <table>
            <tr>
              <td>Email:</td>
              <td>hayalu4hb@gmail.com</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>+251900973100</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>Arada, Addis Ababa</td>
            </tr>
          </table>
        </div>
        <div className="contact-left">
          <h3>Send you request</h3>

          <form className="second-form">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="first-name">Full Name</label>
                <input
                  type="text"
                  className="contact--input text-md"
                  name="first-name"
                  id="first-name"
                />
              </div>
              <div className="input-group">
                <label className="text-md" htmlFor="phone-number">
                  Phone
                </label>
                <input
                  type="number"
                  className="contact--input text-md"
                  name="phone-number"
                  id="phone-number"
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email" className="text-md">
                  Email
                </label>
                <input
                  type="email"
                  className="contact--input text-md"
                  name="email"
                  id="email"
                />
              </div>
              <div className="input-group">
                <label htmlFor="first-name">Subject</label>
                <input
                  type="text"
                  className="contact--input text-md"
                  name="first-name"
                  id="first-name"
                />
              </div>
            </div>
            <label className="contact-label">Message</label>
            <textarea
              type="number"
              className="contact--input text-md"
              name="message"
              id="message"
              placeholder="type your message..."
              rows={5}
            ></textarea>
            <label htmlFor="checkbox" className="checkbox--label">
              <input type="checkbox" required name="checkbox" id="checkbox" />
              <span className="text-sm"> I accept the terms</span>
            </label>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;

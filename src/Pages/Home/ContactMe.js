import React from "react";
import { useState } from "react";

function ContactMe() {
  const [Data, setData] = useState({
    Full_Name: "",
    Phone_number: "",
    Email: "",
    Message: "",
    Subject: "",
  });

  const handleLogin = async (e) => {
    const { Full_Name, Phone_number, Email, Subject, Message } = Data;

    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/dash4life/google_sheets/ygdZwjioIcwehzbI?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [Full_Name, Phone_number, Email, Subject, Message],
          ]),
        }
      );
      await response.json();
      setData({
        ...Data,
        Full_Name: "",
        Phone_number: "",
        Email: "",
        Subject: "",
        Message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const { Full_Name, Phone_number, Email, Subject, Message } = Data;
  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
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

          <form className="second-form" onSubmit={handleLogin}>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="first-name">Full Name</label>
                <input
                  type="text"
                  className="contact--input text-md"
                  name="Full_Name"
                  id="Full-Name"
                  value={Full_Name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label className="text-md" htmlFor="phone-number">
                  Phone
                </label>
                <input
                  type="number"
                  className="contact--input text-md"
                  name="Phone_number"
                  id="phone-number"
                  value={Phone_number}
                  onChange={handleChange}
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
                  name="Email"
                  id="email"
                  value={Email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="first-name">Subject</label>
                <input
                  type="text"
                  className="contact--input text-md"
                  name="Subject"
                  id="Subject"
                  value={Subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label className="contact-label">Message</label>
            <textarea
              type="number"
              className="contact--input text-md"
              name="Message"
              id="Message"
              placeholder="type your message..."
              rows={5}
              value={Message}
              onChange={handleChange}
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

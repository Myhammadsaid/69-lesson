import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section className="contact">
          <div className="container">
            <p className="contact-title">CONTACT</p>
            <h1 className="contact-text">
              Food Stalls with Persons but also specialized equipment, Skills to
              manage.
            </h1>
            <form action="">
              <input type="text" placeholder="Enter your message" />
              <button className="contact-btn">Send</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

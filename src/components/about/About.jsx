import React, { Component } from "react";
import img from "../../assets/images/about-img.png";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="about">
          <div className="container">
            <div className="about-style">
              <img src={img} alt="about-img" />
              <div className="about-content">
                <p className="about-title">ABOUT US</p>
                <p className="about-text">
                  Food Stalls with Persons but to Product marketing plane
                  catlogues etc to.
                </p>
                <p className="about-par">
                  There are many things are needed to start the Fast Food
                  Business. You need not only Just Food Stalls with Persons but
                  also equipment make your marketing plane Effective.
                </p>
                <button className="about-btn">Read More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

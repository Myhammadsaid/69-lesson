import React, { Component } from "react";
import "./Features.css";
import component1 from "../../assets/images/component-img1.png";
import component2 from "../../assets/images/component-img2.png";
import component3 from "../../assets/images/component-img3.png";

export default class Features extends Component {
  render() {
    return (
      <div>
        <section className="feature">
          <div className="container">
            <div className="feature-titles">
              <p className="feature-title1">F E A T U R E S</p>
              <p className="feature-title2">Food with a New Passion</p>
            </div>
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-img">
                  <img src={component1} alt="img" />
                </div>
                <p className="feature-text">Quality Food</p>
                <p className="feature-par">
                  It can be a very secure path to earn good money and make you
                  very successful creative entrepreneur.
                </p>
              </div>
              <div className="feature-card">
                <img src={component2} alt="img" />
                <p className="feature-text">Food Delivery</p>
                <p className="feature-par">
                  It can be a very secure path to earn good money and make you
                  very successful creative entrepreneur.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-img">
                  <img src={component3} alt="img" />
                </div>
                <p className="feature-text">Super Taste</p>
                <p className="feature-par">
                  It can be a very secure path to earn good money and make you
                  very successful creative entrepreneur.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

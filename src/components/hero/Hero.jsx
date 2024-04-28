import React, { Component } from "react";
import hero from "../../assets/images/hero-img.jpg";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="container">
            <div className="hero-style">
              <div className="hero-content">
                <h1 className="hero-text">
                  Making time a good time by making food the good food.
                </h1>
                <p className="hero-par">
                  There are many things are needed to start the Fast Food
                  Business. You need not only Just Food Stalls with Persons but
                  also specialized equipment,
                </p>
                <div className="hero-btns">
                  <button className="hero-btn">Order Now</button>
                  <button className="hero-btn">Food Details</button>
                </div>
              </div>
              <img className="hero-img" src={hero} alt="" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

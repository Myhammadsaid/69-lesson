import React, { Component } from "react";
import star from "../../assets/images/stars.png";
import { data } from "../data/data";
import "./Product.css";

export default class Product extends Component {
  render() {
    return (
      <div>
        <section className="product">
          <div className="container">
            <p className="product-title">M E N U</p>
            <p className="product-text">Food Full of treaty Love</p>
            <p className="product-par">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers,{" "}
            </p>
            <div className="product-cards">
              {data?.map((el) => (
                <div key={el.id} className="product-card">
                  <img src={el.bg} alt="product-img" />
                  <div className="product-card-content">
                    <div className="product-box">
                      <p className="product-c-text">{el.text}</p>
                      <p className="product-c-text">{el.price}$</p>
                    </div>
                    <p className="product-c-par">{el.par}</p>
                    <div className="product-rating">
                      <button className="product-btn">+</button>
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="product-btn2">Learn More</button>
          </div>
        </section>
      </div>
    );
  }
}

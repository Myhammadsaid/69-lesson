import React, { Component } from "react";
import product1 from "../../assets/images/product-img1.png";
import product2 from "../../assets/images/product-img2.png";
import product3 from "../../assets/images/product-img3.png";
import product4 from "../../assets/images/product-img4.png";
import product5 from "../../assets/images/product-img5.png";
import product6 from "../../assets/images/product-img6.png";
import star from "../../assets/images/stars.png";
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
              <div className="product-card">
                <img src={product1} alt="product-img" />
                <div className="product-card-content">
                  <div className="product-box">
                    <p className="product-c-text">Vegie Muffen</p>
                    <p className="product-c-text">16$</p>
                  </div>
                  <p className="product-c-par">
                    There are many things are needed to start the Fast Food
                    Business.
                  </p>
                  <div className="product-rating">
                    <button className="product-btn">+</button>
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={product2} alt="product-img" />
                <div className="product-card-content">
                  <div className="product-box">
                    <p className="product-c-text">Salads</p>
                    <p className="product-c-text">12$</p>
                  </div>
                  <p className="product-c-par">
                    There are many things are needed to start the Fast Food
                    Business.
                  </p>
                  <div className="product-rating">
                    <button className="product-btn">+</button>
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={product3} alt="product-img" />
                <div className="product-card-content">
                  <div className="product-box">
                    <p className="product-c-text">Burger</p>
                    <p className="product-c-text">10$</p>
                  </div>
                  <p className="product-c-par">
                    There are many things are needed to start the Fast Food
                    Business.
                  </p>
                  <div className="product-rating">
                    <button className="product-btn">+</button>
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={product4} alt="product-img" />
                <div className="product-card-content">
                  <div className="product-box">
                    <p className="product-c-text">Delmonico Steak dish</p>
                    <p className="product-c-text">14$</p>
                  </div>
                  <p className="product-c-par">
                    There are many things are needed to start the Fast Food
                    Business.
                  </p>
                  <div className="product-rating">
                    <button className="product-btn">+</button>
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={product5} alt="product-img" />
                <div className="product-card-content">
                  <div className="product-box">
                    <p className="product-c-text">Egg Masala</p>
                    <p className="product-c-text">9$</p>
                  </div>
                  <p className="product-c-par">
                    There are many things are needed to start the Fast Food
                    Business.
                  </p>
                  <div className="product-rating">
                    <button className="product-btn">+</button>
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={product6} alt="product-img" />
                <div className="product-card-content">
                  <div className="product-box">
                    <p className="product-c-text">Peach Melba dish</p>
                    <p className="product-c-text">15$</p>
                  </div>
                  <p className="product-c-par">
                    There are many things are needed to start the Fast Food
                    Business.
                  </p>
                  <div className="product-rating">
                    <button className="product-btn">+</button>
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <button className="product-btn2">Learn More</button>
          </div>
        </section>
      </div>
    );
  }
}

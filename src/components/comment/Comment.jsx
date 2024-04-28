import React, { Component } from "react";
import user from "../../assets/images/user-img.png";
import star from "../../assets/images/stars.png";
import "./Comment.css";

export default class Comment extends Component {
  render() {
    return (
      <div>
        <section className="comment">
          <div className="container">
            <p className="comment-title">TESTIMONIAL</p>
            <p className="comment-text">Making Food great again and again</p>
            <p className="comment-par">
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc to make your.
            </p>
            <img className="img1" src={user} alt="user" />
            <p className="comment-par2">
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </p>
            <img className="img2" src={star} alt="star" />
            <p className="comment-username">Augusta W. Reynoso</p>
            <p className="comment-job">UI&UX DeSIGNER</p>
          </div>
        </section>
      </div>
    );
  }
}

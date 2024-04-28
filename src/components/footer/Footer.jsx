import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="footer-style">
              <div className="footer-links">
                <img src={logo} alt="logo" />
                <a href="#" className="footer-link">
                  www.company name.com
                </a>
                <a href="#" className="footer-link">
                  companyname@gmail.com
                </a>
                <a href="#" className="footer-link">
                  Phone: +7 485-118-03-25
                </a>
              </div>
              <div className="footer-links">
                <a href="#" className="footer-title">
                  Home
                </a>
                <a href="#" className="footer-link">
                  Landingpage
                </a>
                <a href="#" className="footer-link">
                  Documentation
                </a>
                <a href="#" className="footer-link">
                  Referral Program
                </a>
                <a href="#" className="footer-link">
                  UI & UX Design
                </a>
                <a href="#" className="footer-link">
                  Web Design
                </a>
              </div>
              <div className="footer-links">
                <a href="#" className="footer-title">
                  Menu
                </a>
                <a href="#" className="footer-link">
                  Landingpage
                </a>
                <a href="#" className="footer-link">
                  Documentation
                </a>
                <a href="#" className="footer-link">
                  Referral Program
                </a>
                <a href="#" className="footer-link">
                  UI & UX Design
                </a>
                <a href="#" className="footer-link">
                  Web Design
                </a>
              </div>
              <div className="footer-links">
                <a href="#" className="footer-title">
                  Company
                </a>
                <a href="#" className="footer-link">
                  Landingpage
                </a>
                <a href="#" className="footer-link">
                  Documentation
                </a>
                <a href="#" className="footer-link">
                  Referral Program
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

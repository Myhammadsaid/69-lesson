import React, { Component } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <nav>
              <div className="nav-items">
                <a href="#" className="logo">
                  <img src={logo} alt="" />
                </a>
                <div
                  className={`nav-links ${this.state.toggle ? "open" : ""}`}
                  id="navbar-responsive"
                >
                  <a href="#" className="nav-link">
                    Home
                  </a>
                  <a href="#" className="nav-link">
                    About
                  </a>
                  <a href="#" className="nav-link">
                    Menu
                  </a>
                  <a href="#" className="nav-link">
                    Features
                  </a>
                  <a href="#" className="nav-link">
                    Contact Us
                  </a>
                </div>
              </div>
              <button className="header-btn" id="navbar-responsive">
                Booking Now
              </button>
              <button
                onClick={() => this.setState({ toggle: !this.state.toggle })}
                class="menu-btn"
                id="menu-btn"
              >
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </button>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

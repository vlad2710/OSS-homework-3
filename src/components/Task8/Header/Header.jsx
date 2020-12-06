import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <h3 className="header__title">My Bookmarker</h3>
          </div>
        </div>
      </header>
    );
  }
}

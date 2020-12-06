import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainForm from "../MainForm/MainForm";
import "./MyBookmarker.css";

export default class MyBookmarker extends Component {
  render() {
    return (
      <div className="my-book-marker">
        <Header />
        <MainForm />
        <Footer />
      </div>
    );
  }
}

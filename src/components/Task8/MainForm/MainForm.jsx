import React, { Component } from "react";
import BookmarksResultItem from "../BookmarksResultItem/BookmarksResultItem";
import "./MainForm.css";

export default class MainForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: [],
      siteName: "",
      siteUrl: "",
    };

    this.saveBookmark = (event) => {
      event.preventDefault();

      if (!this.validateForm()) {
        return false;
      }

      const bookmark = {
        name: this.state.siteName,
        url: this.state.siteUrl,
      };

      if (localStorage.getItem("bookmarks") === null) {
        this.setState(
          ({ bookmarks }) => {
            const newArr = [...bookmarks, bookmark];

            return {
              bookmarks: newArr,
            };
          },
          () => {
            localStorage.setItem(
              "bookmarks",
              JSON.stringify(this.state.bookmarks)
            );
          }
        );
      } else {
        let localBookmarks = JSON.parse(localStorage.getItem("bookmarks"));

        this.setState(
          ({ bookmarks }) => {
            const newArr = [...localBookmarks, bookmark];

            return {
              bookmarks: newArr,
            };
          },
          () => {
            localStorage.setItem(
              "bookmarks",
              JSON.stringify(this.state.bookmarks)
            );
          }
        );
      }

      this.setState({
        siteName: "",
        siteUrl: "",
      });
    };

    this.deleteBookmark = (url) => {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

      const indexItem = bookmarks.findIndex((item) => item.url == url);

      this.setState(
        ({ bookmarks }) => {
          const newArr = [
            ...bookmarks.slice(0, indexItem),
            ...bookmarks.slice(indexItem + 1),
          ];

          return {
            bookmarks: newArr,
          };
        },
        () => {
          localStorage.setItem(
            "bookmarks",
            JSON.stringify(this.state.bookmarks)
          );
        }
      );
    };

    this.handleInputChange = (event) => {
      const target = event.target;
      switch (target.type) {
        case "text":
          this.setState({
            siteName: target.value,
          });
          break;
        case "url":
          this.setState({
            siteUrl: target.value,
          });
          break;
      }
    };

    this.validateForm = () => {
      if (!this.state.siteName || !this.state.siteUrl) {
        alert("Please fill the form");
        return false;
      }

      let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      let regex = new RegExp(expression);

      if (!this.state.siteUrl.match(regex)) {
        alert("Please use a valid url");
        return false;
      }

      return true;
    };
  }

  componentDidMount() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (bookmarks != null) {
      bookmarks.map((item) => {
        this.setState(({ bookmarks }) => {
          let newArr = [...bookmarks, item];

          return {
            bookmarks: newArr,
          };
        });
      });
    }
  }

  render() {
    return (
      <div>
        <section className="main-form">
          <div className="container">
            <div className="main-form__wrap">
              <h2 className="main-form__title">Bookmark your favorite Sites</h2>
              <form className="main-form__block">
                <label className="main-form__label">Site Name</label>
                <input
                  className="main-form__input"
                  type="text"
                  placeholder="Website Name"
                  value={this.state.siteName}
                  onChange={this.handleInputChange}
                />
                <label className="main-form__label">Site URL</label>
                <input
                  className="main-form__input"
                  type="url"
                  placeholder="Website URL"
                  value={this.state.siteUrl}
                  onChange={this.handleInputChange}
                />
                <button
                  className="main-form__btn"
                  type="submit"
                  onClick={this.saveBookmark}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="bookmarks-result">
          <div className="container">
            <div className="bookmarks-result-wrap">
              {this.state.bookmarks.map((item) => {
                return (
                  <BookmarksResultItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    url={item.url}
                    delete={this.deleteBookmark}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

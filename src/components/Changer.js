/* eslint-disable array-callback-return */
import React, { Component } from "react";

export default class Changer extends Component {
  updateShelf = (event) => {
    this.props.updateShelf(this.props.book, event.target.value);
  };
  render() {
    const { book, allBook } = this.props;
    let bookShelf = book.shelf;
    const checkBook = allBook.map((eachBook, key) => {
      if (eachBook.id === book.id) {
        bookShelf = eachBook.shelf;
      }
    });
    const shelves = [
      { shelf: "currentlyReading", title: "Currently Reading" },
      { shelf: "read", title: "Read" },
      { shelf: "wantToRead", title: "Want To Read" },
    ];
    return (
      <div className="book-shelf-changer form-control">
        <select
          onChange={this.updateShelf}
          defaultValue={bookShelf}
          value={bookShelf}
        >
          <option value="" disabled>
            Move to...
          </option>
          
          {shelves.map((shelf, key) => (
            <option
              value={shelf.shelf}
              disabled={bookShelf === shelf.shelf ? true : null}
            >
              {shelf.title}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

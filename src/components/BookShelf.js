import React, { Component } from "react";
import Book from "./Book";
export default class Bookshelf extends Component {
  render() {
    const shelf = this.props.shelf;
    const books = this.props.books;
    const book = books.map((book, key) => {
      return (
        <Book
          key={key}
          book={book}
          updateShelf={this.props.updateShelf}
          allBook = {this.props.allBook}
        />
      );
    });

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {book}
            <li />
          </ol>
        </div>
      </div>
    );
  }
}

import { set } from "mongoose";
import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: [],
    };
  }

  searchBooks = (event) => {
    const query = event.target.value;
    this.setState({ query });
    if (query !== "") {
      BooksAPI.search(query).then((books) => {
        this.setState({ books });
      });
    }
  };

  render() {
    const { query, books } = this.state;
    const errorMessage = `Sorry There is no Result for  (${query}), Try Again!`;

    var bookResult = [];
    if (query === "") {
      bookResult = [];
    } else {
      if (!books.length) {
        bookResult = errorMessage;
      } else {
        bookResult = books.map((book, key) => (
          <Book
            key={key}
            book={book}
            updateShelf={this.props.updateShelf}
            allBook={this.props.allBook}
          />
        ));
      }
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => this.props.handelShowSearchPage()}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{bookResult}</ol>
        </div>
      </div>
    );
  }
}

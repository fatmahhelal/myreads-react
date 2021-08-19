import React, { Component } from "react";
import BookShelf from "./BookShelf";
export default class Content extends Component {
  render() {
    const currentlyReading = this.props.allBook.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const read = this.props.allBook.filter((book) => book.shelf === "read");
    const wantToRead = this.props.allBook.filter(
      (book) => book.shelf === "wantToRead"
    );
    const shelf = [
      { book: currentlyReading, title: "Currently Reading" },
      { book: read, title: "Read" },
      { book: wantToRead, title: "Want To Read" },
    ];
    return (
      <div className="list-books-content">
        <div>
          {shelf.map((book, index) => (
            <BookShelf 
            books={book.book} 
            shelf={book.title} 
            key={index}  
            updateShelf={this.props.updateShelf}
            allBook = {this.props.allBook}
            />
          ))}
        </div>
      </div>
    );
  }
}

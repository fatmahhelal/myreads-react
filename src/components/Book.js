import React, { Component } from "react";
import Changer from "./Changer";

export default class book extends Component {
  constructor(props) {
    super();
    this.state = {
      bookImg: "https://cdn.onlinewebfonts.com/svg/img_347678.png",
    };
  }
  bookImg = () => {
    const img = this.props.book.imageLinks
    if (img && img.smallThumbnail) {
      return (
        this.setState({
          bookImg: img.smallThumbnail
        })
      )
    }
  }
  componentDidMount = () => {
    this.bookImg()
  }

  render() {
    const book = this.props.book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage:
                `url(${this.state.bookImg})`,
            }}
          />
          <Changer 
            updateShelf={this.props.updateShelf} 
            book={book}
            allBook = {this.props.allBook}
            />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        {/* {book.authors.map((author, key) => (
            <div className="book-authors">
              {author}
              </div>
        ))} */}
      </div>
    );
  }
}

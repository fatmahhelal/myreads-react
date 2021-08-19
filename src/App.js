import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./components/Search";
import Content from "./components/Content";
class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    allBook: [],
  };

  handelShowSearchPage = () => {
    this.setState({
      showSearchPage: !this.state.showSearchPage,
    });
  };

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        allBook: books,
      });
    });
  };
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.getAllBooks();
    });
  };

  componentDidMount = () => {
    this.getAllBooks();
  };

  render() {
    const { showSearchPage, allBook } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search
            showSearchPage={showSearchPage}
            handelShowSearchPage={this.handelShowSearchPage}
            allBook={allBook}
            updateShelf={this.updateShelf}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {/* <button
              onClick={() =>
                this.setState({
                  allBook: [],
                })
              }
            >
              Delete All
            </button> */}
            <div>
              <Content allBook={allBook} updateShelf={this.updateShelf} />
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;

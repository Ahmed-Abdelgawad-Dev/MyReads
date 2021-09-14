import React from 'react';
import {Link} from "react-router-dom";
import Book from './Book';
import * as API from './BooksAPI'

class SearchPage extends React.Component {
    state = {
        query: '',
        booksAfterSearch: []
    }
    
    updateQuery = (query) => {
        this.setState({
          query: query
    });
    this.updateSearchedBooks(query);
  };

  updateSearchedBooks = (query) => {
    if (query) {
      API.search(query).then(booksAfterSearch => {
        if (booksAfterSearch.error) {
          this.setState({ booksAfterSearch: [] });
        } else {
          this.setState({ booksAfterSearch: booksAfterSearch });
        }
      });
    } else {
      this.setState({ booksAfterSearch: [] });
    }
  };
      render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            {/*links back to root*/}
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query} //detects event change and starts updateQuery
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksAfterSearch.map(searchedBook => {
              let shelf = "none";
              this.props.books.map((book) => (
                  book.id === searchedBook.id ? (shelf = book.shelf
              ) : "")
              );
              return (
                <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    changeBookStatus={this.props.changeBookStatus}
                    // changeShelf={this.props.changeShelf}
                    currentShelf={shelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;

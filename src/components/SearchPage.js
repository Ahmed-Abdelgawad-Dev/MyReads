import React from 'react';
import {Link} from "react-router-dom";
import * as API from './BooksAPI';
import Book from './Book';

class SearchPage extends React.Component {
	state = {
		searchBooks: [],
		keyword: ''
	}



	booksSearchPage = (results) => {
		this.props.books.forEach((book) => {
			let matched = results.find((result) => result.id === book.id)
			if(matched){
				matched.shelf = book.shelf
			}
		})
		this.setState(() => ({searchBooks: results}))
	}

	searchBooksInBackend = (keyword) => {
		API.search(keyword).then((searchBooks) => {
			if(searchBooks.error) {
				this.booksSearchPage([])
			}
			this.booksSearchPage([searchBooks])
		})
	}

	updateBooksInBackend = (keyword) => {
		this.setState(() => ({
			keyword: keyword
		}),
			() => {
			if(keyword) {
				this.searchBooksInBackend(keyword)
			}
				this.booksSearchPage([])
			}
		)
	}

	render() {
    return (
      <div className="search-books">
		<div className="search-books-bar">
			<Link to="/" className="close-search">Close</Link>
			<div className="search-books-input-wrapper">
				<input
					onChange={(e)=> this.updateBooksInBackend(e.target.value)}
					value={this.state.keyword}
					placeholder="Search a book by its author or title"
					type="text" />
			</div>
		</div>
        <div className="search-books-results">
					<ol className="books-grid">
						{this.state.searchBooks.length > 0 && (
							this.state.searchBooks.map((myBook) => (
								<li key={myBook.name}><Book mybook={myBook} changeBookStatus={this.props.changeBookStatus} /></li>
							))
						)}
						{this.state.searchBooks.length < 1 && (
							<li>No Results yet</li>
						)}
					</ol>
				</div>
      </div>
    )
  }
}

export default SearchPage;




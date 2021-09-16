import React from 'react';
import {Link} from "react-router-dom";
import Book from './Book';
import * as API from './BooksAPI'
import PropTypes from 'prop-types'
import {debounce} from "lodash";



// SearchPage class component with another
// state holds its books and query string keyword
class SearchPage extends React.Component {
	static propTypes = {
		booksAfterSearch: PropTypes.array,
		changeBookStatus: PropTypes.func,
		queryEqualStateSearch: PropTypes.func
	}
	state = {
		query: '',
		booksAfterSearch: [],
	}

	// to fix fetching experience DEBOUNCE was implemented
	queryEqualStateSearch = debounce(query =>  {
		// Search books if there is a query keyword
		if(query) {
			// set query to nothing if no query
			query = query ? query : " "
			// Fetching Books.
			API.search(query).then(booksAfterSearch => {
				//No error
				if (!booksAfterSearch.error) {
					// Put results in the state
					this.setState({ booksAfterSearch: booksAfterSearch });
				}
				else {
					// else => make the state empty so no result
					// is shown in case of any error
					this.setState({ booksAfterSearch: [] });
				}
			})
		} else {
			// make state empty in case of no query keyword
			this.setState({ booksAfterSearch: [] });
		}
	},1000)

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							//  handling the written query by passing the Func to onChange.
							//  so when change happens we get the result.
							onChange={(e) => this.queryEqualStateSearch(e.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.booksAfterSearch.map(searchedBook => {
							let shelf = "none";
							// shelf here is used for comparing and extracting Only
							// as we get it's value from another callback in the APP
							// brought down to Book component
							this.props.books.map((book) => (
								book.id === searchedBook.id ? (shelf = book.shelf) : "")
							);
							return (
								<div key={searchedBook.id}>
									<Book
										book={searchedBook}
										changeBookStatus={this.props.changeBookStatus}
										searchShelf={shelf}
									/>
								</div>
							);
						})}
					</ol>
				</div>
			</div>
		);
	}
}

export default SearchPage;

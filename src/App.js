import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";
import './App.css';
import * as API from './components/BooksAPI';
// Class component has a lifted state items that going to change
// and passed to different components
class MyReads extends React.Component {
	state = {
		books: [],
	}
	// Fetching all books
	componentDidMount() {
		this.getAllBooks();

	}
	// Func to fetch books from the bookAPI.
	getAllBooks() {
		API.getAll().then((books) => this.setState({books:books}));
	}

	// Callback to change book status from shelf to another
	// passed to the Book component down through both class components MainPage and SearchPage by props
	changeBookStatus = (e, book) => {
		// Here shelf is defined in the callback though its defined
		// again in Search page for a piece of code only but here is
		// more important as it's a must because it's used twice in
		// both components so we use it.
		const shelf = e.target.value;
		if(this.state.books) {
			API.update(book, shelf).then(() => {
				book.shelf = shelf;
				this.setState(state => ({
					books: state.books.filter(bookItem => bookItem.id !== book.id).concat([book])
				}))
			})
		}
	}

	render() {
		return(
			<div className='app'>
				<Route exact path='/' render={() => (
					<MainPage
						books={this.state.books}
						changeBookStatus={this.changeBookStatus} />
				)}/>
				<Route exact path="/search" render={() => (
					<SearchPage
						books={this.state.books}
						changeBookStatus={this.changeBookStatus}/>
				)} />
			</div>
		);
	}
}

export default MyReads;
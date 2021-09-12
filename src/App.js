import React from 'react';
import MainPage from "./components/MainPage";
import './App.css';
import * as appAPI from './components/BooksAPI'

class MyReads extends React.Component {
	state = {
		books: [],
	}

	componentDidMount() {
		this.getAllBooks();

	}

	getAllBooks() {
		appAPI.getAll().then((books) => this.setState({books:books}));
	}

	updateBooks(book, shelf) {
		appAPI.update(book, shelf).then(() => this.getAllBooks());
}
	render() {
		return (
			<div className="app">
				<MainPage books={this.state.books} onChange={this.updateBooks} />
			</div>
		)
	}
}

export default MyReads;
import React from 'react';
import MainPage from "./MainPage";
import './App.css';
import * as appAPI from './BooksAPI'

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
	render() {
		return (
			<div className="app">
				<MainPage books={this.state.books}/>
			</div>
		)
	}
}

export default MyReads;
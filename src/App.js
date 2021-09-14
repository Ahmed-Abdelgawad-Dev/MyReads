import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";
import './App.css';
import * as API from './components/BooksAPI';

class MyReads extends React.Component {
	state = {
		books: [],
	}

	componentDidMount() {
		this.getAllBooks();

	}

	getAllBooks() {
		API.getAll().then((books) => this.setState({books:books}));
	}

	changeBookStatus = (e, book) => {
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
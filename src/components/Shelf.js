import React from 'react';
import Book from "./Book";

// Although I can call it BooksList but named it shelf to
// make more sense from the name in the MainPage component.
// None class component as it has no changeable state date or even has no state.
const Shelf = ({books, title, changeBookStatus}) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{/*
					    Passing book details after looping
					    over the books to Book component
					 */}
					{books.map((book) => (
							<Book
								key={book.id}
								book={book}
								changeBookStatus={changeBookStatus}
							/>
						)
					)}
				</ol>
			</div>
		</div>
	);
}

export default Shelf;
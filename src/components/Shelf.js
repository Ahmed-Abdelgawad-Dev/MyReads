import React from 'react';
import Book from "./Book";
const Shelf = ({books}) => {

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{books.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map((book, index) => (
							<Book
								book={book} key={index}
							/>
						)
					)}
				</ol>
			</div>
		</div>
	);
}

export default Shelf;
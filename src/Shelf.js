import React from 'react';
import BookDetails from "./BookDetails";
const Shelf = ({books}) => {
	return (
		<div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (<BookDetails book={book} key={index}/>))}
          </ol>
        </div>
      </div>
	);
}

export default Shelf;
import React from 'react'
// import PropTypes from 'prop-types';

// Destructuring props in a functional component
const Book = ({ book, changeBookStatus }) => {
  // static PropTypes = {
  //   book: PropTypes.object,
  //   changeBookStatus: PropTypes.func
  // }
  // console.log(book);
  return (
    <div>
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")`
              }}>
            </div>
            {/* Book shelf changer division */}
            <div className="book-shelf-changer">
              <select
                defaultValue={(book.shelf) ? book.shelf : "none"}
                onChange={(e) => changeBookStatus(e, book)}
              >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors : "No Author"}</div>
        </div>
      </li>
    </div>
  )
}


export default Book;

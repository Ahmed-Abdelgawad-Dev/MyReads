import React from 'react';
import Shelf from './Shelf';

const MainPage = ({books}) =>  {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
                books={books.filter((book) => (book.shelf === "currentlyReading"))}
                title="Currently Reading" />
            <Shelf
                books={books.filter((book) => (book.shelf === "read"))}
                title="Read"  />
            <Shelf
                books={books.filter((book) => (book.shelf === "wantToRead"))}
                title="Want to read"  />
          </div>
        </div>
        <div className="open-search">

        </div>
      </div>
    )
}

export default MainPage;
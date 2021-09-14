import React from 'react';
import {Link} from "react-router-dom";
import Shelf from './Shelf';
import '../App.css'

const MainPage = ({books, changeBookStatus}) =>  {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
                changeBookStatus={changeBookStatus}
                books={books.filter((book) => (book.shelf === "currentlyReading"))}
                title="Currently Reading" />
            <Shelf
                changeBookStatus={changeBookStatus}
                books={books.filter((book) => (book.shelf === "wantToRead"))}
                title="Want to Read"  />
            <Shelf
                changeBookStatus={changeBookStatus}
                books={books.filter((book) => (book.shelf === "read"))}
                title="Read"  />

          </div>
        </div>
        <div className="open-search">
            <Link to="/search">
                Add
            </Link>
        </div>
      </div>
    )
}

export default MainPage;
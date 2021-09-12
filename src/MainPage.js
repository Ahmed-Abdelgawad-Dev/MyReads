import React from 'react';
import Shelf from './Shelf';

const MainPage = ({books}) =>  {
    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf books={books} />
          </div>
        </div>
        <div className="open-search">

        </div>
      </div>
    )
}

export default MainPage;
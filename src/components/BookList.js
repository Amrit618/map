import React, { useContext } from 'react';
import BookDetail from "./BookDetail";
import { BookContext,useBook } from '../contexts/BookContext';

const BookList = () => {
  const { books } = useBook()
    return books.length ? (
        <div className="book-list">
          <ul>
            {books.map(book => {
              return ( <BookDetail book={book} key={book.id} /> );
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">No books to read. Hello free time :).</div>
      );

}
 
export default BookList;
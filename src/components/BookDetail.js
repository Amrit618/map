import React, { useContext } from 'react';
import { BookContext ,useBook} from '../contexts/BookContext';
const BookDetail = ({ book }) => {
    const { dispatch } = useBook()
    return (
        <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>);
}

export default BookDetail;
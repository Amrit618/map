import React, { useContext, useState } from 'react';
import { BookContext, useBook } from '../contexts/BookContext';
const BookForm = () => {
    const{dispatch}=useBook()
    const[title,setTitle]=useState("")
    const[author,setAuthor]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title,author)
        dispatch({ type: 'ADD_BOOK', book:{title,author} })
        setTitle("")
        setAuthor("")
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input value={title} placeholder="title" type="text" onChange={(e)=>setTitle( e.target.value)}/>
            <input value={author} placeholder="Author" type="text" onChange={(e)=>setAuthor( e.target.value)}/>
            <input type="submit" value="button"/>
        </form>
     );
}
 
export default BookForm;
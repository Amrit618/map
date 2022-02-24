import React, { useState, useEffect, useContext, createContext } from 'react';
import { BookContext } from './BookContext';

export const TestContext = createContext();

export function useTest(){
    return useContext(TestContext)
}

const TestContextProvider = (props) => {
    const [theme, setTheme] = useState(true)

    const toggleTheme =()=>{
        setTheme(prevTheme=>!prevTheme)
    }
    return (
        <TestContext.Provider value={{theme, toggleTheme}}>
                {props.children}
        </TestContext.Provider>
    );
}

export default TestContextProvider;
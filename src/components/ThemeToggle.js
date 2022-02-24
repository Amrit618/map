import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
const ThemeToggle = () => {
    const {toggleTheme}=useContext(ThemeContext)
    return (  <button onClick={toggleTheme}>toggle button</button> );
}
 
export default ThemeToggle;

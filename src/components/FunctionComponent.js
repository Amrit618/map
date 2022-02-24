import React from 'react';
import { useTest } from '../contexts/TestContext';

const FunctionComponent = () => {
    
    const {theme,toggleTheme} = useTest()

    const testStyle = {
        backgroundColor: theme ? "#333" : "#ccc",
        color: theme ? "#ccc" : "#333",
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <div>
            <button onClick={toggleTheme}> button</button>
            <div style={testStyle} >

                hello
</div>
        </div>
    );
}

export default FunctionComponent;
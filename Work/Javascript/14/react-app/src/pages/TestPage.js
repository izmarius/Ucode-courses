import React from 'react';
import TestComp from '../components/TestComp';

function TestPage () {
    const [inputText, setText] = React.useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="enter text.." onChange={handleChange}></input>
            <TestComp inputText={inputText}></TestComp>
        </div>
    );
}

export default TestPage;
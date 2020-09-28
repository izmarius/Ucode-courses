import React from 'react';
import TestComp from '../components/TestComp';

function TestPage (props) {
    const {inputText, handleChange} = props;

    return (
        <div>
            <input type="text" placeholder="enter text.." onChange={handleChange}></input>
            <TestComp inputText={inputText}></TestComp>
        </div>
    );
}

export default TestPage;
import React from 'react';

function TestComp (props) {
    const {inputText} = props;
    return (
        <div>
            <span> {inputText} </span>
        </div>
    );
}

export default TestComp;
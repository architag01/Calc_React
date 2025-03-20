import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');

    const handleClear = () => {
        setInput('');
    };

    return (
        <div>
            <input type="text" value={input} readOnly />
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}

export default Calculator;
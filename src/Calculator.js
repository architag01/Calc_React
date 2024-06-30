import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState(false);  // Add error state

    const handleClick = (value) => {
        if (error) {
            setInput(value);  // Reset input with new value if there's an error
            setResult("");
            setError(false);  // Reset error state
        } else {
            setInput(input + value);
        }
    };

    const handleClear = () => {
        setInput("");
        setResult("");
        setError(false);  // Reset error state
    };

    const handleCalculate = () => {
        try {
            // Check for division by zero
            if (input.includes("/0")) {
                setResult("Error: Division by zero");
                setError(true);  // Set error state
            } else {
                setResult(eval(input).toString());
            }
        } catch (error) {
            setResult("Error");
            setError(true);  // Set error state
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("-")}>-</button>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("*")}>*</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleClick("/")}>/</button>
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    );
};

export default Calculator;

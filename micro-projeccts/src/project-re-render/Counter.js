import React, { useState } from 'react'
import MyButton from './MyButton';
import "./Counter.css"

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementNumber = () => {
        setCounter(counter + 1)
    }

    const decrementNumber = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <div className="counter-wrapper">
                <button onClick={decrementNumber}>Decrement</button>
                <span>{counter} </span>
                <button onClick={incrementNumber}>Increment</button>
            </div>

            <MyButton label="some string" counter={counter} />
        </>

    )
}

export default Counter;
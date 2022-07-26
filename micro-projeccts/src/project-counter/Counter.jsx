import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const incrementCount = (event) => {
    setNumber((prev) => prev + 1);
  };

  const decrementCount = (event) => {
    setNumber((prev) => prev - 1);
  };

  return (
    <div className="wrapper">
      <button onClick={decrementCount}>Decrement</button>
      <span>{number}</span>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;

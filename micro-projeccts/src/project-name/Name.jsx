import React, { useRef, useState } from "react";
import "./Name.css";

const Name = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const ref = useRef();

  const handleName1Change = (event) => {
    setName1(() => event.target.value);
  };

  const handleSubmit = (event) => {
    setName2(ref.current.value);
  };

  return (
    <div className="container">
      {/* first task */}
      <div className="wrapper">
        <div className="display">Hello {name1}</div>
        <label htmlFor="name1">Name</label>
        <input
          type="text"
          name="name1"
          className="name"
          id="name1"
          placeholder="Eg:- John"
          value={name1}
          onChange={handleName1Change}
        />
      </div>
      {/* second task */}
      <div className="wrapper">
        <div className="display"> Hello {name2}</div>
        <label htmlFor="name2">Name</label>
        <input
          ref={ref}
          type="text"
          name="name2"
          id="name2"
          className="name"
          placeholder="Eg:- John"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Name;

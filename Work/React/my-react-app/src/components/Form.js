import React from "react";

function Fornm() {
  const [value, setValue] = React.useState("");
  const [age, setAge] = React.useState("");

  return (
    <div>
      <h1>{value} {age}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
      <button
        type="button"
        onClick={() => {
          
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Fornm;

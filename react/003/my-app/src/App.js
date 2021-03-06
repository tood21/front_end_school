import React, { useState } from "react";
import "./App.css";

function Resume(props) {
  const [like, setLike] = useState("");

  function clickLike() {
    if (like === "π") {
      setLike("Like");
    } else {
      setLike("π");
    }
  }

  const myColor = props.color;
  const styleColor = { color: myColor };

  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
      <h1>{props.name} μκΈ°μκ°μ</h1>
      <h1>{props.hello}</h1>
      <h2>μ·¨λ―Έ : {props.hobby}</h2>
      <h2>μ’μνλ μμ : {props.food}</h2>
      <h2>
        μ’μνλ μ : <span style={styleColor}>{myColor}</span>
      </h2>
      <button onClick={clickLike}>
        !<span>{like}</span>!
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Resume
        hello="μλνμΈμ"
        name="κ°λ¦¬"
        hobby="κ²μ"
        food="κ³ κΈ°"
        color="blue"
      />
    </div>
  );
}

export default App;

import React from "react";

function Resume(props) {
  return (
    <div
      style={{
        width: "300px",
        fontWeight: "bold",
        border: "1px solid",
        padding: "10px",
      }}
    >
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <p>취미: {props.hobby}</p>
      <p style={{ fontWeight: "bold" }}>좋아하는음식: {props.food}</p>
      <p>
        좋아하는 색: <span style={{ color: props.color }}>{props.color}</span>
      </p>
    </div>
  );
}

export default Resume;

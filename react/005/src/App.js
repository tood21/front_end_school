import React, { useState } from "react";
import Detail from "./src/stylePractice/detail";
import Question from "./src/stylePractice/question";
import Review from "./src/stylePractice/review";
import "./App.css";

const ContentsContainer = ({ listName }) => {
  if (listName === "about") {
    return <Detail />;
  } else if (listName === "product") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};

function NavBar() {
  const [listName, setListName] = useState("about");
  const checkId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="about"
            style={
              listName === "about" ? { color: "blue" } : { color: "black" }
            }
            onClick={checkId}
          >
            about
          </li>
          <li
            id="product"
            onClick={checkId}
            style={
              listName === "product" ? { color: "blue" } : { color: "black" }
            }
          >
            product
          </li>
          <li
            id="review"
            onClick={checkId}
            style={
              listName === "review" ? { color: "blue" } : { color: "black" }
            }
          >
            review
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}

export default NavBar;

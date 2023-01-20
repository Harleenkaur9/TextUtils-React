import React, { useState } from "react";

export default function TextForm(props) {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
    countCons = 0;

  const [text, setText] = useState("");
  // text = "New Text"; // Wrong way to change the state
  // setText("New Text"); // Correct way to change the state
  const handleUpClick = () => {
    // console.log("Uppercase was clicked !" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase !", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !", "success");
  };
  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount(countChar);
        props.showAlert("Counted the no. of Vowels !", "success");
      }
    }
    // console.log("No. of Vowels are: " + countChar);
  };
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
    props.showAlert("Counted the no. of Consonants !", "success");
    // console.log("No. of consonants are: " + countCons);
  };
  const handleOnChange = (event) => {
    // console.log("On Change !");
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <div className="mb-3">
          <h2 className="mb-4">{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleVoClick}>
          Count no. of Vowels
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCoClick}>
          Count no. of Consonants
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h3>Your text summary</h3>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h3>You have entered:</h3>
        <p>{count} No. of Vowels</p>
        <p>{count1} No. of Consonants</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview ir her"}
        </p>
      </div>
    </>
  );
}

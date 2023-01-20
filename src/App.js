import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled !", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled !", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        {/* <Navbar /> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* 
              Here, "exact" keyword is used because react js does partial matching...
              For Example: if one path is /users and the other path is /users/home
              then even if we click on /users/home it will redirect to /users..
            */}
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Count Vowels and Consonants"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

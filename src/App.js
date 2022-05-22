import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
// import Headerr from "./components/Headerr";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          {/* <Headerr /> */}
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
//components
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <p>render test</p>
      <SignUp />
      <Login />
    </div>
  );
}

export default App;

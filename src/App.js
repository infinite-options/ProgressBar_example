import React from "react";

import "./App.css";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Home />
      </>
    </Router>
  );
}

export default App;

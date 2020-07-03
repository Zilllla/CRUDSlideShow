import React from "react";
import axios from "axios";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";

import "./App.css";

//BASE URL!!!!
const baseURL = "http://localhost:4000/";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;

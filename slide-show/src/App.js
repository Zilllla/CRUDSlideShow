import React from "react";
import Main from "./components/Main.js";
import Header from "./components/Header.js";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

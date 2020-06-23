import React from "react";
import axios from "axios";
import Main from "./components/Main.js";
import Header from "./components/Header.js";

import "./App.css";

//BASE URL!!!!
const baseURL = "http://localhost:4000/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSet: {
        _id: "",
        title: "",
        images: {
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: ""
        }
      }
    };
  }

  // componentDidMount() {
  //   axios.get(baseURL).then(res =>
  //     this.setState({
  //       imgSet: res.data
  //     })
  //   );
  // }

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

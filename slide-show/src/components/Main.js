import React from "react";
import axios from "axios";

//BASE URL!!!!
const baseURL = "http://localhost:4000/";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios.get(`${baseURL}`).then(res => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <h1>Blah fucking blah</h1>
        <img>{this.props.images}</img>
      </div>
    );
  }
}

export default Main;

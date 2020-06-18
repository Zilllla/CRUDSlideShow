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
    axios.get(baseURL).then(res =>
      this.setState({
        images: res.data
      })
    );
  }

  render() {
    return (
      <div>
        <h1>Blah fucking blah</h1>
      </div>
    );
  }
}

export default Main;

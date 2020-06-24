import React from "react";
import axios from "axios";

//BASE URL!!!!
const baseURL = "http://localhost:4000/";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSet: []
    };
    this.fetchData.bind(this);
  }

  fetchData = () => {
    axios.get(baseURL).then(res =>
      this.setState({
        imgSet: res.data
      })
    );
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div>
        <h1>Image Carousel</h1>
        {this.state.imgSet.map(() => (
          <h3>{this.state.imgSet} </h3>
        ))}
      </div>
    );
  }
}

export default Carousel;

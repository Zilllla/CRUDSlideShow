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
  }

  fetchData = () => {
    axios.get("http://localhost:4000/").then(res => {
      const images = res.data;
      this.setState({
        imgSet: images
      });
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>Testing</h1>
        {this.state.imgSet.map(image => (
          <div>
            <h3>{image.title}</h3>
            <img src={image.images.img1} />
            <img src={image.images.img2} />
            <img src={image.images.img3} />
            <img src={image.images.img4} />
            <img src={image.images.img5} />
          </div>
        ))}
      </div>
    );
  }
}

export default Carousel;

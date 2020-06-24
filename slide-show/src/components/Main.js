import React from "react";
// import axios from "axios";
import Carousel from "./Main/Carousel.js";

// //BASE URL!!!!
// const baseURL = "http://localhost:4000/";

class Main extends React.Component {
  //Do I actually need this here?
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     imgSet: {
  //       _id: "",
  //       title: "",
  //       images: {
  //         img1: "",
  //         img2: "",
  //         img3: "",
  //         img4: "",
  //         img5: ""
  //       }
  //     }
  //   };
  // }
  //
  // //Should be did mount or a fct? If fct, best place for did?
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
        <h1>Blah fucking blah</h1>
        <Carousel />
      </div>
    );
  }
}

export default Main;

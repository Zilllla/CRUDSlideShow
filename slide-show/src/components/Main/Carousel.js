import React from "react";

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <h1>Image Carousel</h1>
        <div>
          <h3>{this.props.imgSet.title} </h3>
        </div>
      </div>
    );
  }
}

export default Carousel;

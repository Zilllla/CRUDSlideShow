import React, { Component } from "react";

const baseURL = "http://localhost:4000/";

class Nav extends Component {
  render() {
    return (
      <div className="navDiv">
        <ul>
          <li>Home</li>
          <li>Images</li>
          <li>
            <a href="`">New</a>
          </li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default Nav;

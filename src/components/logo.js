import React, { Component } from "react";
import dslogo from "../../static/assets/env.png";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo-main">
        <img src={dslogo} alt="logo" />
      </div>
    );
  }
}

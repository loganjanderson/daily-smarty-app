import React, { Component } from "react";
import { formValueSelector } from "redux-form";
import dslogo from "../../static/assets/env.png";

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search DailySmarty" />
      </form>
    );
  }
}

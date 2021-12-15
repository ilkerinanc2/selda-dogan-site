import React, { Component } from "react";
import Background from "./Background";
import { Hakkimda } from "./Hakkimda";
import Tedaviler from "./Tedaviler";

export default class AnaSayfa extends Component {
  render() {
    return (
      <div>
        <Background></Background>
        <hr style={{ borderColor: "#5271ff" }}></hr>
        <Tedaviler></Tedaviler>
      </div>
    );
  }
}

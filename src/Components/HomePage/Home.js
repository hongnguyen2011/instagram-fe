import React, { Component } from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{<NavBar></NavBar>}</div>;
  }
}

export default Home;

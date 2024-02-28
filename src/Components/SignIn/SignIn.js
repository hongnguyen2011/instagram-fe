import React, { Component } from "react";
import "./loginPage.css";
class SiginIn extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div>
          <input
            className="logipage__text"
            type="text"
            placeholder="Phone number, username, or email"
          />
          <input
            className="logipage__text"
            type="password"
            placeholder="Password"
          />
          <button className="login__button" onClick={this.login}>
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default SiginIn;

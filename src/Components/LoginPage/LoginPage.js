import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
import inst_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <img src={inst_image} alt="Instagram" width="454px" />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img
                    className="loginpage__logo"
                    src={insta_logo}
                    alt="Instagram Logo"
                  />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            abasd
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;

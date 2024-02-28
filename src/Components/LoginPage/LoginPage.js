import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
import inst_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fb from "../../images/fb.png";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
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
                <div className="loginPage_signing">
                  <input
                    className="loginpage_text"
                    type="text"
                    placeholder="Phone number, username, or email"
                  />
                  <input
                    className="loginpage_text"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="login_button"> Log in </button>
                </div>
                <div className="login_ordiv">
                  <div className="login_dividor"></div>
                  <div className="login_or">OR</div>
                  <div className="login_dividor"></div>
                </div>
                <div className="login__fb">
                  <img src={fb} width="15px" style={{ marginRight: "5px" }} />
                  Log in with Facebook
                </div>
                <div className="login_forget"> Forgot password?</div>
                <div className="loginPage_option">
                  <img
                    className="loginPage_dwimg"
                    src={appstore}
                    width="136px"
                  />
                  <img
                    className="loginPage_dwimg"
                    src={playstore}
                    width="136px"
                  ></img>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;

import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showError: false,
      isLoggedIn: false
    };
  }

  usernameHandler(e) {
    this.setState({
      username: e.target.value
    });
  }

  passwordHandler(e) {
    this.setState({
      password: e.target.value
    });
  }

  submitHandler() {
    console.log('sending ', this.state.username, this.state.password);
    var userData = {
      username: this.state.username,
      password: this.state.password
    };

    axios({
      url: '/signup',
      method: 'POST',
      data: userData,
    })
      .then ((results) => {
        this.setState({isLoggedIn: true});
      })
      .catch ((error) => {
        this.setState({
          showError: true
        });
      });
  }

  render() {

    if (this.state.isLoggedIn) {

      return <Redirect to='/home' />;
    }
    return (
       <div className="container-fluid-fullwidth">
        <div className="container" id="banner">
          <h1>
            <b>UFORU</b>
          </h1>
          <hr></hr>
          <h4>
            UNIVERSITY FOR YOU
          </h4>
          <hr></hr>
        </div>
      <div className = "signupContain">
        <p className = "loginText"> Create an account </p>
        <div className="row">
          <div className = "col-md-2 col-md-offset-5">
            <div className = "form-group">
              <input className = "form-control" type = "text" name = "username" placeholder = "Enter Username" onChange={this.usernameHandler.bind(this)}></input>
              <input className = "inputText" type = "text" name = "password" placeholder = "Enter Password" onChange={this.passwordHandler.bind(this)}></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className = "loginButton center-block">
            <button className = "loginButton" type = "submit" onClick = {this.submitHandler.bind(this)}>Signup</button>
          </div>
        </div>
        <div className="row">
          {
            this.state.showError ? <h6 className="text-center"><small>Username is already taken.</small></h6> : <div></div>
          }
        </div>
      </div>
        <div className="card">
          <div className="row" className="bio">
            <h6><b><u>ABOUT THE CREATORS</u></b></h6>
            <div className="col-md-4">
              <img src="images/farrah_bousetta.png" className="img-responsive bioImages" style={{ height: 200, width: 200 }} alt="FARRAH PHOTO HERE"/>
            </div>
            <div className="col-md-4">
              <img src="images/arseniy_kotov.png" className="img-responsive bioImages" style={{ height: 200, width: 200}} alt="ARSENIY PHOTO HERE"/>
            </div>
            <div className="col-md-4">
              <img src="images/helen_tang.png" className="img-responsive bioImages" style={{ height: 200, width: 200 }} alt="HELEN PHOTO HERE"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>Farrah Bousetta is an upcoming professional software engineer with previous experience at Facebook, Google and other prestegious tech companies. She gets stuff done. Her nickname is Feisty Farrah.</p>
            </div>
            <div className="col-md-4">
              <p>Arseniy Kotov is an all star programmer specializing in full stack developement.</p>
            </div>
            <div className="col-md-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
         </div>
        <div className = "container-fluid-fullwidth">
          <div className="navbar-default navbar-fixed-bottom">Made by Farrah Bousetta, Arseniy Kotov, and Helen Tang</div>
        </div>
      </div>
    );
  }
}

export default Signup;
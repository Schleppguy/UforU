import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      showError: false
    };
  }

  onLoginSubmit () {
    let userInfo = {username: this.state.username, password: this.state.password};
    axios({
      url: '/login',
      method: 'POST',
      data: userInfo
    })
      .then ((results) => {
        this.setState({isLoggedIn: true});
      })
      .catch ((error) => {
        this.setState({showError: true});
      });
  }

  updateVal(name, event) {
    var updater = {};
    updater[name] = event.target.value;
    this.setState(updater);
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Redirect to='/home' />
      );
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
        <p className = "loginText"> Please Login below </p>
        <div className="row">
          <div className="col-md-2 col-md-offset-5">
            <input className = "inputText" type = "text" name = "username" placeholder = "Enter Username" onChange={this.updateVal.bind(this, 'username')}></input>
            <input className = "inputText" type = "text" name = "password" placeholder = "Enter Password" onChange={this.updateVal.bind(this, 'password')}></input>
          </div>
        </div>
        <div className="row">
          <div className="loginButton center-block">
            <button className = "loginButton" type = "submit" onClick = {this.onLoginSubmit.bind(this)}>Login</button>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <h6>Don't have an account? <Link to='/signup'>Sign Up!</Link></h6>
          </div>
        </div>
        <div className="row">
          {
            this.state.showError ? <h6 className="text-center"><small>Username or password is incorrect.</small></h6> : <div></div>
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

export default Login;
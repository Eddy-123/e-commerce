import React, { Component } from "react";

class Registration extends Component {
  state = {
    username: "",
    password: ""
  };
  //Arrow fx for binding
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.registerUser(this.state);
    /*
    const user = {
      username: event.target.value.username,
      password: event.target.value.password
    };
    console.log(user);
    */
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <center>
        <div className="mx-5">
          <h3>Registration</h3>
          <form onSubmit={this.handleSubmit}>
            <p className="mt-3">
              <input
                name="username"
                type="text"
                onChange={this.handleUsernameChange}
                value={username}
                placeholder="Username"
                className="form-control"
                required
              />
            </p>
            <p className="mt-3">
              <input
                name="password"
                type="password"
                onChange={this.handlePasswordChange}
                value={password}
                placeholder="Password"
                className="form-control"
                required
              />
            </p>
            <button className="mt-3 p-2 bg-white">REGISTER</button>
          </form>
        </div>
      </center>
    );
  }
}

export default Registration;

import React, { Component } from "react";
import Registration from "./Registration";
import User from "./User";
import { Redirect } from "react-router-dom";

const users = [
  {
    id: 0,
    username: "Eddy",
    password: "eddy"
  },
  {
    id: 1,
    username: "Prof",
    password: "prof"
  }
];

export default class Account extends Component {
  state = {
    id: null,
    username: "",
    password: ""
  };

  registerUser = (user) => {
    const newUser = { id: users.length, ...user };
    users.push(newUser);
    this.setState(newUser);
    console.log(newUser);
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        {username === "" ? (
          <Registration registerUser={this.registerUser} />
        ) : (
          <User user={this.state} />
        )}
      </div>
    );
  }
}

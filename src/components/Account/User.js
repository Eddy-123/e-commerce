import React, { Component } from "react";
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = props.user;
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>Welcome {username}</h1>
        <p>This is your area</p>
      </div>
    );
  }
}

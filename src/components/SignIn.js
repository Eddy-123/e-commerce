import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Forms/Button";
import { signInWithGoogle } from "../firebase/utils";

class SignIn extends Component {
  handleSubmit = async e => {
    e.preventDefault();
  };
  render() {
    return (
      <SignInWrapper>
        <div className="wrap">
          <h2>Sign in component</h2>

          <div className="formWrap">
            <form onSubmit={() => this.handleSubmit()}>
              <div className="socialSignIn">
                <div className="row">
                  <Button onClick={signInWithGoogle}>Signin with Google</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SignInWrapper>
    );
  }
}

export default SignIn;

const SignInWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 4rem auto 6rem;

  &.socialSignIn {
    margin: 3rem auto 0;
    background: red;
  }
`;

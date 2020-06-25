import React from "react";
import styled from "styled-components";

const SignIn = props => {
  return (
    <SignInWrapper>
      <div className="wrap">
        <h2>Sign in component</h2>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 4rem auto 6rem;
  border: 1px solid black;
`;

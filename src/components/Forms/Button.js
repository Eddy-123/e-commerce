import React from "react";
import styled from "styled-components";

const Button = ({ children, ...otherProps }) => {
  return (
    <ButtonForm className="btn" {...otherProps}>
      {children}
    </ButtonForm>
  );
};

export default Button;

const ButtonForm = styled.button`
  &.btn {
    display: block;
    width: 100%;
    font-size: 1.8rem;
    line-height: 1;
    font-weight: 300;
    text-transform: uppercase;
    color: white;
    background: black;
    padding: 1rem 0;
    margin: 0 auto;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;

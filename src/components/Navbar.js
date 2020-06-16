import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="Agency" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item ml-5 my-auto">
            <Link to="/" className="nav-link">
              <ButtonContainer>Products</ButtonContainer>
            </Link>
          </li>
          <li className="nav-item ml-5 my-auto">
            <Link to="/registration" className="ml-auto">
              <ButtonContainer>
                <span className="mr-2">
                  <i class="fa fa-registered" aria-hidden="true" />
                </span>
                Registration
              </ButtonContainer>
            </Link>
          </li>
          <li className="nav-item ml-5 my-auto">
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fas fa-cart-plus" />
                </span>
                Cart
              </ButtonContainer>
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

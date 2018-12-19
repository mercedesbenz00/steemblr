import React, { Component } from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { Link } from "react-router-dom";
import LoginModal from "../Header/LoginModal";
import Register from "../Components/Register";
import logo from "../icons/logo.svg";
import Logo from "../Components/Logo";
import Waypoint from "react-waypoint";
const Container = styled.section`
  box-sizing: border-box;
  background: #06162b;

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  a {
    color: ${colors.font.lightNormal};
  }
  z-index: 3;
`;
const Steemblr = styled.img`
  transform: scale(1.5);
  height: auto;
  margin-bottom: 20px;
`;
const BtnContainer = styled.div`
  button {
    width: 250px;
    margin-bottom: 15px;
  }
`;
const LogoContainer = styled.div`
  svg {
    height: 128px;
    width: auto;
    margin-bottom: -10px;
    animation: colorChange 5s infinite;
  }
  @keyframes colorChange {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;
export default class Welcome extends Component {
  render() {
    return (
      <Container id="welcome-section">
        <Waypoint onEnter={() => this.props.handleWaypoints(1)} />
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Steemblr src={logo} alt="logo" />
        <BtnContainer>
          <LoginModal text="Login with steemconnect" />
          <Register />
        </BtnContainer>
        <Link to="explore/trending/">Check what's trending</Link>
      </Container>
    );
  }
}
import React from "react";
import styled from "styled-components";
import menuIcon from "../../asset/icons/menu_black_24dp.svg";

const NavBar = styled.nav`
  position: fixed;
  top: 32px;
  height: 35px;
  left: 10%;
  right: 10%;
  z-index: 999;

  .logo {
    float: left;
    height: 100%;
    width: 50%;
    font-size: 2rem;
    font-weight: 600;
    user-select: none;
    position: absolute;
    z-index: 100;

    span {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  .menu {
    width: 50%;
    height: 100%;
    float: left;
    margin: 0;
    padding: 0;
    font-size: 2rem;
    position: absolute;
    z-index: 100;
    left: 50%;

    @media only screen and (max-width: 830px) {
      display: none;
    }

    li {
      float: right;
      list-style: none;
      margin-right: 40px;
      font-weight: 500;
      cursor: pointer;
      user-select: none;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  .menuBtnWrapper {
    display: none;
    width: 50%;
    height: 100%;
    float: left;
    margin: 0;
    padding: 0;
    font-size: 2rem;
    position: absolute;
    z-index: 100;
    left: 50%;

    @media only screen and (max-width: 830px) {
      display: block;
    }

    img {
      float: right;
      padding-top: 3px;
      cursor: pointer;
    }
  }

  .background {
    //display: none;
    background-color: #fff;
    position: fixed;
    top: 0px;
    height: 92px;
    left: 10%;
    right: 10%;
    z-index: 10;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  &:hover {
    .background {
      //display: block;
      max-height: 92px;
      transition: max-height 0.2s ease-in;
    }
  }
`;

const Contents = styled.div`
  position: relative;
`;

export default function Layout({ children }) {
  return (
    <div>
      <NavBar>
        <div className="logo">
          <span>
            <a href="./">Haley Ryu</a>
          </span>
        </div>
        <ul className="menu">
          <li>Logs</li>
          <li>
            <a href="./resume">Resume</a>
          </li>
          <li>
            <a href="./portfolio">Portfolio</a>
          </li>
        </ul>
        <div className="menuBtnWrapper">
          <img src={menuIcon}></img>
        </div>
        <div className="background"></div>
      </NavBar>
      <Contents>{children}</Contents>
    </div>
  );
}

import React from "react";
import styled from "styled-components";
import menuIcon from "../../asset/icons/menu_black_24dp.svg";

const Header = styled.header`
  @keyframes navdot {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  border-bottom: none;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  transition: top 0.2s ease-in-out;
  background-color: #ffffff;

  .wrapper {
    max-width: 1290px;
    margin: 0 auto;
    height: 73px;
    padding: 0;

    .logo {
      font-size: 2rem;
      font-weight: 600;
      user-select: none;
      padding-top: 19px;
      width: fit-content;
      float: left;

      span {
        cursor: pointer;
      }

      a {
        text-decoration: none;
        color: black;
      }
    }

    nav {
      text-align: right;
      padding: 0;
      height: 100%;

      .menu {
        display: inline-block;
        letter-spacing: -0.5px;
        text-align: right;
        height: 100%;
        padding: 0;
        font-size: 1.8rem;
        margin: 0;
        padding-top: 19px;

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

        li:nth-child(1) {
          margin-right: 0;
        }

        li a.active:before {
          animation: navdot 0.25s ease-in-out forwards 0.25s;
          border-radius: 50%;
          content: "";
          background-color: #ff5252;
          left: 0;
          height: 10px;
          opacity: 0;
          position: absolute;
          top: 50%;
          transform: translate(-200%, -50%);
          width: 10px;
        }

        a {
          text-decoration: none;
          color: black;
          position: relative;
        }
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
  const pathname = window.location.pathname;

  return (
    <div>
      <Header>
        <div className="wrapper">
          <div className="logo">
            <span>
              <a href="./">Haley Ryu</a>
            </span>
          </div>
          <nav>
            <ul className="menu">
              <li>
                <a href="./">Logs</a>
              </li>
              <li>
                <a
                  href="./resume"
                  className={pathname === "/resume" ? "active" : ""}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="./portfolio"
                  className={pathname === "/portfolio" ? "active" : ""}
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>
          <div className="menuBtnWrapper">
            <img src={menuIcon}></img>
          </div>
        </div>
      </Header>
      <Contents>{children}</Contents>
    </div>
  );
}

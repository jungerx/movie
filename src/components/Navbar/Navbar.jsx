import React, { useEffect, useState } from 'react'
import { MdOutlineSearch } from "react-icons/md";
// import  './Navbar.css';
import styled from 'styled-components';
import NetflixLogo from '../../assets/images/Logonetflix.png'
import { useScrollY } from '../hooks/';
function Navbar(props) {
  const [scrollY]=useScrollY();
  return (
    <Navigation
    style={
      scrollY < 50
        ? { backgroundColor: "transparent" }
        : { backgroundColor: "var(--color-background)" }
    }>
    <div className='navContainer'>
      <div className='logo'>
        <img src={NetflixLogo} alt="logo" />
      </div>
      <div className='navSearch'>
       <MdOutlineSearch className='iconSearch'/>
        <input type="text" placeholder='input title,genres,people' />
      </div>
    </div>
    </Navigation>
  )
}

export default Navbar;
const Navigation = styled.nav`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 80px;
  padding:20px;
  transition-timing-function: ease-in;
  transition: all 1s;
  top: 0;

  .navContainer {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
    }
    .logo {
      width: 120px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .subNav {
      font-weight: 500;
      font-size: 14px;
      color: var(--color-white);
      text-decoration: none;
      margin-right: 20px;
      transition: all 0.2s;
      cursor: pointer;
    }
    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;
      &:hover .iconSearch {
        color: var(--color-white);
      }

      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }

      input {
        font-size: 14px;
        border: none;
        color: var(--color-white);
        outline: none;
        width: 0px;
        padding: 10px;
        background: var(--color-background);
        border: 1px solid #fff;
        transition: width 0.5s;
        cursor: pointer;
        opacity: 0;

        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
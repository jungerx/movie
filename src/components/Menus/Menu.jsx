import React from 'react'
import MenuItem from './MenuItem';

import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";
import styled from 'styled-components';
function Menu(props) {
  return (
    <MenusPane>
     <MenuItem name='Home' Icon={FaHome}/>
     <MenuItem name='Trending' Icon={FaHotjar}/>
     <MenuItem name='Top rate' Icon={FaStar}/>
     <MenuItem name='Actions Movies' Icon={GiNinjaHeroicStance}/>
     <MenuItem name='Comedy Movies' Icon={MdTheaterComedy}/>
     <MenuItem name='Horror Movie' Icon={GiGhost}/>
     <MenuItem name='Romance Movies' Icon={GiRomanToga}/>
     <MenuItem name='Documentaries' Icon={GiBandageRoll}/>
    </MenusPane>
  )
}

export default Menu
const MenusPane = styled.div`
position: fixed;
left: 0;
top: 20%;
width:40px;
padding: 4px 0;
background: rgba(0, 0, 0, 0.4);
z-index: 100;
overflow: hidden;
display: flex;
flex-direction: column;
transform-origin: left center;
transition: all 0.3s linear;
overflow:hidden;
&:hover{
  width:160px;
  background: rgba(0, 0, 0, 0.5);
}

 .subMenu{
  display: flex;
  align-items:center;
  width:max-content;
  margin-left:2px;
  padding:4px 6px;
  cursor:pointer;

 }
 .icon{
  font-size:26px;
  margin-right:18px;

 }
 span{
  font-size:14px;
  font-weight:400;
  color:#c2c2c2;
  &:hover{
    color:#fff
  }
 }
`
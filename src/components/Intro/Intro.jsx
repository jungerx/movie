import React from 'react'
import { useState } from "react";
import ReactPlayer from 'react-player'
import {VscMute,VscUnmute} from 'react-icons/vsc'
import styled from 'styled-components'
function Intro(props) {
  const [isMuted, setIsMuted] = useState(true);
  const handleClick=()=>{
    setIsMuted(!isMuted)
  }
  return (
    <IntroContainer>
        <ReactPlayer
        playing={true}
        width='100%'
        height='100%'
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/273686020"
        className="videoIntro"
        />
            <div className='infoIntro'>
                <h1 className='headingIntro'>Netflix Elite</h1>
                <p className='overviewIntro'>netflix Watch anywhere. Cancel anytime.</p>
            </div>
            {
              isMuted?(
                <VscMute className='btnVolume'onClick={handleClick}/>
              ):(
                <VscUnmute className='btnVolume'onClick={handleClick}/>
              )
            }
      <div className=''></div>
    </IntroContainer>
  )
}

export default Intro
const IntroContainer=styled.div`
  background-color:var(--color-background);
  position:relative;
  padding-top: 56%;
  color: var(--color-white);
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }
  .infoIntro {
    position: absolute;
    top: 140px;
    left: 30px;
    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }
    .headingIntro {
      font-size: 60px;
      transition: all 0.3s;
      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
      }
    }
    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;
      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
  .btnVolume {
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #bbb;
    border: #fff solid 1px;
    transition: all 0.3s;
    transform: scale(1);
    &:hover {
      color: #fff;
      background-color: rgba(211, 211, 211, 0.178);
      transform: scale(1.2);
      transition: all 0.3s;
    }
    @media screen and (max-width: 800px) {
      height: 30px;
      width: 30px;
      padding: 4px;
    }
    @media screen and (max-width: 600px) {
      height: 20px;
      width: 20px;
      padding: 1px;
    }
  }
`

import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import {SmoothVerticalScrolling} from '../../utils'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import { useViewport } from '../hooks';
//  const movies=[
//     "https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SL1008_.jpg",
//   "https://i.pinimg.com/originals/a9/c7/d3/a9c7d36b3aaee651d8f120257587e27b.jpg",
//   "https://i.pinimg.com/originals/d9/b9/07/d9b9070c855d7c226c9a26a675c93142.jpg",
//   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
//   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
//   "https://3.bp.blogspot.com/-XU3gtu_wI6g/WpxBFPk1p0I/AAAAAAAACEw/0JoIwjhNmjs-JrTYJddrGaNL2o32M-WEgCLcBGAs/s1600/Screen%2BShot%2B2018-03-04%2Bat%2B18.53.17.png",
//   "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87108/88101/edge_of_tomorrow_regular_buy_original_movie_posters_at_starstills__48110.1400669257.jpg?c=2",
//   "https://i.pinimg.com/originals/0f/b4/1f/0fb41ff936741bb71415352180b86611.jpg",
//   "https://cdn.shopify.com/s/files/1/0747/3829/products/mL1755_1024x1024.jpg?v=1571445470",
//   "https://i.pinimg.com/originals/6d/6a/6c/6d6a6c1cba5068c1626adedf00db5865.jpg",
//   "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/tomb-raider-long-neck-691x1024.jpg",
//  ]
function MovieRows(props) {
  const {movies, title,isNetflix}=props
  const sliderRef= useRef();
  const movieRef= useRef();
  const [dragDown,setDragDown]= useState(0);
  const [dragMove,setDragMove]= useState(0);
  const [isDrag,setIsDrag]= useState(false);
  const [windowDimensions]= useViewport();

  const handleScrollRight=()=>{
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    if(sliderRef.current.scrollLeft < maxScrollLeft){
      SmoothVerticalScrolling(sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft)
    }
  }
    const handleScrollLeft=()=>{
      if(sliderRef.current.scrollLeft > 0){
        SmoothVerticalScrolling(sliderRef.current,
          250,
          -movieRef.current.clientWidth * 2,
          sliderRef.current.scrollLeft)
      }
  };
  useEffect(()=>{
    if(isDrag){
      if(dragMove < dragDown){
        handleScrollRight();
      }
      else{
        handleScrollLeft();
      }
    }
  },[dragDown,dragMove,isDrag]);



  const onDragStart=(e)=>{
    setIsDrag(true)
    setDragDown(e.screenX)
  }
  const onDragEnd=(e)=>{
    setIsDrag(false)
  }
  const onDragEnter=(e)=>{
    setDragMove(e.screenX)
  }
    return (
        <MoviesRowContainer draggable='false'>
            <h1 className='heading'>{title}</h1>
            <MoviesSlider ref={sliderRef} draggable='true'
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            style={
              movies && movies.length > 0
                ? {
                    gridTemplateColumns: `repeat(${movies.length}, ${
                      windowDimensions.width > 1200
                        ? "360px"
                        : windowDimensions.width > 992
                        ? "300px"
                        : windowDimensions.width > 768
                        ? "360px"
                        :"200px"
                    })`,
                  }
                : {}
            }
            >
            {
                movies.map((movie,index)=>(
                    <div key={index} className='movieItem' ref={movieRef} draggable='false'>
                        <img src={movie} alt="" draggable='false'/>
                        <div className='movieName'>Movie Name</div>
                    </div>
                ))
            }
            </MoviesSlider>
            <div className={`btnLeft ${isNetflix && 'isNetflix'}`}  onClick={handleScrollLeft}><FaAngleLeft /></div>
            <div className={`btnRight ${isNetflix && 'isNetflix'}`}  onClick={handleScrollRight}><FaAngleRight  /></div>
        </MoviesRowContainer>
    )
}

export default MovieRows
const MoviesRowContainer= styled.div`
  background-color: var(--color-background);
  color: var(--color-white); 
  padding-top: 100px;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  width: 100%;
  height: 100%;    
  .heading {
    font-size: 18px;
    margin-bottom: 12px;
    user-select: none;
  }
  .btnLeft {
    position: absolute;
    top: 50%;    
    left: 12px;
    transform: translateY(100%);
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0.4);
    border-radius:4px;
    width:40px;
    height:50px;
    transform:translateY(20%);
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s ease-out;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    
    }
    &.isNetflix{
      height:100px;
      width:max-content;
    }
  }
  .btnRight {
    position: absolute;
    top: 50%;    
    right: 12px;
    transform: translateY(100%);
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    width:40px;
    height:50px;
    border-radius:4px;
    transform:translateY(20%);
    background-color: rgba(0,0,0,0.4);
    
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s ease-out;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
      
    }
    &.isNetflix{
      height:100px;
      width:max-content;
    }

`
const MoviesSlider= styled.div`
display: grid;
  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;  
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;
  .movieItem {
    transform: scale(1);
    max-width: 320px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;

    &:hover {
      transform: scale(1.1);
      z-index: 10;
      -webkit-filter: brightness(1) !important;
      filter: brightness(1) !important;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .movieName{
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        padding:4px;
        text-align:center;
        font-size:14px;
        background-color:rbga(0,0,0,0.65)
    }
`
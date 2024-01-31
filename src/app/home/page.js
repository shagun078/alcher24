"use client"
import React, { useEffect,useState } from 'react'
import './home.css'
import MySlider from './components/slider'

const home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverEffect=()=>{
    setIsHovered(!isHovered);
    console.log(isHovered);
  }
  return (
    <div className='mainContainer'>
      {/*Video-container section starts*/}
      <div className='videoWrapper'>
        <div className='videoBox'>
        <iframe src="https://www.youtube.com/embed/CWhFx8v1mg8?autoplay=1&controls=0"
          frameborder="0" allowfullscreen 
          ></iframe>
        </div>
        {/*Video-container section ends*/}
      </div>

      {/*Sponsor section starts*/}
      <div className='decorationContainer'>
        <div className='left'>
          <img className="image" src="left.svg"></img>
        </div>
        <div className="center">
          <img className="image" src="centerFlower.svg"></img>
        </div>
        <div className='rightImage'>
          <img className="image" src="right.svg"></img>
        </div>
      </div>
      <div className='sponsor'>
        <MySlider />
      </div>
      {/*Sponsorsection ends*/}
      <div className='passesSection'>
          <p id='getYour'>Get your Own</p>
          <h1 id='alcherPass'>Alcheringa'24 Passes</h1>
          <button id='registerBtn'>REGISTER</button>
      </div>

      <div className={`cardHoverSection ${isHovered ? 'hovered' : ''}`} onMouseEnter={hoverEffect} onMouseLeave={hoverEffect}>
          <img src='cardHover.svg' id='cardHoverLeft'></img>
          <img src='cardHover.svg' id='cardHoverRight'></img>
      </div>
    </div>

  )
}

export default home
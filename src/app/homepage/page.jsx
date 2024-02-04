"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import RoomScene from "../components/RoomScene";
import { motion } from "framer-motion";
import MySlider from "./components/slider";
import TWEEN from "@tweenjs/tween.js";
import { FaAngleDoubleDown } from "react-icons/fa";
import "./homepage.css";

const marks = [
  {
    key: "A",
    title: "EVENTS",
    description:
      "Alcheringa has more than 80 events spread across various genres like fashion, music, art, sports, etc. They take place during the three days in which many events take place which includes panel discussions with various famous creators, informal activities like hot air balloon, ATV rides, paint ball shoot etc.",
    camPos: {
      x: -4.3,
      y: 1.2,
      z: -3.1,
    },
    lookAt: {
      x: -4.3,
      y: 1,
      z: -5,
    },
    pos: {
      x: -6,
      y: 1,
      z: -5.5,
    },
    textAt: {
      x: -5.45,
      y: 2.7,
      z: -5,
    },
  },
  {
    key: "B",
    title: "QR",
    description: "QR code is here",
    camPos: {
      x: -4.5,
      y: 1.2,
      z: -3,
    },
    lookAt: {
      x: -6,
      y: -0.2,
      z: -5,
    },
    pos: {
      x: -7.5,
      y: 0.6,
      z: -5.5,
    },
    textAt: {
      x: -9,
      y: 1.5,
      z: -5,
    },
  },
  {
    key: "C",
    title: "Tablet",
    description: "Theme Video Playing",
    camPos: {
      x: -4.5,
      y: 2,
      z: -2.3,
    },
    lookAt: {
      x: -7,
      y: -0.5,
      z: -2.3,
    },
    pos: {
      x: -6.5,
      y: 0.85,
      z: -2.5,
    },
    textAt: {
      x: -7.5,
      y: 1,
      z: -0.8,
    },
  },
  {
    key: "D",
    title: "Calendar",
    description: "xyz days to go!",
    camPos: {
      x: -5,
      y: 2,
      z: -1.5,
    },
    lookAt: {
      x: -8,
      y: 1.85,
      z: -1.5,
    },
    pos: {
      x: -7.5,
      y: 2,
      z: -1.5,
    },
    textAt: {
      x: -7.5,
      y: 3.4,
      z: -0.4,
    },
  },
  {
    key: "E",
    title: "THE INITIATIVES",
    description:
      "Alcheringa hosts several campaigns under Initiatives for cultural development and the betterment of society. These campaigns are conducted round the year to serve the mankind.",
    camPos: {
      x: -3.2,
      y: 2,
      z: -2,
    },
    lookAt: {
      x: -2.5,
      y: 2,
      z: -3,
    },
    pos: {
      x: -3.7,
      y: 2.4,
      z: -5.5,
    },
    textAt: {
      x: -3.55,
      y: 3.3,
      z: -5,
    },
  },
  {
    key: "F",
    title: "Merch",
    description: "ALcher Merch",
    camPos: {
      x: -4,
      y: 2,
      z: 0.8,
    },
    lookAt: {
      x: -5,
      y: 1.85,
      z: 0.3,
    },
    pos: {
      x: -7.5,
      y: 1.7,
      z: 0.7,
    },
    textAt: {
      x: -8,
      y: 2.9,
      z: 1,
    },
  },
  {
    key: "G",
    title: "Sponsor",
    description: "Piggy Bank",
    camPos: {
      x: -4,
      y: 1,
      z: 0.1,
    },
    lookAt: {
      x: -5,
      y: 1,
      z: 0.1,
    },
    pos: {
      x: -7.5,
      y: 0.4,
      z: 0.6,
    },
    textAt: {
      x: -8,
      y: 2.5,
      z: 2.8,
    },
  },
];

//a component creating a button as of now!
function Annotations({ controls }) {
  const { camera } = useThree();
  const [selected, setSelected] = useState("");
  const [backtrack, setBackTrack] = useState(false);

  const handleReturn = (e) => {
    setTimeout(() => {
      setSelected("");
      // const isSameAnnotation = a.key === selected;
      const targetX = -3.5;
      const targetY = 1.4;
      const targetZ = -1.8;

      const camPosX = -2;
      const camPosY = 1.5;
      const camPosZ = -1;

      // change target
      new TWEEN.Tween(controls.current.target)
        .to(
          {
            x: targetX,
            y: targetY,
            z: targetZ,
          },
          3000
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start();

      // change camera position
      new TWEEN.Tween(camera.position)
        .to(
          {
            x: camPosX,
            y: camPosY,
            z: camPosZ,
          },
          3000
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start();

      setBackTrack(!backtrack);
    }, 300);
  };

  return (
    <React.Fragment>
      {marks.map((a, i) => {
        return (
          <>
            <Html key={a.key} position={[a.pos.x, a.pos.y, a.pos.z]}>
              {!backtrack && (
                <motion.svg
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                  height="34"
                  width="34"
                  transform="translate(-13 -13)"
                  style={{ cursor: "pointer" }}
                >
                  {
                    <>
                      <circle
                        cx="14"
                        cy="14"
                        r="13"
                        stroke="white"
                        strokeWidth="2"
                        fill="rgba(0,0,0,.66)"
                        onPointerUp={() => {
                          setSelected(a.key);
                          const isSameAnnotation = a.key === selected;
                          setBackTrack(isSameAnnotation ? false : true);

                          const targetX = isSameAnnotation ? -3.5 : a.lookAt.x;
                          const targetY = isSameAnnotation ? 1.4 : a.lookAt.y;
                          const targetZ = isSameAnnotation ? -1.8 : a.lookAt.z;

                          const camPosX = isSameAnnotation ? -2 : a.camPos.x;
                          const camPosY = isSameAnnotation ? 1.5 : a.camPos.y;
                          const camPosZ = isSameAnnotation ? -1 : a.camPos.z;

                          // change target
                          new TWEEN.Tween(controls.current.target)
                            .to(
                              {
                                x: targetX,
                                y: targetY,
                                z: targetZ,
                              },
                              3000
                            )
                            .easing(TWEEN.Easing.Cubic.Out)
                            .start();

                          // change camera position
                          new TWEEN.Tween(camera.position)
                            .to(
                              {
                                x: camPosX,
                                y: camPosY,
                                z: camPosZ,
                              },
                              3000
                            )
                            .easing(TWEEN.Easing.Cubic.Out)
                            .start();
                          setSelected(backtrack ? -1 : a.key);
                        }}
                      />
                      <text
                        x="9"
                        y="20"
                        fill="white"
                        fontSize={18}
                        fontFamily="monospace"
                        style={{ pointerEvents: "none" }}
                      >
                        {a.key}
                      </text>
                    </>
                  }
                </motion.svg>
              )}
            </Html>
            <Html key={i} position={[a.textAt.x, a.textAt.y, a.textAt.z]}>
              {a.key === selected && backtrack && (
                <>
                  <motion.div
                    className="blur"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 10 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 3 }}
                      style={{ color: "white", fontSize: 32 }}
                    >
                      {a.title}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 2 }}
                      style={{ color: "white", fontSize: 12 }}
                    >
                      {a.description}
                    </motion.p>
                  </motion.div>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    className="return"
                    onClick={handleReturn}
                    whileTap={{ scale: 0.2 }}
                  >
                    Go Back
                  </motion.button>
                </>
              )}
            </Html>
          </>
        );
      })}
    </React.Fragment>
  );
}

function Tween() {
  useFrame(() => {
    TWEEN.update();
  });
}

export default function App() {
  const contentRef = useRef(null);
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const scrollToContent = () => {
    console.log("clicked!");
    contentRef.current && contentRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const hoverEffect = () => {
    setIsHovered(!isHovered);
    console.log(isHovered);
  }
  const buttons = (
    <React.Fragment>
      <FaAngleDoubleDown className="content-btn" onClick={scrollToContent} />
    </React.Fragment>
  )
  
 
  return (
    <React.Fragment>
      <div className='threeDWrapper'>
        <Canvas
          camera={{
            fov: 40,
            position: [-2, 1.5, -2],
            zoom: 0.35,
          }}
          shadows
        >
          <OrbitControls
            ref={ref}
            target={[-3.5, 1.4, -1.8]}
            enableZoom={false}
            enableDamping={true}
            minPolarAngle={Math.PI/3}
            maxPolarAngle={Math.PI/2}
            dampingFactor={0.02}
          />
          <ambientLight intensity={1.5} />
          <Annotations controls={ref} />
          <RoomScene></RoomScene>
          <axesHelper args={[20, 20, 20]} /> 
          <Tween />
        </Canvas>
        <div id="ui">{buttons}</div>
      </div>
      <div className='mainContainer ' ref={contentRef}>
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
          <div className='right'>
            <img className="image" src="right.svg"></img>
          </div>
        </div>
        <div className='sponsor'>
          <MySlider />
        </div>
        {/*Sponsorsection ends*/}
        <div className='getAppSection'>
          <img src='upperHand.svg' id='upperHand'></img>
          <img src='lowerHand.svg' id='lowerHand'></img>
          <div className='textSection'>
            <div id='text'>
              <h1>GET THE <br/> ALCHERINGA APP</h1>
              <p>Download our app and get access to app exclusive features like<br/> Alcheringa passes , merches , schedule,Campus maps , <br/>  real-time updates and much more</p>
              <div id='appDownloadBtn'><img src='googlePlay.svg' className="googlePlayImage"></img></div>
            </div>
          </div>
          <div className="imageWrapper">
            <div className='img-cont darkModeImage'>
              <div className='img-section img-dark'></div>
            </div>
            <div className=" img-cont lightModeImage">
             <div className=" img-section img-light"></div>
            </div>
          </div>
        </div>



        <div className='passesSection'>
          <p id='getYour'>Get your Own</p>
          <h1 id='alcherPass'>Alcheringa'24 Passes</h1>
          <button id='registerBtn'>REGISTER</button>
        </div>
        

        <div className={`cardHoverSection ${isHovered ? 'hovered' : ''}`} onMouseEnter={hoverEffect} onMouseLeave={hoverEffect}>
          <img src='BoardOrange.svg' id='cardHoverLeft'></img>
          <img src='BoardBlue.svg' id='cardHoverRight'></img>
        </div>
      </div>
    </React.Fragment>

  );
}

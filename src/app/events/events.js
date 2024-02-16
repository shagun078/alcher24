"use client";
import "./events.css";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import TWEEN from "@tweenjs/tween.js";
import { Museumfinal } from "../components/Museum10Feb";
//import { Museum1 } from "../components/Museum";
//import Loadingpage from "../components/loading/loading";
import "./FadeInComponent.css";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import circle1 from "/public/footer_img/events_left_circle.png";
import circle2 from "/public/footer_img/events_right_circle.png";
import windows1 from "/public/footer_img/Events-min.png";
import alcheringa from "/public/footer_img/events_alcheringa.png";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
//images
import hand_upper from "./resources/hand_upper.png";
import hand_lower from "./resources/hand_lower.png";
import down_arrow from "./resources/down.png";
import coming_soon from "./resources/coming_soon_card.png";
// import ring from "../../../public/ring.png";

import "./events_2d.css";

//components
import { Cardleft, Cardright } from "./components/card";
import Loadingpage from "../components/loading/loading";

const marks = [
  {
    title2: "JOIN US",
    title1: "PRONITES",
    currPage: "PROSHOWS",
    description: "Alcher-related display image!",
    camPos: {
      x: 0,
      y: 2,
      z: -9.65,
    },
    lookAt: {
      x: 0,
      y: 2,
      z: 0,
    },
  },
  {
    title2: "PROSHOWS",
    title1: "CREATORS CAMP",
    currPage: "PRONITES",
    description: "Alcher-related display image!",
    camPos: {
      x: 0,
      y: 2,
      z: 8,
    },
    lookAt: {
      x: 0,
      y: 2,
      z: 15,
    },
  },
  {
    title2: "PRONITES",
    title1: "CRITICAL DAMAGE",
    currPage: "CREATORS CAMP",
    description: "Alcher-related display image!",
    camPos: {
      x: 0,
      y: 2,
      z: 25,
    },
    lookAt: {
      x: 0,
      y: 2,
      z: 30,
    },
  },
  {
    title2: "CREATORS CAMP",
    title1: "INFORMALS",
    currPage: "CRITICAL DAMAGE",
    description: "Alcher-related display image!",
    camPos: {
      x: 0,
      y: 2,
      z: 42.5,
    },
    lookAt: {
      x: 0,
      y: 2,
      z: 50,
    },
  },
  {
    title2: "CRITICAL DAMAGE",
    title1: "JOIN US",
    currPage: "INFORMALS",
    description: "Alcher-related display image!",
    camPos: {
      x: 0,
      y: 2,
      z: 60,
    },
    lookAt: {
      x: 0,
      y: 2,
      z: 65,
    },
  },
  {
    title2: "INFORMALS",
    title1: "PROSHOWS",
    currPage: "Join us all from 8th to 10th March",
    description: "Alcher-related display image!",
    camPos: {
      x: 0,
      y: 2,
      z: 77,
    },
    lookAt: {
      x: 0,
      y: 2,
      z: 83,
    },
  },
];

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

const list = new CircularDoublyLinkedList();

marks.forEach((obj) => {
  list.append(obj);
});
list.head.prev = list.tail;
list.tail.next = list.head;

function Tween() {
  useFrame(() => {
    TWEEN.update();
  });
}

function Events() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [title1, setTitle1] = useState(list.head.data.title1);
  const [title2, setTitle2] = useState(list.head.data.title2);
  const [currPage, setCurrpage] = useState(list.head.data.currPage);
  const [isClick, setClick] = useState(false);
  const [eventStyle, setEventStyle] = useState({ display: "block" });
  const [boxStyle, setBoxStyle] = useState({ opacity: 0 });
  const [currStyle, setCurrStyle] = useState({ opacity: 0 });
  const [bgcolor, setbgcolor] = useState({
    backgroundColor: "#141414",
    backgroundImage: "url('TexturePattern.jpg')",
    backgroundBlendMode: "color-burn",
  });

  const controls = useRef();
  const camera = useRef();
  const ambientLight = useRef();
  let [now, setNow] = useState(list.head);

  const forward = () => {
    setIsAnimating(true);

    // Reset the animation after a delay (duration of your animation)
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    setNow((prevNow) => {
      const updateDelay = 500;
      setTimeout(() => {
        setTitle1(prevNow.next.data.title1);
        setTitle2(prevNow.next.data.title2);
        setCurrpage(prevNow.next.data.currPage);
      }, updateDelay);
      return prevNow.next;
    });
  };

  const backward = () => {
    setIsAnimating(true);

    // Reset the animation after a delay (duration of your animation)
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    const updateDelay = 500;
    setTimeout(() => {
      setTitle1(now.prev.data.title1);
      setTitle2(now.prev.data.title2);
      setCurrpage(now.prev.data.currPage);
    }, updateDelay);
    setNow(now.prev);
  };

  const backToHome = () => {
    setIsAnimating(true);

    // Reset the animation after a delay (duration of your animation)
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    const updateDelay = 500;
    setTimeout(() => {
      setTitle1(list.head.data.title1);
      setTitle2(list.head.data.title2);
      setCurrpage(list.head.data.currPage);
    }, updateDelay);

    setNow(list.head);
  };

  useEffect(() => {
    if (controls.current) {
      new TWEEN.Tween(controls.current.target)
        .to(
          {
            x: now.data.lookAt.x,
            y: now.data.lookAt.y,
            z: now.data.lookAt.z,
          },
          3000
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start();

      new TWEEN.Tween(camera.current.position)
        .to(
          {
            z: now.data.camPos.z,
          },
          3000
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
    }
  }, [now]);

  const showEvent = () => {
    setCurrStyle({ opacity: 1 });
    setbgcolor({ backgroundColor: "transparent" });
    setClick(true);
    setBoxStyle({
      opacity: 1,
    });
    setEventStyle({
      display: "none",
    });
    const targetX = 0;
    const targetY = 2;
    const targetZ = 0;
    const camZ = -10;

    new TWEEN.Tween(controls.current.target)
      .to(
        {
          x: targetX,
          y: targetY,
          z: targetZ,
        },
        5000
      )
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    new TWEEN.Tween(camera.current.position)
      .to(
        {
          z: camZ,
        },
        5000
      )
      .easing(TWEEN.Easing.Cubic.Out)
      .start();

    console.log(ambientLight);
    new TWEEN.Tween(ambientLight.current)

      .to(
        {
          intensity: 3,
        },
        8000
      )
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
  };

  const buttons = (
    <React.Fragment>
      <Head>
        <title>Events | Alcheringa</title>
      </Head>
      <div className="event_box" style={{ zIndex: "1" }}>
        <span
          className={`fade-in ${isAnimating ? "animating" : ""}`}
          id="museum_events_name"
          style={currStyle}
        >
          {currPage}
        </span>
        <span className="event_tag" style={isClick ? eventStyle : eventStyle}>
          EVENTS
        </span>
        <button
          className="show-event-btn"
          onClick={showEvent}
          style={isClick ? eventStyle : eventStyle}
        >
          VIEW OUR EVENTS
        </button>
      </div>
      <div className="btn_box" style={isClick ? boxStyle : boxStyle}>
        <div className="responsive_btn_box">
          <span
            className="backward-container"
            onClick={() => {
              backward();
            }}
          >
            <img src="leftArrow.svg" className="backward-svg" />
            <button className="btn btn-backward">
              <span className={`fade-in ${isAnimating ? "animating" : ""}`}>
                {title2}
              </span>
            </button>
          </span>
        </div>

        <div className="responsive_btn_box center_btn_box" style={{ zIndex: "5" }}>
        <div className="events_arrow_div"   onClick={() => {
          forward();
        }}>
        <img src="Events arrow.png" ></img>
        </div>
       
          <button
            className="back-to-home"
            onClick={() => {
              backward();
            }}
          >
            BACK
          </button>
        </div>

        <div className="responsive_btn_box">
          <span
            className="forward-container"
            onClick={() => {
              forward();
            }}
          >
            <button className="btn btn-forward">
              <span className={`fade-in ${isAnimating ? "animating" : ""}`}>
                {title1}
              </span>
            </button>

            <img src="rightArrow.svg" className="forward-svg" />
          </span>
        </div>
      </div>
    </React.Fragment>
  );

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("PRONITES");

  return (
    <>
      <Suspense fallback={<Loadingpage />}>
        <Navbar reg_bg={"register reg_bg1"} />
        <div className="wrapper">
          <Canvas>
            <PerspectiveCamera
              ref={camera}
              makeDefault
              position={[0, 2, -25]}
            />
            <OrbitControls
              ref={controls}
              enableZoom={false}
              enableDamping={true}
              enableRotate={false}
              target={[0, 2, 0]}
            />
            <ambientLight intensity={0} ref={ambientLight} />
            <Museumfinal />
            <Tween />
          </Canvas>
          {
            <div id="ui" style={bgcolor}>
              {
                <>
                  <motion.img
                    src="/ring2.png"
                    alt="adjl"
                    className="rings_event"
                    initial={{
                      animationDuration: isClick ? "10s" : "30s",
                      // opacity: 1,
                    }}
                    animate={{
                      animationDuration: isClick ? "10s" : "30s",
                      opacity: isClick ? 0 : 1,
                    }}
                    transition={{ duration: 3 }}
                    style={{
                      width: "85vw",
                      height: "85vw",
                      zIndex: "1",
                      pointerEvents: "none",
                    }}
                  />
                  <motion.img
                    src="/ring2.png"
                    alt="adjl"
                    className="rings_event"
                    initial={{
                      animationDuration: isClick ? "10s" : "30s",
                    }}
                    animate={{
                      animationDuration: isClick ? "10s" : "30s",
                      opacity: isClick ? 0 : 1,
                    }}
                    transition={{ duration: 3 }}
                    style={{
                      width: "52vw",
                      height: "52vw",
                      zIndex: "1",
                      pointerEvents: "none",
                    }}
                  />
                  <motion.img
                    src="/ring2.png"
                    alt="adjl"
                    className="rings_event"
                    initial={{
                      animationDuration: isClick ? "10s" : "30s",
                      // opacity: 1,
                    }}
                    animate={{
                      animationDuration: isClick ? "10s" : "30s",
                      opacity: isClick ? 0 : 1,
                      // opacity: 0,
                    }}
                    transition={{ duration: 3 }}
                    style={{
                      width: "140vw",
                      height: "140vw",
                      zIndex: "1",
                      pointerEvents: "none",
                    }}
                  />
                </>
              }
              {buttons}
            </div>
          }
        </div>
        <div className="wrapper-2d">
          <main className="events_main">
            <section className="hero-section">
              <div className="hand_upper">
                <Image
                  src={hand_upper}
                  alt="upper hand"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  quality={100}
                  placeholder="blur"
                />
              </div>
              <h1 className="heading">EVENTS</h1>
              <Link className="button_view" href="#events">
                VIEW OUR EVENTS
              </Link>
              <div className="hand_lower">
                <Image
                  src={hand_lower}
                  alt="lower hand"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  quality={100}
                  placeholder="blur"
                />
              </div>
            </section>
            <section className="card-section">
              <div className="head">
                <div className="name" onClick={() => setOpen(!open)}>
                  <span>{Array.from(selected)}</span>
                  <motion.div
                    id="events"
                    initial={{ rotate: !open ? "180deg" : 0 }}
                    animate={{ rotate: !open ? 0 : "-180deg" }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={down_arrow}
                      alt="down arrow"
                      style={{
                        width: "auto",
                        height: "100%",
                        padding: "0.7rem 0.4rem",
                      }}
                      quality={100}
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="dropdown"
                  initial={{
                    opacity: open ? 0 : 1,
                    y: open ? "0vh" : "6vh",
                    pointerEvents: open ? "none" : "all",
                  }}
                  animate={{
                    opacity: open ? 1 : 0,
                    y: open ? "6vh" : "0vh",
                    pointerEvents: open ? "all" : "none",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <ul>
                    <li
                      className="names"
                      onClick={() => {
                        setSelected("PROSHOWS");
                        setOpen(!open);
                      }}
                    >
                      PROSHOWS
                    </li>
                    <li
                      className="names"
                      onClick={() => {
                        setSelected("PRONITES");
                        setOpen(!open);
                      }}
                    >
                      PRONITES
                    </li>
                    <li
                      className="names"
                      onClick={() => {
                        setSelected("CREATORS CAMP");
                        setOpen(!open);
                      }}
                    >
                      CREATORS CAMP
                    </li>
                    <li
                      className="names"
                      onClick={() => {
                        setSelected("CRITICAL DAMAGE");
                        setOpen(!open);
                      }}
                    >
                      CRITICAL DAMAGE
                    </li>
                    <li
                      className="names"
                      onClick={() => {
                        setSelected("INFORMALS");
                        setOpen(!open);
                      }}
                    >
                      INFORMALS
                    </li>
                  </ul>
                </motion.div>

                {/* <p>Welcome to Alcheringa!! We are loading up.please wait..</p> */}
              </div>
              <div className="image-wrapper">
                <Image
                  src={coming_soon}
                  alt="lower hand"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  quality={100}
                  // placeholder="blur"
                />
              </div>
              {/* <Cardleft />
            <Cardright />
            <Cardleft />
            <Cardright /> */}
            </section>
          </main>
          <Footer
            bg={"footer img1"}
            alcheringa_logo={alcheringa}
            star={"star1 star"}
            circle_src1={circle1}
            circle_src2={circle2}
            windows_src={windows1}
          />
          <motion.div
            className="blur-events"
            initial={{ opacity: open ? 0 : 1 }}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </Suspense>
    </>
  );
}

export default Events;

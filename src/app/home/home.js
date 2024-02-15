"use client";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Text } from "@react-three/drei";
import RoomScene from "../components/RoomScene_2";
import { motion } from "framer-motion";
import MySlider from "./components/slider";
import TWEEN from "@tweenjs/tween.js";
import { FaAngleDoubleDown } from "react-icons/fa";
import "./homepage.css";
import Animations from "./components/Animations";
import Loadingpage from "../components/loading/loading";
import circle1 from "/public/footer_img/homepage_left_circle.png";
import circle2 from "/public/footer_img/homepage_right_circle.png";
import windows1 from "/public/footer_img/Home-min.png";
import alcheringa from "/public/footer_img/homepage_alcheringa.png";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import Image from "next/image";
import merch from "./resources/home_merch.png";
import Link from "next/link";
import Loading from "../components/loading/loading";


const marks = [
  {
    key: "A",
    link: "/competition",
    title: "COMPETITIONS",
    description:
      "Alcheringa has many competitions spread across various genres. They take place during the three days with the prize distribution on the last day. People all over the country participate in these competitions to win exciting prizes and goodies and to witness one of India's biggest cultural festival.",
    camPos: {
      x: -4.3,
      y: 1.2,
      z: -2.5,
    },
    lookAt: {
      x: -4.3,
      y: 1,
      z: -5,
    },
    pos: {
      x: -4.255,
      y: 1.55,
      z: -3.5,
    },
    textAt: {
      x: -5.25,
      y: 2.6,
      z: -5,
    },
    textAt2: {
      x: -5.1,
      y: 2.4,
      z: -5,
    },
  },
  {
    key: "B",
    title: "ALCHERINGA APP",
    link: "https://www.alcheringa.in/",
    description:
      "Download our app and visit our website get access to amazing features like E-Alcher passes, Schedule, Campus maps, Real-Time updates and much more.",
    camPos: {
      x: -4.2,
      y: 1.2,
      z: -2.5,
    },
    lookAt: {
      x: -6,
      y: -0.2,
      z: -4.5,
    },
    pos: {
      x: -4.87,
      y: 1.26,
      z: -3.3,
    },
    textAt: {
      x: -11,
      y: 0.8,
      z: -3,
    },
    textAt2: {
      x: -8,
      y: -0.7,
      z: -5,
    },
  },
  {
    key: "C",
    title: "THEME VIDEO",
    link: "",
    description: "Our this year's theme, Chromatic Elysium",
    camPos: {
      x: -4,
      y: 2,
      z: -2.3,
    },
    lookAt: {
      x: -7,
      y: 0.5,
      z: -2.3,
    },
    pos: {
      x: -5.5,
      y: 1.45,
      z: -2.1,
    },
    textAt: {
      x: -7.5,
      y: 1.3,
      z: -0.65,
    },
    textAt2: {
      x: -7.5,
      y: 1.3,
      z: -1.3,
    },
  },
  {
    key: "D",
    title: "EVENTS",
    link: "/events",
    description:
      "Alcheringa has more than 80 events spread across various genres like fashion, music, art, sports, etc. They take place during the three days in which many events take place which includes panel discussions with various famous creators, informal activities like hot air balloon, ATV rides, paint ball shoot etc.!",
    camPos: {
      x: -4.5,
      y: 2,
      z: -1.5,
    },
    lookAt: {
      x: -8,
      y: 1.85,
      z: -1.5,
    },
    pos: {
      x: -5.9,
      y: 2.05,
      z: -1.65,
    },
    textAt: {
      x: -7.5,
      y: 2.6,
      z: -2.5,
    },
    textAt2: {
      x: -7.5,
      y: 3.8,
      z: -0.6,
    },
  },
  {
    key: "E",
    title: "KARTAVYA",
    link: "/kartavya",
    description:
      "Alcheringa hosts several campaigns under Initiatives for cultural development and the betterment of society. These campaigns are conducted round the year to serve the mankind.",
    camPos: {
      x: -3,
      y: 2,
      z: -2,
    },
    lookAt: {
      x: -2.8,
      y: 2,
      z: -3,
    },
    pos: {
      x: -3.18,
      y: 2.25,
      z: -3.4,
    },
    textAt: {
      x: -3.55,
      y: 3.2,
      z: -5,
    },
    textAt2: {
      x: -3.2,
      y: 3.2,
      z: -5,
    },
  },
  {
    key: "F",
    title: "MERCH",
    link: "",
    description:
      "Alcheringa has more than 80 events spread across various genres like fashion, music, art, sports, etc. They take place during the three days in which many events take place which includes panel discussions with various famous creators, informal activities like hot air balloon, ATV rides, paint ball shoot etc.",
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
      x: -5.5,
      y: 2,
      z: 0,
    },
    textAt: {
      x: -8,
      y: 1.9,
      z: 2.4,
    },
    textAt2: {
      x: -8,
      y: 3.5,
      z: 0,
    },
  },
  {
    key: "G",
    title: "SPONSORS",
    link: "/sponsor",
    description:
      "Alcheringa has more than 80 events spread across various genres like fashion, music, art, sports, etc. They take place during the three days in which many events take place which includes panel discussions with various famous creators, informal activities like hot air balloon, ATV rides, paint ball shoot etc.",
    camPos: {
      x: -4.5,
      y: 1,
      z: 0.1,
    },
    lookAt: {
      x: -6.5,
      y: 1,
      z: 0.1,
    },
    pos: {
      x: -5.5,
      y: 0.9,
      z: -0.2,
    },
    textAt: {
      x: -8,
      y: 1.2,
      z: 4.5,
    },
    textAt2: {
      x: -8,
      y: 2.3,
      z: 1.2,
    },
  },
  {
    key: "H",
    title: "THE TEAM",
    link: "/teams",
    description:
      "All students, from the fourth year mentors to the first-year freshers, play an active role in actualising the four days of Alcher. Alcheringa is the most significant cultural festival in the northeast and is build by the yearlong efforts of all the students involved in making their vision of Alcher come to life..",
    camPos: {
      x: -3.8,
      y: 1.66,
      z: -3,
    },
    lookAt: {
      x: -3.62,
      y: 1.56,
      z: -5,
    },
    pos: {
      x: -3.7,
      y: 1.66,
      z: -3.7,
    },
    textAt: {
      x: -4.12,
      y: 1.75,
      z: -3.4,
    },
    textAt2: {
      x: -3.9,
      y: 1.825,
      z: -3.4,
    },
  },
  {
    key: "I",
    title: "MUN",
    link: "https://www.instagram.com/iitg_mun/",
    description:
      "The grandest simulation of the UN in the North-East, IIT Guwahati Model United Nations presents its Edition XVI, bigger and better than ever before. This year we bring to you four committees that are bound to get you thinking about and deliberating on the issues that we face in the real world.",
    camPos: {
      x: -4,
      y: 1.2,
      z: -2.4,
    },
    lookAt: {
      x: -3.8,
      y: 1.2,
      z: -5.4,
    },
    pos: {
      x: -4.05,
      y: 1.05,
      z: -3,
    },
    textAt: {
      x: -3.8,
      y: 1.1,
      z: -3.4,
    },
    textAt2: {
      x: -4,
      y: 1.5,
      z: -3.4,
    },
  },
];

//a component creating a button as of now!
function Annotations({ controls }) {
  const { camera } = useThree();
  const [selected, setSelected] = useState("");
  const [backtrack, setBackTrack] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoverKey, setHoverkey] = useState("");

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
          1000
        )
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .start();

      // change camera position
      new TWEEN.Tween(camera.position)
        .to(
          {
            x: camPosX,
            y: camPosY,
            z: camPosZ,
          },
          1000
        )
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .start();

      setBackTrack(!backtrack);
    }, 300);
    setTimeout(() => {
      controls.current.enabled = backtrack;
    }, 10);
  };

  return (
    <React.Fragment>
      {marks.map((a, i) => {
        return (
          <>
            {/* <Navbar reg_bg={"register reg_bg4"} />
            <Footer bg={"footer img4"} star={"star1 star"} circle_src={circle1} windows_src={windows1} /> */}
            <Html
              className="flex-conatiner"
              key={a.key}
              position={[a.pos.x, a.pos.y, a.pos.z]}
            >
              {!backtrack && (
                <motion.svg
                  initial={{ opacity: 0, pointerEvents: "none" }}
                  animate={{ opacity: 1, pointerEvents: "all" }}
                  transition={{ duration: 2, delay: 1.5 }}
                  height="34"
                  width="34"
                  transform="translate(-13 -13)"
                  style={{ cursor: "pointer" }}
                  onHoverStart={() => {
                    setHoverkey(a.key);
                    setHovered(true);
                  }}
                  onPointerLeave={() => {
                    setHovered(false);
                    setHoverkey("");
                  }}
                  onPointerUp={() => {
                    // console.log(controls.current);
                    // controls.current.enableDamping = false;
                    setHovered(false);
                    setHoverkey("");
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
                        2000
                      )
                      .easing(TWEEN.Easing.Sinusoidal.InOut)
                      .start();

                    // change camera position
                    new TWEEN.Tween(camera.position)
                      .to(
                        {
                          x: camPosX,
                          y: camPosY,
                          z: camPosZ,
                        },
                        2000
                      )
                      .easing(TWEEN.Easing.Sinusoidal.InOut)
                      .start();
                    setSelected(backtrack ? -1 : a.key);
                    setTimeout(() => {
                      controls.current.enabled = backtrack;
                    }, 2100);
                    // console.log(controls.current);
                  }}
                >
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M12.75 3.03109C14.1423 2.22724 15.8577 2.22724 17.25 3.03109L24.2404 7.06699C25.6327 7.87083 26.4904 9.35641 26.4904 10.9641V19.0359C26.4904 20.6436 25.6327 22.1292 24.2404 22.933L17.25 26.9689C15.8577 27.7728 14.1423 27.7728 12.75 26.9689L5.75962 22.933C4.36731 22.1292 3.50962 20.6436 3.50962 19.0359V10.9641C3.50962 9.35641 4.36731 7.87083 5.75962 7.06699L12.75 3.03109Z"
                        stroke="white"
                        strokeWidth="3"
                      />
                      <path
                        d="M19 15.5714H15.5714V19H14.4286V15.5714H11V14.4286H14.4286V11H15.5714V14.4286H19V15.5714Z"
                        fill="white"
                      />
                    </svg>
                  </>
                </motion.svg>
              )}
              {hovered && a.key === hoverKey && (
                <motion.div
                  className="title-hover-home"
                  initial={{ opacity: !hovered ? 1 : 0, y: -10 }}
                  animate={{ opacity: !hovered ? 0 : 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    color: "white",
                    fontSize: window.innerWidth > 840 ? "2vh" : "1vh",
                  }}
                >
                  {a.title}
                </motion.div>
              )}
            </Html>
            <Html
              key={i}
              position={
                window.innerWidth > 840
                  ? [a.textAt.x, a.textAt.y, a.textAt.z]
                  : [a.textAt2.x, a.textAt2.y, a.textAt2.z]
              }
            >
              {a.key === selected && backtrack && (
                <>
                  <motion.div
                    className="blur-home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2, delay: 1.5 }}
                      className="return-home"
                      onClick={handleReturn}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M21.333 9.70835V12.2917H5.83305L12.9372 19.3959L11.103 21.23L0.873047 11L11.103 0.77002L12.9372 2.60419L5.83305 9.70835H21.333Z"
                          fill="white"
                        />
                      </svg>
                    </motion.div>
                    <div className="flex-container-home">
                      <motion.div
                        className="title-home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1.5 }}
                        style={{
                          color: "white",
                          fontSize: window.innerWidth > 840 ? "4.7vh" : "3.5vh",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="29"
                          height="32"
                          viewBox="0 0 29 32"
                          fill="none"
                        >
                          <path
                            d="M14.5 0.5L16.5506 13.808L29 16L16.5506 18.192L14.5 31.5L12.4494 18.192L0 16L12.4494 13.808L14.5 0.5Z"
                            fill="white"
                          />
                        </svg>
                        <Link href={a.link}>{a.title}</Link>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="29"
                          height="32"
                          viewBox="0 0 29 32"
                          fill="none"
                        >
                          <path
                            d="M14.5 0.5L16.5506 13.808L29 16L16.5506 18.192L14.5 31.5L12.4494 18.192L0 16L12.4494 13.808L14.5 0.5Z"
                            fill="white"
                          />
                        </svg>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1.5 }}
                        style={{
                          color: "white",
                          fontSize: window.innerWidth > 840 ? "2vh" : "1.5vh",
                        }}
                      >
                        {a.description}
                      </motion.p>
                    </div>
                  </motion.div>
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

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (document.readyState !== "complete") {
      const handler = () => {
        console.log("load");
        setShowSplash(false);
      };
      window.addEventListener("load", handler);

      return () => {
        window.removeEventListener("load", handler);
      };
    } else {
      const timeout = window.setTimeout(() => {
        console.log("timeout");
        setShowSplash(false);
      }, 0);
      return () => window.clearTimeout(timeout);
    }
  }, []);
  const contentRef = useRef(null);
  const ref = useRef();
  const rotateRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const scrollToContent = () => {
    console.log("clicked!");
    contentRef.current &&
      contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const hoverEffect = () => {
    setIsHovered(!isHovered);
    console.log(isHovered);
  };
  const buttons = (
    <React.Fragment>
    
    <svg  className="content-btn" onClick={scrollToContent} xmlns="http://www.w3.org/2000/svg" width="40" height="40" style={{filter:"invert(1)"}} viewBox="0 0 24 24" ><path d="M16.939 10.939 12 15.879l-4.939-4.94-2.122 2.122L12 20.121l7.061-7.06z"></path><path d="M16.939 3.939 12 8.879l-4.939-4.94-2.122 2.122L12 13.121l7.061-7.06z"></path></svg>
     
    </React.Fragment>
  );

  // const Cursor = () => {
  //   useEffect(() => {
  //     const cursor = document.querySelector(".cursor");
  //     window.addEventListener("mousemove", (e) => {
  //       const { clientX, clientY } = e;
  //       cursor.style.left = `${clientX}px`;
  //       cursor.style.top = `${clientY}px`;
  //     });
  //   }, []);
  //   return (
  //     <div className="cursor">
  //       <img
  //         src={"cursor.png"}
  //         alt="Hello"
  //         style={{
  //           width: "100%",
  //           height: "100%",
  //         }}
  //       />
  //     </div>
  //   );
  // };

  return !showSplash ? (
    <React.Fragment>
      <Navbar reg_bg={"register reg_bg1"} />
      <main className="threeD_2dwrapper">
        <div className="threeDWrapper">
          <Canvas
            camera={{
              fov: 70,
              position: [-2, 1.5, -2],
              zoom: 1,
            }}
            shadows
          >
            <OrbitControls
              ref={ref}
              target={[-3.5, 1.4, -1.8]}
              enableZoom={false}
              enableDamping={true}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
              dampingFactor={0.02}
              enabled={true}
            />
            <ambientLight intensity={2} />
            <Annotations controls={ref} />
            <mesh ref={rotateRef}>
              <RoomScene />
            </mesh>
            <Tween />
          </Canvas>
          <div id="ui_home">{buttons}</div>
        </div>
        <div className="mainContainer " ref={contentRef}>
          {/*Video-container section starts*/}
          <div className="videoWrapper">
            <div className="videoBox">
              <iframe
                src="https://www.youtube.com/embed/CWhFx8v1mg8?autoplay=1&controls=0"
                allowFullScreen
              ></iframe>
            </div>
            {/*Video-container section ends*/}
          </div>

          {/*Sponsor section starts*/}
          <div className="decorationContainer">
            <div className="left">
              <img className="image" src="Subtract.svg"></img>
            </div>
            <div className="centerDiv">
              <img className="center_image" src="center_final.svg"></img>
              <div className="animation-container">
                {" "}
                <Animations />
              </div>
            </div>
            <div className="right">
              <img className="image" src="Subtract1.svg"></img>
            </div>
          </div>
          <div className="sponsor_homepage">
            {/* <MySlider />*/}
            <div className="img_text_wrapper">
              <img src="left_final_gate.svg" id="leftGate"></img>
              <div className="text_sponsor_content">
                <h1>SPONSORS</h1>
                <h2>
                  Coming <span>Soon</span>
                </h2>
                <p>Stay tuned, sponsors are on the horizon!</p>
              </div>

              <img src="right_final_gate.svg" id="rightGate"></img>
            </div>
          </div>
          {/*Sponsorsection ends*/}

          <div className="alcher_merch_section">
            <h1>ALCHER MERCH</h1>
            <div className="merch_holder">
              <Image
                src={merch}
                style={{
                  width: "100vw",
                  height: "auto",
                  alignItems: "center",
                }}
              />
            </div>
            <p>Get Your Own</p>
            <button className="buy_merch_button">COMING SOON</button>
          </div>

          <div className="alcher_merch_coming_soon">
            <h1>ALCHER MERCH</h1>
            <h2>
              Coming <span>Soon</span>
            </h2>
          </div>

          <div className="getAppSection">
            <img src="upperHand.svg" id="upperHand"></img>
            <img src="lowerHand.svg" id="lowerHand"></img>
            <div className="textSection">
              <div id="text_home">
                <h1>
                  GET THE <br /> ALCHERINGA APP
                </h1>
                <p>
                  Download our app and get access to app exclusive
                  <br /> features like Alcheringa passes, Merches,
                  <br /> Schedule, Campus maps, Real-time updates and
                  <br /> much more.
                </p>
                <div id="appDownloadBtn">
                  <img src="home_google_play.png" className="googlePlayImage"></img>
                </div>
              </div>
            </div>
            <div className="imageWrapper">
              <div className="home_alcher_app_container">
                <img src="home_mobile_app.png"></img>
              </div>
            </div>
          </div>

          {/* <div className="passesSection">
            <p id="getYour">Get your Own</p>
            <h1 id="alcherPass">Alcheringa'24 Cards</h1>
            <button id="registerBtn">REGISTER</button>
          </div> */}

          {/* <div
            className={`cardHoverSection ${isHovered ? "hovered" : ""}`}
            onMouseEnter={hoverEffect}
            onMouseLeave={hoverEffect}
          >
            <img src="BoardOrange.svg" id="cardHoverLeft"></img>
            <img src="BoardBlue.svg" id="cardHoverRight"></img>
          </div> */}
        </div>
      </main>
      <Footer
        bg={"footer img_homepage"}
        alcheringa_logo={alcheringa}
        star={"star_homepage star"}
        circle_src1={circle1}
        circle_src2={circle2}
        windows_src={windows1}
      />
    </React.Fragment>
  ) : (
    <Loading />
  );
}

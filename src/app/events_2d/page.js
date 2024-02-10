"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

//images
import hand_upper from "./resources/hand_upper.png";
import hand_lower from "./resources/hand_lower.png";
import down_arrow from "./resources/down.png";

import "./events_2d.css";

//components
import { Cardleft, Cardright } from "./components/card";
import { useState } from "react";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("PRONITES");

  return (
    <>
    <Navbar/>
      <main>
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
          <Link className="button" href="#events">
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
              <span>{Array.from(selected).slice(0, 9)}</span>
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

            <p>Welcome to Alcheringa!! We are loading up.please wait..</p>
          </div>
          <Cardleft />
          <Cardright />
          <Cardleft />
          <Cardright />
        </section>
        <div className="temp-gap"></div>
      </main>
      <motion.div
        className="blur"
        initial={{ opacity: open ? 0 : 1 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    <Footer/>
    </>
  );
};

export default Home;

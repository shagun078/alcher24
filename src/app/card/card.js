"use client";
import React, { useEffect, useState } from "react";
import "./components/card.css";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import circle1 from "/public/footer_img/sponsors_left_circle.png";
import circle2 from "/public/footer_img/sponsors_right_circle.png";
import windows1 from "/public/footer_img/Sponsors-min.png";
import alcheringa from "/public/footer_img/sponsors_alcheringa.png";
import Loading from "../components/loading/loading";

function Card() {
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

  return !showSplash ? (
    <>
      <Navbar reg_bg={"register reg_bg7"} />
      <main className="card_main">
        <div className="top_sun_card"></div>

        <section className="no_card">
          <div className="coming_soon_card">
            <h2>Coming Soon</h2>
            <h5></h5>
          </div>
        </section>

      </main>
      <Footer
        bg={"footer img7"}
        star={"star7 star"}
        alcheringa_logo={alcheringa}
        circle_src1={circle1}
        circle_src2={circle2}
        windows_src={windows1}
      />
    </>
  ) : (
    <Loading />
  );
}
export default Card;

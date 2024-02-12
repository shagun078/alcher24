"use client"
import React, { useEffect , useState } from "react";
import "./components/sponsor.css";
import design from "./resources/design.png";
import SponsorList from "./components/sponsor_list";
import gucci from "./resources/gucci.png";
import Image from "next/image";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import circle1 from "/public/footer_img/sponsors_left_circle.png";
import circle2 from "/public/footer_img/sponsors_right_circle.png";
import windows1 from "/public/footer_img/Frame 15230-min.png";
import alcheringa from "/public/footer_img/sponsors_alcheringa.png";
import Loading from "../components/loading/loading"



function Sponsor() {
   
    const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (document.readyState !== 'complete') {
      const handler = () => {
        console.log('load');
        setShowSplash(false);
      };
      window.addEventListener('load', handler);

      return () => {
        window.removeEventListener('load', handler);
      };
    } else {
      const timeout = window.setTimeout(() => {
        console.log('timeout');
        setShowSplash(false);
      }, 0);
      return () => window.clearTimeout(timeout);
    }
  }, []);
  const image = [gucci];

  const Cursor = () => {
    // const cursor = useRef(null);

    useEffect(() => {
      const cursor = document.querySelector(".cursor");
      window.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      });
    }, []);



    return (
        
      <div className="cursor">
        <img
          src={"cursor.png"}
          alt="Hello"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  };


  return (
    !showSplash?(
    <>
      <Navbar reg_bg={"register reg_bg7"} />
      <Cursor />
      <main className="sponsor_main">
        <div className="top_sun"></div>

        <section className="no_sponsor">
          <div className="coming_soon">
            <h2>Coming Soon</h2>
            <h5>Stay tuned, sponsors are on the horizon!</h5>
          </div>
        </section>

        <section className="after_sponsor">
          <div className="App">
            <h1>We Have Worked With</h1>

            <div className="title">
              <h1> TITLE SPONSOR </h1>
              <div className="titlesponsorimg">
                <Image
                  src={design}
                  alt="design"
                  id="design"
                  style={{
                    width: "36.3vw",
                    height: "11.2vw",
                    position: "absolute",
                    zIndex: "1",
                    right: "31vw",
                  }}
                />
                <div className="card_shadowt">
                  <div className="cardt">
                    <div className="imagecardt">{/* background image */}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cotitle">
              <h1> CO-TITLE SPONSOR </h1>
              <div className="cotitlesponsorimg">
                <Image
                  src={design}
                  alt="design"
                  id="designct"
                  style={{
                    width: "36.3vw",
                    height: "11.2vw",
                    position: "absolute",
                    zIndex: "1",
                    right: "30.5vw",
                  }}
                />
                <div className="card_shadowct">
                  <div className="cardct">
                    <div className="imagecardct">{/* background image */}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="powered">
              <h1> POWERED BY</h1>
            </div>
            <div className="poweredimg"></div>

            <div className="sponsorfooter">
              <div className="heading2">Media Sponsors</div>
              <div className="sponsors">
                <SponsorList></SponsorList>
              </div>
            </div>
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
    </>):<Loading/>
  );
}
export default Sponsor;

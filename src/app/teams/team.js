"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import model_prb from "./resources/team_images/model_prb.png";
import model_crm from "./resources/team_images/model_crm.png";
import model_creatives from "./resources/team_images/model_creatives.png";
import model_events from "./resources/team_images/model_events.png";
import model_web_app from "./resources/team_images/model_web_app.png";
import model_mun from "./resources/team_images/model_mun.png";
import model_finance from "./resources/team_images/model_finance.png";
import model_convener from "./resources/team_images/model_convener.png";
import "./components/teams.css";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";
import circle1 from "/public/footer_img/teams_left_circle.png";
import circle2 from "/public/footer_img/teams_right_circle.png";
import windows1 from "/public/footer_img/Teams-min.png";
import alcheringa from "/public/footer_img/teams_alcheringa.png";
import Loading from "../components/loading/loading";
export default function Teams() {
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
      <Navbar reg_bg={"register reg_bg6"} />
      <section>
        <div className="fake_div1"></div>
        <div className="fake_div2"></div>
        <div className="fake_div3"></div>
        <div className="fake_div4"></div>
        <div className="fake_div5"></div>
        <div className="fake_div6"></div>
        <div className="fake_div7"></div>
        <div className="fake_div8"></div>
        <div className="fake_div9"></div>
        <div className="fake_div10"></div>
        <div className="fake_div11"></div>
        <div className="fake_div12"></div>
        <div className="fake_div13"></div>
        <div className="fake_div14"></div>
        <div className="fake_div15"></div>
        <div className="fake_div16"></div>
      </section>

      <main className="teams_main">
        <section className="teams_heading">
          <div className="left_window"></div>
          <div className="teams_head1">
            <h2>MEET THE TEAMS</h2>
            <h5>
              "Coming together is a beginning.
              <br />
              Keeping together is progress.
              <br />
              Working together is success."
            </h5>
          </div>
          <div className="right_window"></div>
        </section>

        <section className="all_teams">
          <div className="prb">
            <div className="head_prb">
              <h4>PUBLIC RELATIONS & BRANDING</h4>
            </div>
            <div className="bg_prb">
              <Image
                src={model_prb}
                alt="model_prb"
                style={{
                  // width: "fit-content",
                  // height: "50vh",
                  width: "65vw",
                  height: "auto",
                  marginBottom: "-5px"
                }}
              />
            </div>
            <div className="names_prb">
              <div>
                <h6>Anurag</h6>
                <a>Public Relation <br className="line_break" /> Head</a>
                <br />
                <a href="tel:+91 7061520276">+91 7061520276</a>
                <br />
                <a href="mailto:anurag@alcheringa.in">anurag@alcheringa.in</a>
              </div>
              <div>
                <h6>Ankit Kumar</h6>
                <a>Public Relation <br className="line_break" /> Head</a>
                <br />
                <a href="tel:+91 8340349585">+91 8340349585</a>
                <br />
                <a href="mailto:ankit.k@alcheringa.in">ankit.k@alcheringa.in</a>
              </div>
              <div>
                <h6>Lakshya Kohli</h6>
                <a>Media & Outreach Head</a>
                <br />
                <a href="tel:+91 7082763383">+91 7082763383</a>
                <br />
                <a href="mailto:lakshya@alcheringa.in">lakshya@alcheringa.in</a>
              </div>
            </div>
          </div>
          <div className="crm">
            <div className="head_crm">
              <h4>CORPORATE RELATION & MARKETING</h4>
            </div>
            <div className="bg_crm">
              <Image
                src={model_crm}
                alt="Corporate Relation & Marketing"
                style={{
                  // width: "fit-content",
                  // height: "50vh",
                  width: "75vw",
                  height: "auto",
                }}
              />
            </div>
            <div className="names_crm">
              <div>
                <h6>Rachit Awasthi</h6>
                <a>CRM Head</a>
                <br />
                <a href="tel:+91 8400000512">+91 8400000512</a>
                <br />
                <a href="mailto:rachit@alcheringa.in">rachit@alcheringa.in</a>
              </div>
              <div>
                <h6>
                  Harshit <br className="line_break" /> Garg
                </h6>
                <a>CRM Head</a>
                <br />
                <a href="tel:+91 7014850105">+91 7014850105</a>
                <br />
                <a href="mailto:harshit@alcheringa.in">harshit@alcheringa.in</a>
              </div>
              <div>
                <h6>Chakradhar Inaganti</h6>
                <a>CRM Head</a>
                <br />
                <a href="tel:+91 8319837535">+91 8319837535</a>
                <br />
                <a href="mailto:chakradhar@alcheringa.in">
                  chakradhar@alcheringa.in
                </a>
              </div>
              <div>
                <h6>Kanika Tyagi</h6>
                <a>CRM Head</a>
                <br />
                <a href="tel:+91 9917481718">+91 9917481718</a>
                <br />
                <a href="mailto:kanika@alcheringa.in">kanika@alcheringa.in</a>
              </div>
            </div>
          </div>
          <div className="creatives">
            <div className="head_creatives">
              <h4>CREATIVES</h4>
            </div>
            <div className="bg_creatives">
              <Image
                src={model_creatives}
                alt="Creatives"
                style={{
                  width: "65vw",
                  height: "auto",
                  // height: "60vh",
                  paddingBottom: "0px",
                  marginBottom: "-10px",
                }}
              />
            </div>
            <div className="names_creatives">
              <div>
                <h6>Sushant Sawant</h6>
                <a>Creatives Head</a>
                <br />
                <a href="tel:+91 9284802056">+91 9284802056</a>
                <br />
                <a href="mailto:creatives@alcheringa.in">
                  creatives@alcheringa.in
                </a>
              </div>
              <div>
                <h6>Swapnil Banerjee</h6>
                <a>Web-Design Head</a>
                <br />
                <a href="tel:+91 8478018310">+91 8478018310</a>
                <br />
                <a href="mailto:creatives@alcheringa.in">
                  creatives@alcheringa.in
                </a>
              </div>
              <div>
                <h6>
                  Virat <br className="line_break" /> Dubey
                </h6>
                <a>Digital Media Head</a>
                <br />
                <a href="tel:+91 9322603447">+91 9322603447</a>
                <br />
                <a href="mailto:creatives@alcheringa.in">
                  creatives@alcheringa.in
                </a>
              </div>
            </div>
          </div>
          <div className="events">
            <div className="head_events">
              <h4>EVENTS</h4>
            </div>
            <div className="bg_events">
              <Image
                src={model_events}
                alt="Events"
                style={{
                  // width: "fit-content",
                  // height: "50vh",
                  width: "60vw",
                  height: "auto",
                }}
              />
            </div>
            <div className="names_events">
              <div>
                <h6>Abhinav Pratap Singh</h6>
                <a>Events Head</a>
                <br />
                <a href="tel:+91 8299121435">+91 8299121435</a>
                <br />
                <a href="mailto:abhinav@alcheringa.in">abhinav@alcheringa.in</a>
              </div>
              <div>
                <h6>
                  Priyanshu <br className="line_break" /> Sinha
                </h6>
                <a>Pro-nites Coordinator</a>
                <br />
                <a href="tel:+91 9650757099">+91 9650757099</a>
                <br />
                <a href="mailto:priyanshu.s@alcheringa.in">
                  priyanshu.s@alcheringa.in
                </a>
              </div>
              <div>
                <h6>
                  Rahul <br className="line_break" /> Singh
                </h6>
                <a>Campaigns Head</a>
                <br />
                <a href="tel:+91 7518509062">+91 7518509062</a>
                <br />
                <a href="mailto:rahul@alcheringa.in">rahul@alcheringa.in</a>
              </div>
            </div>
          </div>
          <div className="web_app">
            <div className="head_web_app">
              <h4>WEB & APP OPERATIONS</h4>
            </div>
            <div className="bg_web_app">
              <Image
                src={model_web_app}
                alt="Web & App Operations"
                style={{
                  // width: "fit-content",
                  // height: "50vh",
                  width: "46vw",
                  height: "auto"
                }}
              />
            </div>
            <div className="names_web_app">
              <div>
                <h6>Akshat</h6>
                <a>Web-Ops Head</a>
                <br />
                <a href="tel:+91 8875833508">+91 8875833508</a>
                <br />
                <a href="mailto:webops@alcheringa.in">webops@alcheringa.in</a>
              </div>
              <div>
                <h6>Shantanu Chaudhari</h6>
                <a>App-Ops Head</a>
                <br />
                <a href="tel:+91 8275493025">+91 8275493025</a>
                <br />
                <a href="mailto:webops@alcheringa.in">webops@alcheringa.in</a>
              </div>
            </div>
          </div>
          <div className="mun">
            <div className="head_mun">
              <h4>IITG MUN</h4>
            </div>
            <div className="bg_mun">
              <Image
                src={model_mun}
                alt="IITG MUN"
                style={{
                  // width: "fit-content",
                  // height: "50vh",
                  width: "46vw",
                  height: "auto"
                }}
              />
            </div>
            <div className="names_mun">
              <div>
                <h6>Samarth Jhunjhunwala</h6>
                <a>Secretary General</a>
                <br />
                <a href="tel:+91 7981828510">+91 7981828510</a>
                <br />
                <a href="mailto:iitgmun@alcheringa.in">iitgmun@alcheringa.in</a>
              </div>
              <div>
                <h6>
                  Pratham <br className="line_break" /> Garg
                </h6>
                <a>Director General</a>
                <br />
                <a href="tel:+91 7011533630">+91 7011533630</a>
                <br />
                <a href="mailto:iitgmun@alcheringa.in">iitgmun@alcheringa.in</a>
              </div>
            </div>
          </div>
          <div className="finance">
            <div className="head_finance">
              <h4>FINANCE & ACCOUNT</h4>
            </div>
            <div className="bg_finance">
              <Image
                src={model_finance}
                alt="Finance and Account"
                className="finance_img"
                style={{
                  // width: "fit-content",
                  // height: "50vh",
                  width: "22vw",
                  height: "auto"
                }}
              />
            </div>
            <div className="names_finance">
              <div>
                <h6>Sabir Singh</h6>
                <a>Finance Head</a>
                <br />
                <a href="tel:+91 8950314110">+91 8950314110</a>
                <br />
                <a href="mailto:sabir@alcheringa.in">sabir@alcheringa.in</a>
              </div>
            </div>
          </div>
          <div className="convener">
            <div className="head_convener">
              <h4>CONVENER</h4>
            </div>
            <div className="bg_convener">
              <Image
                src={model_convener}
                alt="Convener"
                className="convener_img"
                style={{
                  // width: "fit-content",
                  // height: "50vh",
                  width: "22vw",
                  height: "auto"
                }}
              />
            </div>
            <div className="names_convener">
              <div>
                <h6>Govind Madhav Vyas</h6>
                <a>Convener</a>
                <br />
                <a href="tel:+91 9406871655">+91 9406871655</a>
                <br />
                <a href="mailto:madhav@alcheringa.in">madhav@alcheringa.in</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer
        bg={"footer img6"}
        star={"star6 star"}
        circle_src1={circle1}
        circle_src2={circle2}
        windows_src={windows1}
        alcheringa_logo={alcheringa}
      />
    </>
  ) : (
    <Loading />
  );
}

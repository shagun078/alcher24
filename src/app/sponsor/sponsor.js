import "./components/sponsor.css";
import design from "./resources/design.png";
import SponsorList1 from "./components/sponsor_list1";
import SponsorList2 from "./components/sponsor_list2";
import Image from "next/image";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import circle1 from "/public/footer_img/sponsors_left_circle.png";
import circle2 from "/public/footer_img/sponsors_right_circle.png";
import windows1 from "/public/footer_img/Sponsors-min.png";
import alcheringa from "/public/footer_img/sponsors_alcheringa.png";
import Loading from "../components/loading/loading";
import { Suspense } from "react";

function Sponsor() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar reg_bg={"register reg_bg7"} />
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

              {/* <div className="title">
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
                      <div className="imagecardt"></div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="cotitle">
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
                      <div className="imagecardct">
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="powered">
                <h1> POWERED BY</h1>
              </div>
              <div className="poweredimg" id="powered_by"></div>

              <div className="powered">
                <h1>IN ASSOCIATION WITH</h1>
              </div>
              <div className="poweredimg" id="in_asso_with"></div>

              <div className="powered">
                <h1>TRUSTED BY</h1>
              </div>
              <div className="poweredimg" id="trusted_by"></div>


              <div className="sponsorfooter">
                <div className="sponsors sp_list1">
                  <SponsorList2></SponsorList2>
                </div>
                <div className="heading2 sp_list2">Media Sponsors</div>
                <div className="sponsors">
                  <SponsorList1></SponsorList1>
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
      </Suspense>
    </>
  );
}
export default Sponsor;

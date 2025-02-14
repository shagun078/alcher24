import Image from "next/image";
import hand_upper from "./resources/hand_upper.png";
import hand_lower from "./resources/hand_lower.png";
import stars from "./resources/stars.png";
import CardList from "./components/cardList";
import styles from "./components/kartavya.css";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";
import circle1 from "/public/footer_img/kartavya_left_circle.png";
import circle2 from "/public/footer_img/kartavya_right_circle.png";
import windows1 from "/public/footer_img/Kartavya-min.png";
import alcheringa from "/public/footer_img/kartavya_alcheringa.png";
import { Suspense } from "react";
import Loadingpage from "../components/loading/loading";

function getCards() {
  const data = [
    {
      id: "lg",
      heading: "UDAAN",
      body: "Udaan, launched as 'Bachpan' in 2011, aims to deliver hope to underprivileged children and create an impact in their lives through the conduction of various educational workshops and recreational activities.",
      img: "./UDAAN.jpg",
    },
  ];

  return data;
}

export default function Kartavya() {
  let flip_cards = getCards();

  var sectionStyle = {
    width: "100%",
    height: "calc((970/772)*24.667vw)",
  };

  return (
    <>
      <Suspense fallback={<Loadingpage />}>
        <Navbar reg_bg={"register reg_bg3"} />
        <main className="kartavya_main">
          <section className="texture_wheel">
            <div className="kartavya_hand_upper">
              <Image
                src={hand_upper}
                alt="upper hand"
                style={{
                  width: "100%",
                  aspectRatio: "870/941",
                  height: "auto",
                }}
                quality={100}
                // placeholder="blur"
              />
            </div>

            <h1 className="kartavya_head">KARTAVYA</h1>
            <h3 className="detail1">
              &ldquo;Unite for change, ignite hope, and <br />
              let people's voices shape our journey.&ldquo;
            </h3>

            <div className="large_card_shadow">
              <div className="large_card">
                <div className="stars1">
                  <Image
                    src={stars}
                    alt="stars"
                    style={{
                      width: "5vw",
                      height: "auto",
                      float: "right",
                      marginTop: "-3vw",
                    }}
                    quality={100}
                    placeholder="blur"
                  />
                </div>
                <h5></h5>
                <h4></h4>
                <div className="stars2">
                  <Image
                    src={stars}
                    alt="stars"
                    style={{
                      width: "5vw",
                      height: "auto",
                      float: "left",
                      backgroundRepeat: "no-repeat",
                    }}
                    quality={100}
                    placeholder="blur"
                    className="star2_k"
                  />
                </div>
              </div>
            </div>

            <div className="large_card_mobile">
              {flip_cards.map((card) => (
                // <div key={card.id} className="col" onTouchStart="this.classList.toggle('hover');">
                <div key={card.id} className="col">
                  <div className="container">
                    <div
                      className="front"
                      style={{
                        sectionStyle,
                        backgroundImage: `url('${card.img}')`,
                      }}
                    >
                      <div className="inner">
                        <p>{card.heading}</p>
                      </div>
                    </div>
                    <div className="back">
                      <div className="inner">
                        <p>{card.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <section className="cards">
              <CardList></CardList>
            </section>
          </section>

          <div className="kartavya_hand_lower">
            <Image
              src={hand_lower}
              alt="lower hand"
              style={{
                width: "100%",
                aspectRatio: "1142/1044",
                height: "auto",
              }}
              quality={100}
              // placeholder="blur"
            />
          </div>
        </main>
        <Footer
          bg={"footer img3"}
          alcheringa_logo={alcheringa}
          star={"star3 star"}
          circle_src1={circle1}
          circle_src2={circle2}
          windows_src={windows1}
        />
      </Suspense>
    </>
  );
}

{
  /* <section className='achievements'>
<div className="head2">
  <h3>Alcher Community</h3>
  <h2>Our Achievements</h2>
</div>
<div><hr></hr></div>
<ListItem></ListItem>        


</section> */
}

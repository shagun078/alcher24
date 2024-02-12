"use client";
import "./components/body.css";
import "./components/mobile_body.css";
import { useState, useEffect } from "react";
import React from "react";
import info from "./components/data.js";
import titledata from "./components/title.js";
import Image from "next/image";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import circle1 from "/public/footer_img/competition_left_circle.png";
import circle2 from "/public/footer_img/competition_right_circle.png";
import windows1 from "/public/footer_img/Frame 15230-min.png";
import alcheringa from "/public/footer_img/competiton_alcheringa.png";

function Body() {
  const [state, setState] = useState(false);

  const [value, setValue] = useState("");

  const [title, setTitle] = useState(["All Competitions"]);
  const [title2, setTitle2] = useState(["Modules"]);

  const [array, setArray] = useState(info);
  const [array2, setArray2] = useState([""]);

  const handleClick = () => {
    setState(!state);
  };

  const onChange = (event) => {
    setValue(event.target.value);
    const keyword = event.target.value;

    if (keyword !== "") {
      const result = info.filter((user) => {
        return user.comp_name.toLowerCase().includes(keyword.toLowerCase());
      });
      setArray(result.slice(0, 6));
      setArray2(result.slice(0, 6));

      const result_2 = titledata.filter((user_2) => {
        return user_2.toLowerCase().includes(keyword.toLowerCase());
      });
      setTitle(result_2.slice(0, 1));
    } else {
      setArray2(["No Results Found"]);
    }
  };

  const module = (val) => {
    var total = [];

    for (let i = 0; i < info.length; i++) {
      if (info[i].category == val) {
        total.push(info[i]);
        setTitle([info[i].category]);
        setTitle2([info[i].category]);
      }
    }
    setArray(total);
  };
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
    <>
      <Navbar reg_bg={"register reg_bg2"} />
      <Cursor />
      <div className="body">
        <div className="search_box">
          <div className="container_1">
            <form action="" className="form">
              <input
                className="search"
                type="text"
                placeholder="Search Competitions"
                value={value}
                onChange={(e) => onChange(e)}
              />
              <FontAwesomeIcon icon={faSearch} className="magnifying_glass" />
              <div className="search_list_box">
                {array2.map((list) => {
                  return <p>{list.comp_name}</p>;
                })}
              </div>
            </form>
            <div className="list_container">
              <div className="modules" onClick={handleClick}>
                {title2.map((capital) => (
                  <p>{capital}</p>
                ))}
                <div className="small_box">
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className={
                      state
                        ? "fa-solid fa-sort-down fa-active"
                        : "fa-solid fa-sort-down"
                    }
                  />
                </div>
              </div>
              <div className={state ? "list list_active" : "list"}>
                <ul>
                  <li
                    onClick={() => {
                      module("Dance");
                      handleClick();
                    }}
                  >
                    Dance
                  </li>
                  <li
                    onClick={() => {
                      module("Vogue Nation");
                      handleClick();
                    }}
                  >
                    Vogue Nation
                  </li>
                  <li
                    onClick={() => {
                      module("Class Apart");
                      handleClick();
                    }}
                  >
                    Class Apart
                  </li>
                  <li
                    onClick={() => {
                      module("Music");
                      handleClick();
                    }}
                  >
                    Music
                  </li>
                  <li
                    onClick={() => {
                      module("Literary");
                      handleClick();
                    }}
                  >
                    Literary
                  </li>
                  <li
                    onClick={() => {
                      module("Art Talkies");
                      handleClick();
                    }}
                  >
                    Art Talkies
                  </li>
                  <li
                    onClick={() => {
                      module("Digital Dexterity");
                      handleClick();
                    }}
                  >
                    Digital Dexterity
                  </li>
                  <li
                    onClick={() => {
                      module("Lights Camera Action");
                      handleClick();
                    }}
                  >
                    Lights Camera Action
                  </li>
                  <li
                    onClick={() => {
                      module("Sports");
                      handleClick();
                    }}
                  >
                    Sports
                  </li>
                  <li
                    onClick={() => {
                      module("Quiz");
                      handleClick();
                    }}
                  >
                    Quiz
                  </li>
                  <li
                    onClick={() => {
                      module("Drama");
                      handleClick();
                    }}
                  >
                    Drama
                  </li>
                  <li
                    onClick={() => {
                      module("Critical Damage");
                      handleClick();
                    }}
                  >
                    Critical Damage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          {title.map((capital) => (
            <h2 className="capital_prop_name">{capital}</h2>
          ))}
        </div>
        <div className="item_box">
          <div className="item_container">
            {array.map((arr) => {
              return (
                <div className="icon">
                  <Image
                    src={arr.img}
                    alt="Photo"
                    className="iconsIMG"
                    width={100}
                    height={100}
                  />
                  <p className="icon_text">{arr.comp_name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer
        bg={"footer img2"}
        star={"star2 star"}
        circle_src1={circle1}
        circle_src2={circle2}
        windows_src={windows1}
        alcheringa_logo={alcheringa}
      />
    </>
  );
}

export default Body;

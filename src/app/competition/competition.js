"use client";
import "./components/body.css";
import "./components/mobile_body.css";
import { useState } from "react";
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
import windows1 from "/public/footer_img/Competitions-min.png";
import alcheringa from "/public/footer_img/competiton_alcheringa.png";

function Body() {
  const [state, setState] = useState(false);

  const [value, setValue] = useState("");

  const [title, setTitle] = useState([{ category: "All Competitions", id: 100 }]);
  const [title2, setTitle2] = useState([{ category: "Modules", id: 101 }]);

  const [array, setArray] = useState(info);

  const handleClick = () => {
    setState(!state);
  }

  const onChange = (event) => {
    setValue(event.target.value);
    const keyword = event.target.value;

    if (keyword !== "") {
      const result = info.filter((user) => {
        return user.comp_name.toLowerCase().includes(keyword.toLowerCase());
      });
      setArray(result.slice(0, 6));

      const result_2 = titledata.filter((user_2) => {
        return user_2.category.toLowerCase().includes(keyword.toLowerCase());
      })
      setTitle(result_2.slice(0, 1));
      setTitle2(result_2.slice(0, 1));
    }
    else {
      setArray(info);
      setTitle([{ category: "All Competitions", id: 100 }]);
      setTitle2([{ category: "Modules", id: 101 }]);
    }

  }

  const module = (val) => {
    var total = [];

    for (let i = 0; i < info.length; i++) {
      if (info[i].category == val) {
        total.push(info[i]);
        setTitle([info[i]]);
        setTitle2([info[i]]);
      }
    }
    setArray(total);
  }

  return (
    <>
      <Navbar reg_bg={"register reg_bg2"} />
      <div className="body">
        <div className="search_box">
          <div className="container_1">
            <form action="" className='form'>
              <input className='search' type="text" placeholder='Search Competitions' value={value} onChange={e => onChange(e)} />
              <FontAwesomeIcon icon={faSearch} className='magnifying_glass' />
            </form>
            <div className="list_container">
              <div className="modules" onClick={handleClick}>
                <div className="para_cover">
                  {title2.map((capital) => (<p key={capital.id}>{capital.category}</p>))}
                </div>
                <div className="small_box">
                  <FontAwesomeIcon icon={faSortDown} className={state ? 'fa-solid fa-sort-down fa-active' : 'fa-solid fa-sort-down'} />
                </div>
              </div>
              <div className={state ? 'list list_active' : 'list'}>
                <ul>
                  <li onClick={() => { module("Dance"); handleClick() }}>Dance</li>
                  <li onClick={() => { module("Vogue Nation"); handleClick() }}>Vogue Nation</li>
                  <li onClick={() => { module("Class Apart"); handleClick() }}>Class Apart</li>
                  <li onClick={() => { module("Music"); handleClick() }}>Music</li>
                  <li onClick={() => { module("Literary"); handleClick() }}>Literary</li>
                  <li onClick={() => { module("Art Talkies"); handleClick() }}>Art Talkies</li>
                  <li onClick={() => { module("Digital Dexterity"); handleClick() }}>Digital Dexterity</li>
                  <li onClick={() => { module("Lights Camera Action"); handleClick() }}>Lights Camera Action</li>
                  <li onClick={() => { module("Sports"); handleClick() }}>Sports</li>
                  <li onClick={() => { module("Quiz"); handleClick() }}>Quiz</li>
                  <li onClick={() => { module("Drama"); handleClick() }}>Drama</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          {title.map((capital) => (<h2 key={capital.id} className='capital_prop_name'>{capital.category}</h2>))}
        </div>
        <div className="item_box" >
          <div className="item_container">
            {array.map((arr) => {
              return (
                <div key={arr.id} className='icon'>
                  <a href={arr.url} target='_blank' className="icon_ke_andar">
                    <Image src={arr.img}
                      alt="Photo"
                      className='iconsIMG'
                      width={100}
                      height={100}
                    />
                    <span className="pad_text_arr">{arr.type}</span>&nbsp;·&nbsp;<span className="pad_text_arr">{arr.one_liner}</span>
                    <p className='icon_text'>{arr.comp_name}</p>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer bg={"footer img2"} star={"star2 star"} circle_src1={circle1} circle_src2={circle2} windows_src={windows1} alcheringa_logo={alcheringa} />
    </>
  );
}

export default Body;

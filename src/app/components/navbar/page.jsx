"use client"
import './components/navbar.css';
import './components/color_changer.css';
import './components/register_color.css';
import alcher_logo from './resources/ALCHERINGA_logo.png';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const props = [
        { "title": "/", "bg": "footer ", "star": "star", id: 0, bool: false, "reg_bg": "register reg_bg" },
        { "title": "/events", "bg": "footer img1", "star": "star1 star", id: 1, bool: false, "reg_bg": "register reg_bg1"},
        { "title": "/competition", "bg": "footer img2", "star": "star1 star", id: 2, bool: false, "reg_bg": "register reg_bg2"},
        { "title": "/kartavya", "bg": "footer img3", "star": "star1 star", id: 3, bool: false, "reg_bg": "register reg_bg3" },
        { "title": "/mun", "bg": "footer img4", "star": "star1 star", id: 4, bool: false, "reg_bg": "register reg_bg4"},
        { "title": "/merch", "bg": "footer img5", "star": "star1 star", id: 5, bool: false, "reg_bg": "register reg_bg5"},
        { "title": "/teams", "bg": "footer img6", "star": "star1 star", id: 6, bool: false, "reg_bg": "register reg_bg6"},
        { "title": "/sponsor", "bg": "footer img7", "star": "star1 star", id: 7, bool: false, "reg_bg": "register reg_bg7"},
      ];

    const router = useRouter();
    const path = usePathname();

    var [ state, setState ] = useState(false);

    const handleClick = () => {
        setState(state => !state);
    }

for(let i=0;i<props.length;i++){
    if(path === props[i].title){
    return (
        <div className="header">
            <div className="logo">
                <Link href="/homepage"><Image className="logo" src={alcher_logo} alt="Alcheringa24" /></Link>
            </div>
            <nav id="navbar_menu">
                <ul>
                    <li onClick={() => router.push("/events")} className={path === "/events" ? "c c1": ""}>
                        <Link href="/events">Events</Link></li>
                    <li onClick={() => router.push("/competition")} className={path === "/competition" ? "c c2": ""}>
                        <Link href="/competition">Competitions</Link></li>
                    <li onClick={() => router.push("/kartavya")} className={path === "/kartavya" ? "c c3": ""}>
                        <Link href="/kartavya">Kartayva</Link></li>
                    <li onClick={() => router.push("/mun")} className={path === "/mun" ? "c c4": ""}>
                        <Link href="/mun">MUN</Link></li>
                    <li onClick={() => router.push("/merch")} className={path === "/merch" ? "c c5": ""}>
                        <Link href="/merch">Merch</Link></li>
                    <li onClick={() => router.push("/teams")} className={path === "/teams" ? "c c6": ""}>
                        <Link href="/teams">Team</Link></li>
                    <li onClick={() => router.push("/sponsor")} className={path === "/sponsor" ? "c c7": ""}>
                        <Link href="/sponsor">Sponsors</Link></li>
                </ul>
            </nav>
            <div className="fixing">
                <button className={props[i].reg_bg}><Link href="/register">Register</Link></button>
            </div>
            <div className="hidden_box"></div>
            <button id="icons" className={state === true ? 'fas fa-times fa-1x' : 'fas fa-bars fa-1x'} onClick={handleClick}>
            </button>
            <div className="sit_box"></div>
        </div>
    );
    }
}
}

export default Navbar;
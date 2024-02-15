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


const Navbar = ( reg_bg ) => {

    const router = useRouter();
    const path = usePathname();

    var [state, setState] = useState(false);

    const handleClick = () => {
        setState(state => !state);
    }
    return (
        <div className="header">
            <div className="logo">
                <a href="/home"><Image className="logo" src={alcher_logo} alt="Alcheringa24" /></a>
            </div>
            <nav className={state === true ? "navbar_menu active" : "navbar_menu"}>
                <ul>
                    <li onClick={() => router.push("/events")} className={path === "/events" ? "c c1" : ""}>
                        <Link href="/events">Events</Link></li>
                    <li onClick={() => router.push("/competition")} className={path === "/competition" ? "c c2" : ""}>
                        <Link href="/competition">Competitions</Link></li>
                    <li onClick={() => router.push("/kartavya")} className={path === "/kartavya" ? "c c3" : ""}>
                        <Link href="/kartavya">Kartayva</Link></li>
                    {/* <li onClick={() => router.push("/mun")} className={path === "/mun" ? "c c4" : ""}> */}
                    {/* <Link href="/mun">MUN</Link></li> */}
                    {/* <li onClick={() => router.push("/merch")} className={path === "/merch" ? "c c5" : ""}> */}
                    {/* <Link href="/merch">Merch</Link></li> */}
                    <li onClick={() => router.push("/teams")} className={path === "/teams" ? "c c6" : ""}>
                        <Link href="/teams">Teams</Link></li>
                    <li onClick={() => router.push("/sponsor")} className={path === "/sponsor" ? "c c7" : ""}>
                        <Link href="/sponsor">Sponsors</Link></li>
                </ul>
            </nav>
            <div className="fixing">
                <button className={reg_bg}><Link href="#">Register</Link></button>
            </div>
            <div className="hidden_box"></div>
            <svg onClick={handleClick} className={state === false ? 'on_state icon_ham' : 'off_state icon_ham'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
            <svg onClick={handleClick} className={state === true ? 'on_state icon_ham' : 'off_state icon_ham'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
            <div className="sit_box"></div>
        </div>
    );

}



export default Navbar;
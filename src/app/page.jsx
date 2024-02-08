import React from "react";
import Link from "next/link";
import './globals.css';


export default function MainPage() {
  return (
    <>
      <Link href="/homepage"> Home Page</Link>
      <br />
      <Link href="/events">Events Page</Link>
      <br />
      <Link href="/events_2d">Events2D Page</Link>
      <br />
      <Link href="/kartavya">Kartavya Page</Link>
      <br></br>
      <Link href="/sponsor">Sponsor Page</Link>
      <br />
      <Link href="/teams">Teams Page</Link>
      <br/>
    </>
  );
}

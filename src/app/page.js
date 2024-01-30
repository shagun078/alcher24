import React from "react";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <Link href="/homepage"> Home Page</Link>
      <br />
      <Link href="/events">Events Page</Link>
    </>
  );
}

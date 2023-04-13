import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-[30px]">
          <div className="">Logo</div>
          <div className="flex flex-col">
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfas</Link>
            <Link href="/">affdsfa</Link>
            <Link href="/">adsf</Link>
          </div>
          <div className="flex flex-col">
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfas</Link>
            <Link href="/">affdsfa</Link>
            <Link href="/">adsf</Link>
          </div>
          <div className="flex flex-col">
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfas</Link>
            <Link href="/">affdsfa</Link>
            <Link href="/">adsf</Link>
          </div>
          <div className="flex flex-col">
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfas</Link>
            <Link href="/">affdsfa</Link>
            <Link href="/">adsf</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

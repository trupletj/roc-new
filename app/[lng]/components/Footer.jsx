import Link from "next/link";
import React from "react";
import LogoWithText from "./atoms/LogoWithText";
import Divider from "./atoms/Divider";

function Footer() {
  return (
    <footer className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-[150px] h-[150px]">
            <LogoWithText />
          </div>
        </div>
        <Divider my="10px" />
        <section className="flex justify-between">
          <div className="flex flex-col lg:flex-row justify-between items-center ">
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
          <div className="flex flex-col">
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfd</Link>
            <Link href="/">afdasfas</Link>
            <Link href="/">affdsfa</Link>
            <Link href="/">adsf</Link>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;

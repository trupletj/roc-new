import Link from "next/link";
import React from "react";
import LogoWithText from "./atoms/LogoWithText";
import Divider from "./atoms/Divider";

function Footer() {
  return (
    <footer className="w-full">
      <div className="container mx-auto">
        <div className="lg:flex justify-center hidden">
          <div className="w-[150px] h-[150px]">
            <LogoWithText />
          </div>
        </div>
        <div
          className={`my-[10px] w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black  dark:bg-white opacity-100 `}
        />
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

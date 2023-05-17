import "@/styles/globals.css";
import localFont from "next/font/local";

import { dir } from "i18next";
import { languages } from "../i18n/settings";

import { Suspense } from "react";

import Providers from "./Providers";
import Header from "@/app/[lng]/components/Header";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "ROC",
  description: "Root of coffea",
};

const noirnormal = localFont({
  src: [
    {
      path: "../../public/fonts/NoirPro-Regular.ttf",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-noir-normal",
});
const noirbold = localFont({
  src: [
    {
      path: "../../public/fonts/NoirPro-Bold.ttf",
    },
  ],
  variable: "--font-noir-bold",
});
const noirlight = localFont({
  src: [
    {
      path: "../../public/fonts/NoirPro-Light.ttf",
    },
  ],
  variable: "--font-noir-light",
});
const noirmedium = localFont({
  src: [
    {
      path: "../../public/fonts/NoirPro-Medium.ttf",
    },
  ],
  variable: "--font-noir-medium",
});

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={`${noirnormal.variable} ${noirbold.variable} ${noirlight.variable} ${noirmedium.variable} relative bg-[#f2f2f2]`}
      >
        <Providers>
          <Header lng={lng} />
          {children}
          <Footer lng={lng} />
        </Providers>
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import localFont from "next/font/local";

import { dir } from "i18next";
import { languages } from "../i18n/settings";

import Providers from "./Providers";
import Header from "@/app/[lng]/components/Header";
import Footer from "./components/Footer";
import ClientRegister from "./components/ClientRegister";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "ROC",
  description: "Root of coffea",
};

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/NoirPro-Regular.ttf",
    },
  ],
  variable: "--font-poppins",
});

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${poppins.variable} font-sans`}>
        <Providers>
          <Header lng={lng} />
          {children}
          <ClientRegister lng={lng} />
          <Footer lng={lng} />
        </Providers>
      </body>
    </html>
  );
}

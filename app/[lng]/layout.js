import "@/styles/globals.css";
import Providers from "./Providers";
import Header from "@/app/[lng]/components/Header";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "ROC",
  description: "Root of coffea",
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Providers>
          <Header lng={lng} />
          {children}
        </Providers>
      </body>
    </html>
  );
}

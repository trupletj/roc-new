import Image from "next/image";
import { Inter } from "next/font/google";
import { useTranslation } from "../i18n";
import DarkModeBtn from "@/app/[lng]/components/atoms/DarkModeBtn";
import Carousel from "./components/moleculs/carousel";
import Divider from "./components/atoms/Divider";
import CoffeeList from "./components/HomeComponents/CoffeeList";

const inter = Inter({ subsets: ["latin"] });

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <main>
      <Carousel />
      <Divider />
      <CoffeeList />
      <h1>{t("about")}</h1>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <DarkModeBtn />
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </main>
  );
}

import Image from "next/image";
import { useTranslation } from "../i18n";
import DarkModeBtn from "@/app/[lng]/components/atoms/DarkModeBtn";
import Carousel from "./components/moleculs/Carousel";
import Divider from "./components/atoms/Divider";
import CoffeeList from "./components/HomeComponents/CoffeeList";
import ShopSection from "./components/HomeComponents/ShopSection";
import AboutSection from "./components/HomeComponents/AboutSection";
import Branches from "./components/HomeComponents/Branches";
import InstagramFeed from "./components/HomeComponents/InstagramFeed";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <main>
      <Carousel />
      <Divider />
      <CoffeeList lng={lng} />
      <Divider />
      <AboutSection />
      <Divider />
      <ShopSection />
      <Divider />
      <Branches />
      <Divider />
      <InstagramFeed />
    </main>
  );
}

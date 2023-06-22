import { useTranslation } from "../i18n";

import Carousel from "./components/moleculs/Carousel";
import Divider from "./components/atoms/Divider";
import CoffeeList from "./components/HomeComponents/CoffeeList";
import ShopSection from "./components/HomeComponents/ShopSection";
import AboutSection from "./components/HomeComponents/AboutSection";
import Branches from "./components/HomeComponents/Branches";
import InstagramFeed from "./components/HomeComponents/InstagramFeed";
import ClientRegister from "./components/ClientRegister";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <main className="w-full bg-[#080505] text-white">
      <Carousel />
      <Divider />
      <CoffeeList lng={lng} />
      <Divider />
      <AboutSection lng={lng} />
      {/* <Divider />
      <ShopSection lng={lng} /> */}
      <Divider />
      <Branches lng={lng} />
      <Divider />
      <InstagramFeed lng={lng} />
      <ClientRegister lng={lng} />
    </main>
  );
}

import Link from "next/link";
import React from "react";
import Image from "next/image";

import image from "@/public/assets/branches1.png";
import map from "@/public/assets/map.png";
import SectionHeader from "../../components/moleculs/SectionHeader";

function page() {
  return (
    <div className="w-full bg-[#080505] text-white py-10">
      <div className="container flex flex-col items-center space-y-10">
        <div className="w-full aspect-[5/3] relative ">
          <Image alt="123" src={image} fill style={{ objectFit: "cover" }} />
        </div>
        <h1 className="text-3xl">ROC Drink Bar, Fountain</h1>
        <ul className="flex flex-row space-x-5 text-base font-light justify-center">
          <li>+976 7721 3333</li>
          <li>
            South of State Department Store, 40th Myangat street, Sukhbaatar
            District
          </li>
          <li>Mon - Sun: 07:00 - 00:00</li>
        </ul>
        <Link href="/" className="bg-[#F2F2F2] text-[#080505] px-16 py-2">
          View Google map
        </Link>
        <div className="max-w-[900px] mx-auto space-y-5 text-xl">
          <p>
            The newly opened ROC Drink Bar branch adds a new color to the coffee
            bars of Mongolia and serves special drinks catered for both day and
            night.
          </p>
          <p>
            Our professional bartenders with at least 4 years of experience
            shall serve you cocktails made with our own special recipe.
          </p>
          <p>
            In addition, our kitchen has a wide selection of food catered for
            both brunch and lunch purposes. You will be welcomed by the staff
            along with the professional baristas and bartenders working under
            the guidance of the skilled head chef who has taken over the kitchen
            of the branch. This branch offers different drinks for catered for
            any occasion.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="aspect-square col-span-1 w-full relative">
            <Image alt="123" src={image} fill style={{ objectFit: "cover" }} />
          </div>
          <div className="aspect-square col-span-1 w-full relative">
            <Image alt="123" src={image} fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="max-w-[900px] mx-auto space-y-5 pt-10 w-full pb-20">
          <h1 className="text-3xl text-left">Drink Bar information</h1>
          <div className="flex justify-between pb-10">
            <div className="w-1/4">
              <ul>
                <li>Phone: </li>
                <li>Address: </li>
              </ul>
            </div>
            <div className="w-1/4">
              <ul>
                <li>+976 7721 3333 </li>
                <li>
                  South of State Department Store, 40th Myangat street,
                  Sukhbaatar District
                </li>
              </ul>
            </div>
            <div className="w-1/4">
              <ul>
                <li>Opening hours: </li>
                <li>Monday: 07:00 - 00:00</li>
                <li>Tuesday: 07:00-00:00</li>
                <li>Wednesday: 07:00-00:00</li>
              </ul>
            </div>
            <div className="w-1/4">
              <ul>
                <li>Thursday: 07:00-00:00</li>
                <li>Friday: 07:00-00:00</li>
                <li>Saturday: 07:00-00:00</li>
                <li>Sunday: 07:00-00:00</li>
              </ul>
            </div>
          </div>
          <div className="aspect-[7/3]  w-full relative">
            <Image alt="123" src={map} fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <SectionHeader title="Бусад салбарууд" buttonTitle="Бүгдийг үзэх" />
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="space-y-5">
            <div className="aspect-square  w-full relative">
              <Image
                alt="123"
                src={image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-2xl">ROC Restaurant, Buddha Vista</h1>
          </div>
          <div className="space-y-5">
            <div className="aspect-square  w-full relative">
              <Image
                alt="123"
                src={image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-2xl">
              ROC UN, West of United Nations building
            </h1>
          </div>
          <div className="space-y-5">
            <div className="aspect-square  w-full relative">
              <Image
                alt="123"
                src={image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-2xl">ROC Restaurant, Buddha Vista</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

import React from "react";
import ClientRegister from "../components/ClientRegister";
import WorkAtRock from "../components/Ankets/WorkAtRock";

function page() {
  return (
    <div className="w-full bg-white">
      <div className="container flex flex-col items-center justify-center py-10 pb-20">
        <h1 className="text-6xl font-medium">WORK AT ROC</h1>
        <p className="my-4">Одоогоор нээлттэй ажлын байр зарлагдаагүй байна</p>
        <button className="w-full max-w-[400px] border py-2 text-white bg-[#080505]">
          Анкет бөглөх
        </button>
      </div>
      <ClientRegister />
      <WorkAtRock />
    </div>
  );
}

export default page;

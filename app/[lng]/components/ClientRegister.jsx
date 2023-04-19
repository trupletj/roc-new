import React from "react";

function ClientRegister({ lng }) {
  return (
    <div className="w-full bg-[#ECEBE7] text-[#080505]">
      <div className="container mx-auto flex flex-col lg:flex-row py-10 px-5">
        <div className="lg:w-1/2 flex flex-col">
          <div className="text-[32px] mb-[20px]">Холбоотой байя!</div>
          <div className="lg:mr-[50px]">
            Шинэ салбар, шинээр ирсэн бараа бүтээгдэхүүний мэдээллийг хүлээн
            авах, урьдчилсан захиалга хийх, сонирхолтой нээлт, онцгой санал,
            худалдан авалтын онцгой эрх хүлээн авах бол и-мэйл хаягаа бүртгүүлнэ
            үү.
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end items-center mt-5 lg:mt-0">
          <form className="w-full max-w-[560px]">
            <div className="flex flex-row bg-white items-center  w-full border border-black justify-between">
              <input
                className="text-black bg-white border-none px-[20px] outline-0"
                type="text"
                placeholder="И-мэйл хаяг"
              />
              <button className="bg-black text-white py-3 px-5">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ClientRegister;

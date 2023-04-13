import React from "react";

function ClientRegister({ lng }) {
  return (
    <div className="w-full bg-[#ECEBE7] text-[#080505]">
      <div className="container mx-auto flex py-[30px]">
        <div className="w-1/2 flex flex-col">
          <div className="text-[32px] mb-[20px]">roc.mn - d burtguuleh</div>
          <div className="lg:mr-[50px]">
            Шинэ салбар, шинээр ирсэн бараа бүтээгдэхүүний мэдээллийг хүлээн
            авах, урьдчилсан захиалга хийх, сонирхолтой нээлт, онцгой санал,
            худалдан авалтын онцгой эрх хүлээн авах бол и-мэйл хаягаа бүртгүүлнэ
            үү.
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <form className="w-full max-w-[560px]">
            <div className="flex flex-row bg-white items-center h-[80px] w-full px-[30px] border border-black justify-between">
              <input
                className="text-black bg-white border-none mr-[20px] outline-0"
                type="text"
                placeholder="И-мэйл хаяг"
              />
              <button className="bg-black text-white py-[15px] px-[45px]">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ClientRegister;

"use client";
import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import GlobalContext from "../../context/GlobalContext";
import Cross from "../atoms/icons/Cross";

const ModalLogin = () => {
  const { openLogin, setOpenLogin } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [codeSent, setCodeSent] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleSubmit = (e) => {
    console.log(email);
  };
  const handleContinue = (e) => {
    setCodeSent(true);
  };
  const handleLogin = (e) => {
    setCodeSent(true);
  };
  const handleClose = (e) => {
    setOpenLogin(false);
    setEmail("");
    setCode(null);
    setCodeSent(false);
  };
  return (
    <Transition.Root show={openLogin} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpenLogin}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#080505] bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-white text-left  transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className=" font-semibold leading-6 text-gray-900 flex items-center justify-between uppercase font-normal text-2xl"
                      >
                        {isLogin ? "Нэвтрэх" : "Бүртгүүлэх"}
                        <button
                          type="button"
                          className=" px-3 py-2 text-sm  text-white shadow-sm bg-[#080505] sm:ml-3 sm:w-auto"
                          onClick={() => handleClose()}
                        >
                          X
                        </button>
                      </Dialog.Title>
                      {isLogin && !codeSent && (
                        <div className="mt-2 text-[#080505]">
                          <div className="flex flex-col">
                            <label className="text-[#080505] mb-5">
                              Имайл хаяг эсвэл гар утасны дугаараа орууна уу
                            </label>
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              className="py-3 px-4 outline-none border border-[#080505] text-[#080505] bg-transparent mb-10"
                              placeholder="Имайл хаяг эсвэл гар утасны дугаар"
                            />
                          </div>
                          <button
                            onClick={() => handleLogin()}
                            className="text-white py-3 text-center w-full bg-[#080505]"
                          >
                            Нэвтрэх
                          </button>

                          <div className="my-5 text-center">
                            Хэрвээ шинэ хэрэглэгч бол{" "}
                            <span
                              className="text-[#F0B450] underline cursor-pointer"
                              onClick={() => setIsLogin(!isLogin)}
                            >
                              Бүртгүүлэх
                            </span>
                          </div>
                        </div>
                      )}
                      {!isLogin && !codeSent && (
                        <div className="mt-2 text-[#080505]">
                          <div className="flex flex-col">
                            <label className="text-[#080505] mb-5">
                              Имайл хаяг эсвэл гар утасны дугаараа орууна уу
                            </label>
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              className="py-3 px-4 outline-none border border-[#080505] text-[#080505] bg-transparent mb-5"
                              placeholder="Имайл хаяг эсвэл гар утасны дугаар"
                            />
                          </div>
                          <p className="mb-5 text-center">
                            Хэрвээ бүртгэлтэй бол{" "}
                            <span
                              className="text-[#F0B450] underline cursor-pointer"
                              onClick={() => setIsLogin(!isLogin)}
                            >
                              Нэвтрэх
                            </span>
                          </p>
                          <button
                            onClick={() => handleContinue()}
                            className="text-white py-3 text-center w-full bg-[#080505]"
                          >
                            Үргэлжлүүлэх
                          </button>
                          <p className="text-center mt-5 text-[#6B6969] text-sm">
                            И-мэйл хаяг, утасны дугаараа оруулан үргэлжлүүлэх
                            товчийг дарснаар таныг тус вебсайтын Үйлчилгээний
                            нөхцөл болон Нууцлалын бодлогыг хүлээн зөвшөөрсөнд
                            тооцно.
                          </p>
                        </div>
                      )}
                      {codeSent && (
                        <div className="mt-10 text-[#080505]">
                          <div className="flex flex-col">
                            <div className="w-full py-3 px-4 bg-gray-200 mb-5">
                              <span className=" outline-none text-[#080505] bg-transparent w-full">
                                {email}
                              </span>
                            </div>
                            <label className="text-[#080505] mb-3">
                              Танд ирсэн кодыг орууна уу
                            </label>
                            <input
                              onChange={(e) => setCode(e.target.value)}
                              className="py-3 px-4 outline-none border border-[#080505] text-[#080505] bg-transparent mb-5"
                              placeholder="00 00 00"
                            />
                          </div>

                          <button
                            onClick={() => handleSubmit()}
                            className="text-white py-3 my-5 text-center w-full bg-[#080505]"
                          >
                             Нэвтрэх
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalLogin;

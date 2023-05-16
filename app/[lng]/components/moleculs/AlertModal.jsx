"use client";
import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "@/app/i18n/client";

const AlertModal = ({ alert }) => {
  const cancelButtonRef = useRef(null);

  const [currentAlert, setCurrentAlert] = useState({
    title: "-",
    description: "-",
    show: true,
    ...alert,
  });

  const closeAlert = () => {
    setCurrentAlert((val) => {
      return { ...val, show: false };
    });
  };
  const handleClose = (e) => {
    closeAlert();
  };
  return (
    <Transition.Root show={currentAlert.show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={closeAlert}
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
          <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-white text-left  transition-all  sm:w-full sm:max-w-2xl">
                <div className="bg-white w-full">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className=" font-semibold leading-6 text-gray-900 flex items-center justify-between  font-normal py-3 px-5 bg-[#F2F2F2]"
                      >
                        <div className="my-5">
                          <h5 className="text-left  uppercase text-xl">
                            {currentAlert.title}
                          </h5>
                          <p className="text-xl font-light mt-3">
                            {currentAlert.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          className=" px-3 py-2 text-sm  text-white shadow-sm bg-[#080505] sm:ml-3 sm:w-auto"
                          onClick={() => handleClose()}
                        >
                          X
                        </button>
                      </Dialog.Title>
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

export default AlertModal;

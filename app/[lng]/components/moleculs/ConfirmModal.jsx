"use client";
import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import GlobalContext from "../../context/GlobalContext";
import Cross from "../atoms/icons/Cross";
import { useTranslation } from "@/app/i18n/client";

const ConfirmModal = ({ openConfirmModal, setOpenConfirmModal, lng }) => {
  const { t } = useTranslation(lng, "client");
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
    setOpenConfirmModal(false);
    setEmail("");
    setCode(null);
    setCodeSent(false);
  };
  return (
    <Transition.Root show={openConfirmModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpenConfirmModal}
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
                <div className="bg-white pb-4  w-full">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className=" font-semibold leading-6 text-gray-900 flex items-center justify-between uppercase font-normal text-2xl py-3 px-5 bg-[#F2F2F2]"
                      >
                        <div className="my-5">
                          <h1 className="text-left">ДАНС эсвэл QR код</h1>
                          <p className="text-xs font-light">
                            Аль ч банкны аппликейшн ашиглан уншуулж болно.
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
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 ">qr</div>
                        <div className="w-full md:w-2/3 flex flex-col p-5">
                          <h1 className="mb-2">Дансаар шилжүүлэх</h1>
                          <div className="grid grid-cols-2 gap-2 w-full text-xs my-3">
                            <button className="flex items-center px-2 py-2 border bg-[#080505] text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                              >
                                <defs>
                                  <pattern
                                    id="pattern"
                                    preserveAspectRatio="xMidYMid slice"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 72 72"
                                  >
                                    <image
                                      width={72}
                                      height={72}
                                      xlinkHref="data:image/webp;base64,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"
                                    />
                                  </pattern>
                                </defs>
                                <rect
                                  id="download"
                                  width={20}
                                  height={20}
                                  fill="url(#pattern)"
                                />
                              </svg>
                              <p className="ml-2">Голомт банк</p>
                            </button>
                            <button className="flex items-center justify-start px-2 py-2 border">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                              >
                                <defs>
                                  <clipPath id="clip-path">
                                    <rect
                                      id="Rectangle_259"
                                      data-name="Rectangle 259"
                                      width={20}
                                      height={20}
                                      transform="translate(0 0)"
                                      fill="none"
                                    />
                                  </clipPath>
                                </defs>
                                <g
                                  id="Group_710"
                                  data-name="Group 710"
                                  transform="translate(0.447 0.001)"
                                >
                                  <g
                                    id="Group_709"
                                    data-name="Group 709"
                                    transform="translate(-0.447 -0.001)"
                                    clipPath="url(#clip-path)"
                                  >
                                    <path
                                      id="Path_165"
                                      data-name="Path 165"
                                      d="M17.959,9.841a8.155,8.155,0,0,1-.351,2.359L15.26,9.821l2.348-2.338a8.025,8.025,0,0,1,.351,2.349A5.746,5.746,0,0,0,9.837,1.7a8.176,8.176,0,0,1,2.359.331L9.811,4.4,7.472,2.032A8.1,8.1,0,0,1,9.82,1.681,5.749,5.749,0,0,0,1.7,9.821a8.145,8.145,0,0,1,.331-2.359L4.412,9.841,2.034,12.18a8.014,8.014,0,0,1-.352-2.338A5.742,5.742,0,0,0,9.8,17.963a8.249,8.249,0,0,1-2.359-.352L9.83,15.262l2.34,2.349a8.114,8.114,0,0,1-2.348.351,5.741,5.741,0,1,0,8.118-8.12Z"
                                      transform="translate(0.358 -0.001)"
                                      fill="#004712"
                                    />
                                    <path
                                      id="Path_166"
                                      data-name="Path 166"
                                      d="M10.437,7.253a.581.581,0,0,1,.327.092.584.584,0,0,1-.536,1.032.578.578,0,0,1-.264-.215.588.588,0,0,1-.1-.326.558.558,0,0,1,.04-.222.572.572,0,0,1,.31-.316.575.575,0,0,1,.222-.045m0-1.613h.079a2.185,2.185,0,0,1,.744,4.2c-.549.217-1.144.354-1.7.549a2.688,2.688,0,0,0-1.8,2.586,2.642,2.642,0,0,0,.754,1.865A4.783,4.783,0,0,1,10.44,5.686Zm0,8.054a.588.588,0,0,1-.329-.093.584.584,0,1,1,.807-.808.589.589,0,0,1,.094.329.572.572,0,0,1-.572.571m0,1.613h-.079a2.185,2.185,0,0,1-.747-4.2c.549-.218,1.144-.344,1.719-.55a2.678,2.678,0,0,0,1.044-4.451,4.782,4.782,0,0,1-1.934,9.153"
                                      transform="translate(-0.25 -0.603)"
                                      fill="#d2ab67"
                                    />
                                    <path
                                      id="Path_167"
                                      data-name="Path 167"
                                      d="M10.954,8.981a.584.584,0,0,0,0-1.145.584.584,0,0,0,0,1.145"
                                      transform="translate(-0.766 -0.839)"
                                      fill="#004712"
                                    />
                                    <path
                                      id="Path_168"
                                      data-name="Path 168"
                                      d="M10.954,14.057a.584.584,0,0,0,0-1.145.584.584,0,0,0,0,1.145"
                                      transform="translate(-0.766 -1.383)"
                                      fill="#004712"
                                    />
                                  </g>
                                </g>
                              </svg>
                              <p className="ml-2">Хаан банк</p>
                            </button>
                          </div>
                          <div className="grid grid-cols-1 gap-3">
                            <div className="flex items-center justify-between px-4 py-2 bg-[#F2F2F2]">
                              <div>
                                <h1 className="text-xs font-light text-[#6B6969]">
                                  Хүлээн авах данс
                                </h1>
                                <p className="text-sm font-normal">
                                  2015102259
                                </p>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width={40}
                                  height="39.999"
                                  viewBox="0 0 40 39.999"
                                >
                                  <defs>
                                    <clipPath id="clip-path">
                                      <rect
                                        id="Rectangle_263"
                                        data-name="Rectangle 263"
                                        width="19.895"
                                        height="19.999"
                                        fill="#fff"
                                      />
                                    </clipPath>
                                  </defs>
                                  <g
                                    id="Group_719"
                                    data-name="Group 719"
                                    transform="translate(-1398 -567)"
                                  >
                                    <path
                                      id="Path_171"
                                      data-name="Path 171"
                                      d="M0,0H40V40H0Z"
                                      transform="translate(1398 567)"
                                      fill="#b5b5b5"
                                    />
                                    <g
                                      id="Group_718"
                                      data-name="Group 718"
                                      transform="translate(1408 577)"
                                    >
                                      <path
                                        id="Path_169"
                                        data-name="Path 169"
                                        d="M239.3,0V4.782h1.3V1.3h11.3v11.3h-3.374v1.3h4.678V0Z"
                                        transform="translate(-233.318)"
                                        fill="#fff"
                                      />
                                      <g
                                        id="Group_717"
                                        data-name="Group 717"
                                        transform="translate(0 0)"
                                      >
                                        <g
                                          id="Group_716"
                                          data-name="Group 716"
                                          clipPath="url(#clip-path)"
                                        >
                                          <path
                                            id="Path_170"
                                            data-name="Path 170"
                                            d="M0,257.383H13.913V243.47H0Zm12.608-1.429a.125.125,0,0,1-.125.124H1.3v-11.3h11.3v11.18Z"
                                            transform="translate(0 -237.383)"
                                            fill="#fff"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex items-center justify-between px-4 py-2 bg-[#F2F2F2]">
                              <div>
                                <h1 className="text-xs font-light text-[#6B6969]">
                                  Хүлээн авагч
                                </h1>
                                <p className="text-sm font-normal">
                                  Юнайтед ресурсес
                                </p>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width={40}
                                  height="39.999"
                                  viewBox="0 0 40 39.999"
                                >
                                  <defs>
                                    <clipPath id="clip-path">
                                      <rect
                                        id="Rectangle_263"
                                        data-name="Rectangle 263"
                                        width="19.895"
                                        height="19.999"
                                        fill="#fff"
                                      />
                                    </clipPath>
                                  </defs>
                                  <g
                                    id="Group_719"
                                    data-name="Group 719"
                                    transform="translate(-1398 -567)"
                                  >
                                    <path
                                      id="Path_171"
                                      data-name="Path 171"
                                      d="M0,0H40V40H0Z"
                                      transform="translate(1398 567)"
                                      fill="#b5b5b5"
                                    />
                                    <g
                                      id="Group_718"
                                      data-name="Group 718"
                                      transform="translate(1408 577)"
                                    >
                                      <path
                                        id="Path_169"
                                        data-name="Path 169"
                                        d="M239.3,0V4.782h1.3V1.3h11.3v11.3h-3.374v1.3h4.678V0Z"
                                        transform="translate(-233.318)"
                                        fill="#fff"
                                      />
                                      <g
                                        id="Group_717"
                                        data-name="Group 717"
                                        transform="translate(0 0)"
                                      >
                                        <g
                                          id="Group_716"
                                          data-name="Group 716"
                                          clipPath="url(#clip-path)"
                                        >
                                          <path
                                            id="Path_170"
                                            data-name="Path 170"
                                            d="M0,257.383H13.913V243.47H0Zm12.608-1.429a.125.125,0,0,1-.125.124H1.3v-11.3h11.3v11.18Z"
                                            transform="translate(0 -237.383)"
                                            fill="#fff"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex items-center justify-between px-4 py-2 bg-[#F2F2F2]">
                              <div>
                                <h1 className="text-xs font-light text-[#6B6969]">
                                  Захиалын дүн
                                </h1>
                                <p className="text-sm font-normal">100,000₮</p>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width={40}
                                  height="39.999"
                                  viewBox="0 0 40 39.999"
                                >
                                  <defs>
                                    <clipPath id="clip-path">
                                      <rect
                                        id="Rectangle_263"
                                        data-name="Rectangle 263"
                                        width="19.895"
                                        height="19.999"
                                        fill="#fff"
                                      />
                                    </clipPath>
                                  </defs>
                                  <g
                                    id="Group_719"
                                    data-name="Group 719"
                                    transform="translate(-1398 -567)"
                                  >
                                    <path
                                      id="Path_171"
                                      data-name="Path 171"
                                      d="M0,0H40V40H0Z"
                                      transform="translate(1398 567)"
                                      fill="#b5b5b5"
                                    />
                                    <g
                                      id="Group_718"
                                      data-name="Group 718"
                                      transform="translate(1408 577)"
                                    >
                                      <path
                                        id="Path_169"
                                        data-name="Path 169"
                                        d="M239.3,0V4.782h1.3V1.3h11.3v11.3h-3.374v1.3h4.678V0Z"
                                        transform="translate(-233.318)"
                                        fill="#fff"
                                      />
                                      <g
                                        id="Group_717"
                                        data-name="Group 717"
                                        transform="translate(0 0)"
                                      >
                                        <g
                                          id="Group_716"
                                          data-name="Group 716"
                                          clipPath="url(#clip-path)"
                                        >
                                          <path
                                            id="Path_170"
                                            data-name="Path 170"
                                            d="M0,257.383H13.913V243.47H0Zm12.608-1.429a.125.125,0,0,1-.125.124H1.3v-11.3h11.3v11.18Z"
                                            transform="translate(0 -237.383)"
                                            fill="#fff"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex items-center justify-between px-4 py-2 bg-[#F2F2F2]">
                              <div>
                                <h1 className="text-xs font-light text-[#6B6969]">
                                  Гүйлгээний утга
                                </h1>
                                <p className="text-sm font-normal">I-O230427</p>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width={40}
                                  height="39.999"
                                  viewBox="0 0 40 39.999"
                                >
                                  <defs>
                                    <clipPath id="clip-path">
                                      <rect
                                        id="Rectangle_263"
                                        data-name="Rectangle 263"
                                        width="19.895"
                                        height="19.999"
                                        fill="#fff"
                                      />
                                    </clipPath>
                                  </defs>
                                  <g
                                    id="Group_719"
                                    data-name="Group 719"
                                    transform="translate(-1398 -567)"
                                  >
                                    <path
                                      id="Path_171"
                                      data-name="Path 171"
                                      d="M0,0H40V40H0Z"
                                      transform="translate(1398 567)"
                                      fill="#b5b5b5"
                                    />
                                    <g
                                      id="Group_718"
                                      data-name="Group 718"
                                      transform="translate(1408 577)"
                                    >
                                      <path
                                        id="Path_169"
                                        data-name="Path 169"
                                        d="M239.3,0V4.782h1.3V1.3h11.3v11.3h-3.374v1.3h4.678V0Z"
                                        transform="translate(-233.318)"
                                        fill="#fff"
                                      />
                                      <g
                                        id="Group_717"
                                        data-name="Group 717"
                                        transform="translate(0 0)"
                                      >
                                        <g
                                          id="Group_716"
                                          data-name="Group 716"
                                          clipPath="url(#clip-path)"
                                        >
                                          <path
                                            id="Path_170"
                                            data-name="Path 170"
                                            d="M0,257.383H13.913V243.47H0Zm12.608-1.429a.125.125,0,0,1-.125.124H1.3v-11.3h11.3v11.18Z"
                                            transform="translate(0 -237.383)"
                                            fill="#fff"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between px-4 py-5 bg-[#F0B450]">
                            <p className="text-xs text-center">
                              Төлбөр төлөгдсөний дараа таны захиалга идэвхэждэг
                              болохыг анхаараарай! Төлбөрийг дээрх дансанд
                              шилжүүлэх ба захиалгын I-O230427 дугаарыг
                              гүйлгээний утга дээр бичнэ үү. Мөн та өөрийн
                              банкны аппликейшныг ашиглан QR кодыг уншуулж
                              төлбөр төлөх боломжтой.
                            </p>
                          </div>
                        </div>
                      </div>
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

export default ConfirmModal;

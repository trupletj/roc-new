"use client";
import { useRef, useState, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { useTranslation } from "@/app/i18n/client";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import Loading from "../../atoms/Loading";
import Cookies from "js-cookie";
const Login = ({ lng, isDialog }) => {
  const { t } = useTranslation(lng, "header");
  const { setOpenLogin, mediaDomain, setUser, setToken } =
    useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [showValid, setShowValid] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [code, setCode] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [codeSent, setCodeSent] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const isValid = (value) => {
    const regex = /^\d{8}$|^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return regex.test(value);
  };
  const isPhone = (value) => {
    const regex = /^\d{8}$/;
    return regex.test(value);
  };

  const handleSubmit = async (e) => {
    setLoginError(false);
    setLoading((val) => {
      return true;
    });
    let data = {
      code: code,
    };
    if (isPhone(email)) {
      data = { phone: email, code: code };
    } else {
      data = { email: email, code: code };
    }
    const JSONdata = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSONdata,
    };
    const endpoint = `${mediaDomain}/client/profile/dologin`;
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (result?.record?.token) {
      Cookies.set("token", result?.record?.token, { expires: 1 });
      const token = Cookies.get("token");
      setToken(token);
      setUser(result.record.profile);
    } else {
      setLoginError(true);
    }
    setLoading((val) => {
      return false;
    });
  };
  const sendCode = async () => {
    setLoginError(false);
    setLoading((val) => {
      return true;
    });
    let data = {};
    if (isPhone(email)) {
      data = { phone: email };
    } else {
      data = { email: email };
    }
    const JSONdata = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const endpoint = `${mediaDomain}/client/profile/login`;
    const response = await fetch(endpoint, options);
    const result = await response.json();

    setCodeSent(true);
    setLoading((val) => {
      return false;
    });
  };

  const handleLogin = (e) => {
    if (!email) {
      setShowValid(true);
    }
    if (!showValid && email) {
      sendCode();
    }
  };
  const handleContinue = (e) => {
    handleLogin(e);
  };

  const handleClose = (e) => {
    setOpenLogin(false);
    setEmail("");
    setCode(null);
    setCodeSent(false);
  };
  return (
    <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
      {isDialog && (
        <Dialog.Title
          as="h3"
          className=" font-semibold leading-6 text-gray-900 flex items-center justify-between uppercase font-normal text-2xl"
        >
          {isLogin ? t("login") : t("register")}
          <button
            type="button"
            className=" px-3 py-2 text-sm  text-white shadow-sm bg-[#080505] sm:ml-3 sm:w-auto"
            onClick={() => handleClose()}
          >
            X
          </button>
        </Dialog.Title>
      )}
      {!isDialog && (
        <h3 className=" font-semibold leading-6 text-gray-900 flex items-center justify-between uppercase font-normal text-2xl">
          {isLogin ? t("login") : t("register")}
        </h3>
      )}
      {!codeSent && (
        <div className="mt-2 text-[#080505]">
          <div className="flex flex-col">
            <label className="text-[#080505] mb-5">{t("email_or_phone")}</label>
            <input
              value={email}
              onChange={(e) =>
                setEmail((val) => {
                  setShowValid((val) => {
                    return !isValid(e.target.value);
                  });
                  return e.target.value;
                })
              }
              className={`py-3 px-4 outline-none border ${
                showValid ? "border-red-500" : "border-[#080505]"
              } text-[#080505] bg-transparent mb-3 `}
              placeholder={t("email_or_phone")}
            />
          </div>
          {!isLogin && (
            <>
              <div className="mb-5 text-center">
                {t("already_registered")}{" "}
                <span
                  className="text-[#F0B450] underline cursor-pointer"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {t("login")}
                </span>
              </div>
              <p className="text-center my-5 text-[#6B6969] text-sm">
                {t("agree_text")}
              </p>
              {!isLoading && (
                <button
                  onClick={() => handleContinue()}
                  className="text-white py-3 text-center w-full bg-[#080505]"
                >
                  {t("continue")}
                </button>
              )}
              {isLoading && <Loading />}
            </>
          )}
          {isLogin && (
            <>
              <div className="mb-5 text-center">
                {t("new_customer")}
                {"? "}
                <span
                  className="text-[#F0B450] underline cursor-pointer"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {t("register")}
                </span>
              </div>

              {!isLoading && (
                <button
                  onClick={() => handleLogin()}
                  className="text-white py-3 text-center w-full bg-[#080505]"
                >
                  {t("login")}
                </button>
              )}

              {isLoading && <Loading />}
            </>
          )}
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
            <label className="text-[#080505] mb-3">{t("recieve_code")}</label>
            <input
              type="number"
              maxLength={6}
              onChange={(e) => setCode(e.target.value)}
              className="py-3 px-4 outline-none border border-[#080505] text-[#080505] bg-transparent mb-5"
              placeholder="00 00 00"
            />

            {loginError && (
              <label className="text-red-500 mb-3">
                {t("recieve_code_not_valid")}
              </label>
            )}
          </div>

          <div className="mb-5 text-center">
            {t("auth_wrong")}
            {"? "}
            <span
              className="text-[#F0B450] underline cursor-pointer"
              onClick={() => setCodeSent(false)}
            >
              {t("back")}
            </span>
          </div>
          {!isLoading && code && (
            <button
              onClick={() => handleSubmit()}
              className="text-white py-3 my-5 text-center w-full bg-[#080505]"
            >
              {t("login")}
            </button>
          )}

          {isLoading && <Loading />}
        </div>
      )}
    </div>
  );
};

export default Login;

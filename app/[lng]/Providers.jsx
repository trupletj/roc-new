"use client";
import React, { useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";
import Cookies from "js-cookie";
import AlertModal from "./components/moleculs/AlertModal";
import GlobalLoader from "./components/moleculs/GlobalLoader";

function Providers({ children }) {
  const [openBasket, setOpenBasket] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [card, setCard] = useState({});
  const district = {
    BGD: "Баянгол",
    BZD: "Баянзүрх",
    SBD: "Сүхбаатар",
    SHD: "Сонгинохайрхан",
    CHD: "Чингэлтэй",
    HUD: "Хан-Уул",
  };
  const mediaDomain = "https://www.api.roc.mn";
  // const mediaDomain = "http://192.168.10.109:8000";
  const [token, setToken] = useState("");
  const [user, setUser] = useState(false);
  const googleMapsApiKey = "AIzaSyAAQwcxH6QcZ-qIYEzOc657nuM01glAxAU";
  const [alerts, setAlerts] = useState([]);
  const [globalLoader, setGlobalLoader] = useState(false);
  useEffect(() => {
    let token = Cookies.get("token");
    setToken(token);
  }, []);

  const checkProfile = async (e) => {
    setUser(false);
    if (token) {
      const JSONdata = JSON.stringify({});
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSONdata,
      };
      const endpoint = `${mediaDomain}/client/profile/me`;
      const response = await fetch(endpoint, options);

      if (response.status === 200) {
        const result = await response.json();
        setUser(result.user);
      } else {
        Cookies.remove("token");
        setToken("");
        setUser(false);
      }
    }
  };
  useEffect(() => {
    checkProfile();
  }, [token]);

  return (
    <GlobalContext.Provider
      value={{
        openBasket,
        setOpenBasket,
        openLogin,
        setOpenLogin,
        mediaDomain,
        card,
        setCard,
        user,
        setUser,
        token,
        setToken,
        openProfile,
        setOpenProfile,
        googleMapsApiKey,
        setAlerts,
        globalLoader,
        setGlobalLoader,
        district,
      }}
    >
      {alerts.map((item, key) => (
        <AlertModal key={`current-alert-${key}`} alert={item} />
      ))}

      <GlobalLoader
        globalLoader={globalLoader}
        setGlobalLoader={setGlobalLoader}
      />
      {children}
    </GlobalContext.Provider>
  );
}

export default Providers;

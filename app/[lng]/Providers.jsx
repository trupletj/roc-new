"use client";
import React, { useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";
import Cookies from "js-cookie";

function Providers({ children }) {
  const [openBasket, setOpenBasket] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [card, setCard] = useState({});
  const mediaDomain = "https://www.api.roc.mn";
  // const mediaDomain = "http://192.168.10.188:8000";
  // const mediaDomain = "http://192.168.0.68:8000";
  const [token, setToken] = useState("");
  const [user, setUser] = useState(false);

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
        setOpenProfile
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Providers;

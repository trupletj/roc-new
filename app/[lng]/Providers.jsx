"use client";
import React, { useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";

function Providers({ children }) {
  const [openBasket, setOpenBasket] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [card, setCard] = useState({});
  // const api_domain = process.env.IMAGE_DOMAIN || 'http://192.168.10.214:8000';
  const api_domain = process.env.IMAGE_DOMAIN || "https://api.app-roc.com";

  useEffect(() => {
    console.log("mounted");
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        openBasket,
        setOpenBasket,
        openLogin,
        setOpenLogin,
        api_domain,
        card,
        setCard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Providers;

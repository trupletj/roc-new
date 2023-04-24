"use client";
import React, { useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";

function Providers({ children }) {
  const [openBasket, setOpenBasket] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [card, setCard] = useState({});
  const apiDomain = "https://api.app-roc.com";

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
        apiDomain,
        card,
        setCard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Providers;

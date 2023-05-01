"use client";
import React, { useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";

function Providers({ children }) {
  const [openBasket, setOpenBasket] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [card, setCard] = useState({});
  const mediaDomain = "https://www.api.roc.mn";
  // const mediaDomain = "http://192.168.0.68:8000";

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Providers;

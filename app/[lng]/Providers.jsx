"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";

function Providers({ children }) {
  const [openBasket, setOpenBasket] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  // const api_domain = "http://192.168.10.214:8000";

  const api_domain = "https://api.app-roc.com";

  useEffect(() => {
    console.log("mounted");
  }, []);
  return (
    <GlobalContext.Provider
      value={{ openBasket, setOpenBasket, openLogin, setOpenLogin, api_domain }}
    >
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default Providers;

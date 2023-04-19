"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";

function Providers({ children }) {
  const [openBasket, setOpenBasket] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  useEffect(() => {
    console.log("mounted");
  }, []);
  return (
    <GlobalContext.Provider
      value={{ openBasket, setOpenBasket, openLogin, setOpenLogin }}
    >
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default Providers;

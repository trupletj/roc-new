"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function DarkModeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="cursor-pointer">
      {theme === "light" ? (
        <div onClick={() => setTheme("dark")}>to dark</div>
      ) : (
        <div onClick={() => setTheme("light")}>to light</div>
      )}
    </div>
  );
}

export default DarkModeBtn;

"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const ToggleDarkLight = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <HiOutlineSun
          className="h-6 w-6 cursor-pointer "
          onClick={() => setTheme("light")}
        />
      ) : (
        <HiOutlineMoon
          className="h-6 w-6 cursor-pointer "
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default ToggleDarkLight;

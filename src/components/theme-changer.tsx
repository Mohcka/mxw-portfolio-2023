"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {resolvedTheme}
      <button
        className="rounded
        bg-teal-700
        px-2
        py-1
        text-xs
        font-semibold
        text-white
        shadow-sm
        hover:bg-indigo-500
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-teal-700"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>
      <button
        className="rounded
        bg-teal-700
        px-2
        py-1
        text-xs
        font-semibold
        text-white
        shadow-sm
        hover:bg-indigo-500
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-teal-700"
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default ThemeChanger;

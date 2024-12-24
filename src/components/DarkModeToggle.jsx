import React from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 rounded bg-white text-blue-500 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center gap-2"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      {/* {isDarkMode ? "Light Mode" : "Dark Mode"} */}
    </button>
  );
};

export default DarkModeToggle;


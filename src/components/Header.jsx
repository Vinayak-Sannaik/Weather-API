import DarkModeToggle from "./DarkModeToggle";

const Header = ({ isDarkMode, setIsDarkMode }) => (
  <header className="w-full p-4 bg-blue-900 text-white dark:bg-blue-1000 flex justify-between items-center">
    <h1 className="text-2xl font-bold">WEATHER TODAY</h1>
    <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  </header>
);

export default Header;


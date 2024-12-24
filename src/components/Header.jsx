import DarkModeToggle from "./DarkModeToggle";

const Header = ({ isDarkMode, setIsDarkMode }) => (
  <header className="w-full p-4 text-blue-800  flex justify-between items-center">
    <h1 className="text-2xl font-bold">WEATHER-T🌏DAY</h1>
    <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  </header>
);

export default Header;


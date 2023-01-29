import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme-light");
  const toggleTheme = () => {
    setTheme(theme === "theme-light" ? "theme-dark" : "theme-light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

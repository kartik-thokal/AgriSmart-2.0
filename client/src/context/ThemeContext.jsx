import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // default LIGHT mode

  useEffect(() => {
  const root = document.documentElement;

  console.log("Dark mode state:", darkMode);

  if (darkMode) {
    root.classList.add("dark");
    console.log("Dark class added");
  } else {
    root.classList.remove("dark");
    console.log("Dark class removed");
  }
}, [darkMode]);


  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-3 top-3 bg-gray-700 text-lg p-2 rounded-md"
      >
        {theme === "dark" ? "🔦" : "🔮"}
      </button>
      <div className="font-inter bg:white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <Hero />
          <Services />
          <Works />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

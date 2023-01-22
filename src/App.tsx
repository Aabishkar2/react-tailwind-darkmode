import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [theme, setTheme] = useState("");
  // for dark mode
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme") as string);
    if (
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      theme === "dark"
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // toggle theme
  function toggleTheme() {
    if (theme === "light") {
      localStorage.setItem("theme", JSON.stringify("dark"));
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", JSON.stringify("light"));
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className="h-screen grid place-items-center bg-gray-100 dark:bg-slate-800">
      <div className="w-3/4 h-42 rounded-lg bg-cyan-300 dark:bg-cyan-900">
        <div className="p-5">
          <div className="heading-section flex flex-row">
            <h1 className="font-bold text-2xl antialiased tracking-wide dark:text-slate-200">
              Welcome
            </h1>
            <div className="theme-toggle ml-auto">
              <button
                className="theme-toggle dark:text-slate-200 text-xl"
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <FontAwesomeIcon icon={faSun} />
                ) : (
                  <FontAwesomeIcon icon={faMoon} />
                )}
              </button>
            </div>
          </div>
          <div className="content-section">
            <p className="pt-3 antialiased leading-8 dark:text-slate-200">
              This is the text dark mode using nextJs and tailwind, Its
              important to note that dark mode has become a popular feature in
              recent years as it helps reduce eye strain and improve
              accessibility. Implementing dark mode in a website can be done
              using different approaches, but using NextJs and Tailwind CSS
              makes it easy to switch between light and dark mode, providing a
              consistent and seamless experience for the users. By using
              Tailwinds predefined color classes, it is possible to quickly and
              easily style elements to match the dark mode theme. In addition,
              NextJs allows you to easily toggle between light and dark mode
              using browsers local storage or a users preference. This way,
              users can switch between the themes and have their preference
              remembered next time they visit the site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navItems = [
    { name: "Home", path: "/", icon: "ri-home-5-line" },
    { name: "Project", path: "/projects", icon: "ri-stack-line" },
    { name: "Blog", path: "/blog", icon: "ri-news-line" },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div
        className="flex items-center gap-1 p-2
        rounded-2xl border
        bg-white/80 dark:bg-[#1a1a1a]/80
        backdrop-blur-2xl
        border-white/20 dark:border-white/10
        shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
        dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
        transition-all duration-500"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group
              ${
                isActive
                  ? "text-blue-600 dark:text-white bg-blue-50/50 dark:bg-white/10"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-white/5"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i
                  className={`${item.icon} text-lg ${
                    isActive ? "scale-110" : "opacity-70"
                  }`}
                ></i>

                <span className="hidden sm:block">{item.name}</span>

                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-white rounded-full"></span>
                )}
              </>
            )}
          </NavLink>
        ))}

        <div className="w-[1px] h-6 mx-2 bg-gray-200 dark:bg-gray-800"></div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2.5 rounded-xl text-xl text-gray-500 dark:text-gray-400 
          hover:bg-gray-100 dark:hover:bg-white/5 transition-all
          active:scale-90"
        >
          <i className={isDark ? "ri-sun-line" : "ri-moon-line"}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

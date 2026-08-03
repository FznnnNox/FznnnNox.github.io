// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     const html = document.documentElement;

//     if (isDark) {
//       html.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       html.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDark]);

//   const navItems = [
//     { name: "Home", path: "/", icon: "ri-home-5-line" },
//     { name: "Project", path: "/projects", icon: "ri-stack-line" },
//     { name: "Blog", path: "/blog", icon: "ri-news-line" },
//   ];

//   return (
//     <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
//       <div
//         className="flex items-center gap-1 p-2
//         rounded-2xl border
//         bg-white/80 dark:bg-[#1a1a1a]/80
//         backdrop-blur-2xl
//         border-white/20 dark:border-white/10
//         shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
//         dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
//         transition-all duration-500"
//       >
//         {navItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             end={item.path === "/"}
//             className={({ isActive }) =>
//               `relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group
//               ${
//                 isActive
//                   ? "text-blue-600 dark:text-white bg-blue-50/50 dark:bg-white/10"
//                   : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-white/5"
//               }`
//             }
//           >
//             {({ isActive }) => (
//               <>
//                 <i
//                   className={`${item.icon} text-lg ${
//                     isActive ? "scale-110" : "opacity-70"
//                   }`}
//                 ></i>

//                 <span className="hidden sm:block">{item.name}</span>

//                 {isActive && (
//                   <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-white rounded-full"></span>
//                 )}
//               </>
//             )}
//           </NavLink>
//         ))}

//         <div className="w-[1px] h-6 mx-2 bg-gray-200 dark:bg-gray-800"></div>

//         <button
//           onClick={() => setIsDark(!isDark)}
//           className="p-2.5 rounded-xl text-xl text-gray-500 dark:text-gray-400 
//           hover:bg-gray-100 dark:hover:bg-white/5 transition-all
//           active:scale-90"
//         >
//           <i className={isDark ? "ri-sun-line" : "ri-moon-line"}></i>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#141414]/80 backdrop-blur-md px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-medium">
        
        {/* Status Pill Badge Left */}
        <div className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span className="text-gray-700 dark:text-zinc-300 text-[11px] sm:text-xs font-medium whitespace-nowrap">
            Available for New Project
          </span>
        </div>

        {/* Navigation Links Center (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 dark:text-zinc-400">
          <NavLink to="/projects" className="hover:text-black dark:hover:text-white transition-colors">
            Work <span className="text-xs text-gray-400 font-mono">[40]</span>
          </NavLink>
          <a href="#services" className="hover:text-black dark:hover:text-white transition-colors">
            Service <span className="text-xs text-gray-400 font-mono">[4]</span>
          </a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">
            Experience <span className="text-xs text-gray-400 font-mono">[3y+]</span>
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Action Buttons Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            <i className={isDark ? "ri-sun-line text-lg" : "ri-moon-line text-lg"}></i>
          </button>
          
          {/* CTA Button (Hidden on tiny screens, visible on sm+) */}
          <a
            href="#contact"
            className="hidden sm:flex px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-xs tracking-wide hover:opacity-90 transition-opacity items-center gap-1.5"
          >
            Let's Talk <span className="text-xs">↗</span>
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            <i className={isOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#141414]/95 backdrop-blur-lg border-b border-gray-100 dark:border-zinc-800 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible py-6 px-6" : "opacity-0 invisible max-h-0 py-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-5 text-base font-medium text-gray-700 dark:text-zinc-300">
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between hover:text-black dark:hover:text-white transition-colors py-1"
          >
            <span>Work</span>
            <span className="text-xs text-gray-400 font-mono">[40]</span>
          </NavLink>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between hover:text-black dark:hover:text-white transition-colors py-1"
          >
            <span>Service</span>
            <span className="text-xs text-gray-400 font-mono">[4]</span>
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between hover:text-black dark:hover:text-white transition-colors py-1"
          >
            <span>Experience</span>
            <span className="text-xs text-gray-400 font-mono">[3y+]</span>
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-black dark:hover:text-white transition-colors py-1"
          >
            Contact
          </a>

          {/* Mobile CTA Button */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center px-5 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-xs tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
          >
            Let's Talk <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
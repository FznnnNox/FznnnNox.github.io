import React, { useEffect, useRef } from "react";
import PasFoto from "../assets/uzan.png";
import Typed from "typed.js";

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Software Engineer", "Full-Stack Developer", "Web Architect"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    { name: "Dribbble", icon: "ri-dribbble-line", url: "#" },
    { name: "Instagram", icon: "ri-instagram-line", url: "#" },
    { name: "LinkedIn", icon: "ri-linkedin-fill", url: "#" },
    { name: "Behance", icon: "ri-behance-line", url: "#" },
  ];

  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#141414] text-black dark:text-white flex flex-col justify-between overflow-hidden">
      
      {/* 1. Teks Nama Raksasa (Background) */}
      <div className="w--mt-2 sm:mt-0 lg:mt-2 text-center z-0">
        <h1 className="text-[11vw] sm:text-[10vw] lg:text-[9.5vw] leading-none font-extrabold tracking-tighter uppercase select-none flex justify-center gap-2 sm:gap-3 w-full whitespace-nowrap">
          <span className="[-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#000] dark:[-webkit-text-stroke:1px_#fff]">
            AHMAD
          </span>
          <span className="text-black dark:text-white">
            FAUZAN
          </span>
        </h1>
      </div>

      {/* 2. Foto Profil Overlay */}
<div className="absolute left-1/2 -translate-x-1/2 top-[120px] sm:top-[150px] md:top-[170px] lg:top-[220px] pointer-events-none z-10 flex justify-center items-center w-full px-4">
  <img
    src={PasFoto}
    alt="Ahmad Fauzan"
    className="h-auto max-h-[220px] sm:max-h-[320px] md:max-h-[400px] lg:max-h-[400px] w-auto object-contain grayscale contrast-125 drop-shadow-2xl"
  />
</div>

      {/* 3. Grid Content Bagian Bawah */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end mt-12 md:mt-0 mb-4">
        
        {/* Kiri: Bio & CTA */}
        <div className="space-y-3 sm:space-y-4 max-w-sm text-left">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            <span ref={typedElement}>Software Engineer</span>
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Designing and building modern web applications that are clear, performant, and scale-focused.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Let's collaborate <span>↗</span>
          </a>
        </div>

        {/* Kanan: Social Links */}
        <div className="grid grid-cols-2 md:flex md:flex-col md:items-end gap-2.5 w-full">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="w-full md:w-44 px-4 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-gray-100 dark:hover:bg-zinc-800 text-xs font-medium text-gray-700 dark:text-zinc-300 flex items-center justify-center md:justify-start gap-3 transition-all backdrop-blur-sm"
            >
              <i className={`${item.icon} text-sm`}></i>
              <span>{item.name}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
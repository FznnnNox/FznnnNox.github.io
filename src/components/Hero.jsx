import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import PasFoto from "../assets/uzan.png";
import Optimus from "../assets/head-optimus.png";

const REVEAL_RADIUS = 90; 
const OPTIMUS_ZOOM = "50%"; 
const OPTIMUS_FOCUS = "center 10%";

const socialLinks = [
  { name: "Dribbble", icon: "ri-dribbble-line", url: "#" },
  { name: "Instagram", icon: "ri-instagram-line", url: "#" },
  { name: "LinkedIn", icon: "ri-linkedin-fill", url: "#" },
  { name: "Behance", icon: "ri-behance-line", url: "#" },
];

const Hero = () => {
  const typedElement = useRef(null);
  const photoRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      typedElement.current.textContent = "Full-Stack Web Developer";
      return;
    }

    const typed = new Typed(typedElement.current, {
      strings: ["Full-Stack Web Developer"],
      typeSpeed: 55,
      loop: false,
      showCursor: true,
      cursorChar: "_",
    });

    return () => typed.destroy();
  }, []);

  const handleMouseMove = (e) => {
    const rect = photoRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 px-5 sm:px-8 lg:px-12 bg-white dark:bg-[#121212] text-black dark:text-white flex flex-col justify-between overflow-hidden">

      {/* Name + photo */}
      <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center justify-center my-auto">

        <div className="w-full text-center z-0 select-none">
          <h1 className="text-[clamp(2.25rem,10vw,7rem)] leading-[1.05] font-medium tracking-tight text-neutral-700/90 dark:text-neutral-300/90 flex flex-wrap justify-center gap-x-3 sm:gap-x-5 w-full">
            <span>Ahmad</span>
            <span>Fauzan</span>
          </h1>
        </div>

        <div className="relative z-10 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
          {/* Bungkus foto: inline-block supaya ukurannya persis sebesar foto,
              bukan melebar ke seluruh baris (penting untuk akurasi lingkaran hover). */}
          <div
            ref={photoRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsHovering(false)}
            className="relative inline-block h-[180px] sm:h-[260px] md:h-[340px] lg:h-[400px] cursor-none"
          >
            {/* Foto asli, selalu terlihat */}
            <img
              src={PasFoto}
              alt="Ahmad Fauzan"
              className="block h-full w-auto object-contain grayscale select-none"
            />

            {/* Optimus, hanya terlihat lewat lingkaran di posisi kursor */}
            <div
              className="absolute inset-0 transition-opacity duration-150 rounded-2xl"
              style={{
                opacity: isHovering ? 1 : 0,
                backgroundImage: `url(${Optimus})`,
                backgroundSize: OPTIMUS_ZOOM,
                backgroundPosition: OPTIMUS_FOCUS,
                backgroundRepeat: "no-repeat",
                clipPath: `circle(${REVEAL_RADIUS}px at ${cursor.x}px ${cursor.y}px)`,
              }}
            />

            {/* Cincin tipis mengikuti kursor */}
            {isHovering && (
              <div
                className="absolute rounded-full border-2 border-[#fff]/80 pointer-events-none"
                style={{
                  width: REVEAL_RADIUS * 2,
                  height: REVEAL_RADIUS * 2,
                  left: cursor.x - REVEAL_RADIUS,
                  top: cursor.y - REVEAL_RADIUS,
                }}
              />
            )}
          </div>

          <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white dark:bg-[#121212] border border-black/15 dark:border-white/15 rounded-full pl-1.5 pr-3 py-1.5 flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono text-gray-600 dark:text-zinc-400 whitespace-nowrap">
              open to work
            </span>
          </div>
        </div>
      </div>

      {/* Bio, CTA, socials */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10 md:mt-0">

        <div className="w-full sm:max-w-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight font-mono">
            <span ref={typedElement} />
          </h2>
          <p className="max-w-[34ch] text-sm leading-relaxed text-gray-600 dark:text-zinc-400">
            Designing and building modern web applications that are clear,
            performant, and scale-focused.
          </p>
          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center px-5 py-3 sm:py-2.5 border border-black dark:border-white rounded-md text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D57]"
          >
            Let's collaborate
          </a>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-col md:items-end gap-2.5 w-full sm:w-auto">
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
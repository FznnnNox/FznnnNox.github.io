import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedElement = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Frontend Developer", "Backend Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1200,
      loop: true,
      showCursor: false,
    });

    const createStar = () => {
      if (!heroRef.current) return;

      const star = document.createElement("div");
      star.classList.add("star");

      const stars = ["✦", "✧", "★", "•"];
      star.innerText = stars[Math.floor(Math.random() * stars.length)];

      const size = Math.random() * 15 + 5;
      star.style.fontSize = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 5 + 5}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;

      heroRef.current.appendChild(star);

      setTimeout(() => star.remove(), 10000);
    };

    const interval = setInterval(createStar, 500);

    return () => {
      typed.destroy();
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-32 overflow-hidden
             bg-white dark:bg-[#141414]
             transition-colors duration-500"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br
             from-purple-500/10
             via-transparent
             to-blue-500/10
             dark:from-purple-500/5
             dark:via-transparent
             dark:to-blue-500/5"
      ></div>

      {/* Glow Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[160px] -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[140px] bottom-0 right-0"></div>

      <p class="hello-wave text-gray-400 mb-6">Hello, I'm</p>

      <h1
        ref={heroRef}
        className="relative z-10 text-4xl sm:text-6xl md:text-8xl 
             font-semibold tracking-tight leading-[1.05]
             transition-transform duration-200 ease-out
             will-change-transform"
      >
        <span className="relative inline-block overflow-hidden">
          {/* Soft Glow Light */}
          <span
            className="absolute inset-0 
                 bg-gradient-to-r 
                 from-blue-400 via-purple-400 to-blue-400
                 bg-clip-text text-transparent
                 opacity-30 blur-[8px]
                 pointer-events-none"
          >
            Ahmad Fauzan
          </span>

          {/* Main Gradient Text */}
          <span
            className="relative z-10 
                 bg-gradient-to-r
                 from-gray-900 via-gray-700 to-gray-500
                 dark:from-white dark:via-blue-200 dark:to-purple-300
                 bg-clip-text text-transparent"
          >
            Ahmad <span className="font-light">Fauzan</span>
          </span>

          {/* Slide Cover Animation */}
          <span
            className="absolute top-0 left-0 w-full h-full 
             bg-gradient-to-r
             from-gray-300/70 via-gray-200/40 to-transparent
             dark:from-gray-200/60 dark:via-gray-100/30
             animate-slideCover z-20"
          ></span>
        </span>
      </h1>

      {/* Typed */}
      <div className="mt-6 text-lg md:text-2xl text-gray-500 dark:text-gray-400 font-light tracking-wide">
        <span className="mr-2">I build</span>

        <span
          ref={typedElement}
          className="relative font-semibold text-black dark:text-white typed-elegant"
        ></span>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-6 z-10">
        <a
          href="#"
          className="relative overflow-hidden px-8 py-3 rounded-full font-medium
               border border-gray-400
               text-gray-700 dark:text-gray-300
               transition-all duration-300 hover:scale-105
               group"
        >
          <span className="relative z-10">View My Work</span>
          <span className="slash-effect"></span>
        </a>

        <a
          href="#"
          className="relative overflow-hidden px-8 py-3 rounded-full font-medium
               border border-gray-400
               text-gray-700 dark:text-gray-300
               transition-all duration-300 hover:scale-105
               group"
        >
          <span className="relative z-10">✉ Get In Touch</span>
          <span className="slash-effect"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

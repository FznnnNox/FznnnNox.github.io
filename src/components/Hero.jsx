// import React, { useEffect, useRef } from "react";
// import Typed from "typed.js";

// const Hero = () => {
//   const typedElement = useRef(null);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedElement.current, {
//       strings: ["Frontend Developer", "Backend Developer"],
//       typeSpeed: 80,
//       backSpeed: 50,
//       backDelay: 1200,
//       loop: true,
//       showCursor: false,
//     });

//     const createStar = () => {
//       if (!heroRef.current) return;

//       const star = document.createElement("div");
//       star.classList.add("star");

//       const stars = ["✦", "✧", "★", "•"];
//       star.innerText = stars[Math.floor(Math.random() * stars.length)];

//       const size = Math.random() * 15 + 5;
//       star.style.fontSize = `${size}px`;
//       star.style.left = `${Math.random() * 100}%`;
//       star.style.animationDuration = `${Math.random() * 5 + 5}s`;
//       star.style.animationDelay = `${Math.random() * 2}s`;

//       heroRef.current.appendChild(star);

//       setTimeout(() => star.remove(), 10000);
//     };

//     const interval = setInterval(createStar, 500);

//     return () => {
//       typed.destroy();
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-32 overflow-hidden
//              bg-white dark:bg-[#141414]
//              transition-colors duration-500"
//     >
//       <div
//         className="absolute inset-0 bg-gradient-to-br
//              from-purple-500/10
//              via-transparent
//              to-blue-500/10
//              dark:from-purple-500/5
//              dark:via-transparent
//              dark:to-blue-500/5"
//       ></div>

//       {/* Glow Orbs */}
//       <div className="absolute w-[600px] h-[600px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[160px] -top-40 -left-40"></div>
//       <div className="absolute w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[140px] bottom-0 right-0"></div>

//       <p class="hello-wave text-gray-400 mb-6">Hello, I'm</p>

//       <h1
//         ref={heroRef}
//         className="relative z-10 text-4xl sm:text-6xl md:text-8xl 
//              font-semibold tracking-tight leading-[1.05]
//              transition-transform duration-200 ease-out
//              will-change-transform"
//       >
//         <span className="relative inline-block overflow-hidden">
//           {/* Soft Glow Light */}
//           <span
//             className="absolute inset-0 
//                  bg-gradient-to-r 
//                  from-blue-400 via-purple-400 to-blue-400
//                  bg-clip-text text-transparent
//                  opacity-30 blur-[8px]
//                  pointer-events-none"
//           >
//             Ahmad Fauzan
//           </span>

//           {/* Main Gradient Text */}
//           <span
//             className="relative z-10 
//                  bg-gradient-to-r
//                  from-gray-900 via-gray-700 to-gray-500
//                  dark:from-white dark:via-blue-200 dark:to-purple-300
//                  bg-clip-text text-transparent"
//           >
//             Ahmad <span className="font-light">Fauzan</span>
//           </span>

//           {/* Slide Cover Animation */}
//           <span
//             className="absolute top-0 left-0 w-full h-full 
//              bg-gradient-to-r
//              from-gray-300/70 via-gray-200/40 to-transparent
//              dark:from-gray-200/60 dark:via-gray-100/30
//              animate-slideCover z-20"
//           ></span>
//         </span>
//       </h1>

//       {/* Typed */}
//       <div className="mt-6 text-lg md:text-2xl text-gray-500 dark:text-gray-400 font-light tracking-wide">
//         <span className="mr-2">I build</span>

//         <span
//           ref={typedElement}
//           className="relative font-semibold text-black dark:text-white typed-elegant"
//         ></span>
//       </div>

//       {/* Buttons */}
//       <div className="mt-10 flex flex-col sm:flex-row gap-6 z-10">
//         <a
//           href="#"
//           className="relative overflow-hidden px-8 py-3 rounded-full font-medium
//                border border-gray-400
//                text-gray-700 dark:text-gray-300
//                transition-all duration-300 hover:scale-105
//                group"
//         >
//           <span className="relative z-10">View My Work</span>
//           <span className="slash-effect"></span>
//         </a>

//         <a
//           href="#"
//           className="relative overflow-hidden px-8 py-3 rounded-full font-medium
//                border border-gray-400
//                text-gray-700 dark:text-gray-300
//                transition-all duration-300 hover:scale-105
//                group"
//         >
//           <span className="relative z-10">✉ Get In Touch</span>
//           <span className="slash-effect"></span>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useRef } from "react";
import PasFoto from "../assets/zan.jpeg"
import Typed from "typed.js";

const Hero = () => {
  const typedElement = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["things for the web.", "full-stack solutions.", "interactive experiences."],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 pt-28 pb-20 overflow-hidden bg-[#fbfbfb] dark:bg-[#141414] transition-colors duration-500"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-12 left-12 w-4 h-4 border border-gray-300 dark:border-gray-800 rotate-45 pointer-events-none"></div>
      <div className="absolute bottom-24 right-16 w-8 h-8 border border-gray-200 dark:border-gray-900 rounded-full pointer-events-none"></div>
      
      {/* Container Utama Bento Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 z-10 items-stretch">
        
        {/* KOTAK 1: Profil Utama (Makan tempat 2 Kolom di Desktop) */}
        <div className="lg:col-span-2 bg-[#1e1e1e] text-white rounded-[2rem] p-8 sm:p-12 flex flex-col justify-between shadow-xl relative overflow-hidden group">
          {/* Subtle Background Glow */}
          <div className="absolute -inset-px bg-gradient-to-br from-zinc-700/20 via-transparent to-transparent rounded-[2rem] pointer-events-none" />
          
          <div>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800 border border-zinc-700/50 text-xs font-medium text-gray-300 mb-8 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              available for work
            </div>

            {/* Nama Besar */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-none mb-6">
              Ahmad Fauzan
            </h1>

            {/* Deskripsi & Typed.js */}
            <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
              building <span ref={typedElement} className="text-white font-normal"></span>
              <br />a student who codes, competes, and creates.
            </p>
          </div>

          {/* Aksi / Tombol */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] shadow-sm"
            >
              <span>✉</span> say hello
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-[1.02] border border-zinc-700"
            >
              <span>➔</span> github
            </a>
          </div>
        </div>

        {/* KOLOM KANAN (Tumpukan Vertikal) */}
        <div className="flex flex-col gap-6">
          
          {/* KOTAK 2: Frame Foto Minimalis */}
          <div className="bg-white dark:bg-[#161616] border border-gray-200/60 dark:border-zinc-800/80 rounded-[2rem] p-4 flex items-center justify-center shadow-md relative overflow-hidden h-[220px] group">
  <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-gray-100 dark:bg-zinc-900">
    {/* Menggunakan group-hover untuk mengembalikan warna asli saat hover */}
    <img 
      src={PasFoto}
      alt="Ahmad Fauzan" 
      className="w-full h-full object-cover grayscale contrast-115 brightness-95 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
    />
    {/* Overlay Efek Cetak Elegan */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent mix-blend-multiply"></div>
  </div>
</div>

          {/* KOTAK 3: Lokasi / Detail Informasi */}
          <div className="bg-white dark:bg-[#161616] border border-gray-200/60 dark:border-zinc-800/80 rounded-[2rem] p-8 flex flex-col justify-between shadow-md relative min-h-[160px]">
            <div>
              <span className="text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">Based in</span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-zinc-200">Serang, Indonesia</h3>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs px-3 py-1 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 font-mono">
                idn • gmt+7
              </span>
              {/* Dekorasi Icon Pin Lokasi Transparan */}
              <span className="text-3xl opacity-10 dark:opacity-20 pointer-events-none select-none">📍</span>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Navigasi Kecil di Bagian Bawah */}
      <div className="w-full max-w-6xl flex justify-between items-center mt-12 px-4 text-xs text-gray-400 dark:text-zinc-500 z-10">
        <div className="flex items-center gap-1.5 animate-bounce">
          <span>↓</span> scroll for
        </div>
        <a href="#about" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
          more about me <span>↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
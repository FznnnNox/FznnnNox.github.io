// import React, { useEffect, useRef } from "react";
// import PasFoto from "../assets/zan.jpeg"
// import Typed from "typed.js";

// const Hero = () => {
//   const typedElement = useRef(null);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedElement.current, {
//       strings: ["things for the web.", "full-stack solutions.", "interactive experiences."],
//       typeSpeed: 60,
//       backSpeed: 40,
//       backDelay: 1500,
//       loop: true,
//       showCursor: true,
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 pt-28 pb-20 overflow-hidden bg-[#fbfbfb] dark:bg-[#141414] transition-colors duration-500"
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute top-12 left-12 w-4 h-4 border border-gray-300 dark:border-gray-800 rotate-45 pointer-events-none"></div>
//       <div className="absolute bottom-24 right-16 w-8 h-8 border border-gray-200 dark:border-gray-900 rounded-full pointer-events-none"></div>
      
//       {/* Container Utama Bento Grid */}
//       <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 z-10 items-stretch">
        
//         {/* KOTAK 1: Profil Utama (Makan tempat 2 Kolom di Desktop) */}
//         <div className="lg:col-span-2 bg-[#1e1e1e] text-white rounded-[2rem] p-8 sm:p-12 flex flex-col justify-between shadow-xl relative overflow-hidden group">
//           {/* Subtle Background Glow */}
//           <div className="absolute -inset-px bg-gradient-to-br from-zinc-700/20 via-transparent to-transparent rounded-[2rem] pointer-events-none" />
          
//           <div>
//             {/* Status Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800 border border-zinc-700/50 text-xs font-medium text-gray-300 mb-8 w-fit">
//               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//               available for work
//             </div>

//             {/* Nama Besar */}
//             <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-none mb-6">
//               Ahmad Fauzan
//             </h1>

//             {/* Deskripsi & Typed.js */}
//             <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
//               building <span ref={typedElement} className="text-white font-normal"></span>
//               <br />a student who codes, competes, and creates.
//             </p>
//           </div>

//           {/* Aksi / Tombol */}
//           <div className="mt-12 flex flex-wrap gap-4">
//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] shadow-sm"
//             >
//               <span>✉</span> say hello
//             </a>
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-[1.02] border border-zinc-700"
//             >
//               <span>➔</span> github
//             </a>
//           </div>
//         </div>

//         {/* KOLOM KANAN (Tumpukan Vertikal) */}
//         <div className="flex flex-col gap-6">
          
//           {/* KOTAK 2: Frame Foto Minimalis */}
//           <div className="bg-white dark:bg-[#161616] border border-gray-200/60 dark:border-zinc-800/80 rounded-[2rem] p-4 flex items-center justify-center shadow-md relative overflow-hidden h-[220px] group">
//   <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-gray-100 dark:bg-zinc-900">
//     {/* Menggunakan group-hover untuk mengembalikan warna asli saat hover */}
//     <img 
//       src={PasFoto}
//       alt="Ahmad Fauzan" 
//       className="w-full h-full object-cover grayscale contrast-115 brightness-95 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
//     />
//     {/* Overlay Efek Cetak Elegan */}
//     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent mix-blend-multiply"></div>
//   </div>
// </div>

//           {/* KOTAK 3: Lokasi / Detail Informasi */}
//           <div className="bg-white dark:bg-[#161616] border border-gray-200/60 dark:border-zinc-800/80 rounded-[2rem] p-8 flex flex-col justify-between shadow-md relative min-h-[160px]">
//             <div>
//               <span className="text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">Based in</span>
//               <h3 className="text-xl font-semibold text-gray-800 dark:text-zinc-200">Serang, Indonesia</h3>
//             </div>
            
//             <div className="flex items-center justify-between mt-4">
//               <span className="text-xs px-3 py-1 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 font-mono">
//                 idn • gmt+7
//               </span>
//               {/* Dekorasi Icon Pin Lokasi Transparan */}
//               <span className="text-3xl opacity-10 dark:opacity-20 pointer-events-none select-none">📍</span>
//             </div>
//           </div>

//         </div>

//       </div>

//       {/* Footer Navigasi Kecil di Bagian Bawah */}
//       <div className="w-full max-w-6xl flex justify-between items-center mt-12 px-4 text-xs text-gray-400 dark:text-zinc-500 z-10">
//         <div className="flex items-center gap-1.5 animate-bounce">
//           <span>↓</span> scroll for
//         </div>
//         <a href="#about" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
//           more about me <span>↓</span>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// import React, { useEffect, useRef } from "react";
// import PasFoto from "../assets/uzan.png";
// import Typed from "typed.js";

// const Hero = () => {
//   const typedElement = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedElement.current, {
//       strings: ["Software Engineer", "Full-Stack Developer", "Web Architect"],
//       typeSpeed: 60,
//       backSpeed: 40,
//       backDelay: 1800,
//       loop: true,
//       showCursor: false,
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   const socialLinks = [
//     { name: "Dribbble", icon: "ri-dribbble-line", url: "#" },
//     { name: "Instagram", icon: "ri-instagram-line", url: "#" },
//     { name: "LinkedIn", icon: "ri-linkedin-fill", url: "#" },
//     { name: "Behance", icon: "ri-behance-line", url: "#" },
//   ];

//   return (
//     <section className="relative min-h-screen pt-32 pb-12 px-6 lg:px-12 bg-white dark:bg-[#141414] text-black dark:text-white flex flex-col justify-between overflow-hidden">
      
//       {/* 1. Teks Nama Raksasa (Di latar belakang) */}
//       <div className="w-full mt-8 text-center z-0">
//         <h1 className="text-[9.5vw] leading-none font-extrabold tracking-tighter uppercase select-none flex justify-center gap-3 w-full whitespace-nowrap">
//           <span className="[-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#000] dark:[-webkit-text-stroke:1px_#fff]">
//             AHMAD
//           </span>
//           <span className="text-black dark:text-white">
//             FAUZAN
//           </span>
//         </h1>
//       </div>

//       {/* 2. Foto Profil Overlay (Posisi Bebas Berbasis Section) */}
//       <div className="absolute left-1/2 -translate-x-1/2 top-[120px] sm:top-[190px] lg:top-[220px] pointer-events-none z-10 flex justify-center items-center">
//         <img
//           src={PasFoto}
//           alt="Ahmad Fauzan"
//           className="h-auto w-auto object-contain grayscale contrast-125 drop-shadow-2xl"
//         />
//       </div>

//       {/* 3. Grid Content Bagian Bawah */}
//       <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-4">
        
//         {/* Kiri: Bio & CTA */}
//         <div className="space-y-4 max-w-sm">
//           <h2 className="text-2xl font-bold tracking-tight">
//             <span ref={typedElement}>Software Engineer</span>
//           </h2>
//           <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
//             Designing and building modern web applications that are clear, performant, and scale-focused.
//           </p>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity"
//           >
//             Let's collaborate <span>↗</span>
//           </a>
//         </div>

//         {/* Kanan: Social Links */}
//         <div className="flex flex-col md:items-end gap-2.5">
//           {socialLinks.map((item) => (
//             <a
//               key={item.name}
//               href={item.url}
//               className="w-full md:w-44 px-4 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-gray-100 dark:hover:bg-zinc-800 text-xs font-medium text-gray-700 dark:text-zinc-300 flex items-center gap-3 transition-all"
//             >
//               <i className={`${item.icon} text-sm`}></i>
//               <span>{item.name}</span>
//             </a>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

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
      <div className="w-full mt-4 sm:mt-6 lg:mt-8 text-center z-0">
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
      <div className="absolute left-1/2 -translate-x-1/2 top-[95px] sm:top-[140px] md:top-[170px] lg:top-[220px] pointer-events-none z-10 flex justify-center items-center w-full px-4">
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
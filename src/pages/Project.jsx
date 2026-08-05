// import React, { useState } from "react";
// import Footer from "../components/Footer";

// import p01 from "../assets/p-01.png";
// import p03 from "../assets/p-03.png";
// import p04 from "../assets/p-04.png";
// import p05 from "../assets/p-05.png";
// import p06 from "../assets/p-06.png";
// import p10 from "../assets/p-10.png";
// import p11 from "../assets/p-11.png";
// import p12 from "../assets/p-12.png";
// import p13 from "../assets/p-13.png";

// const Project = () => {
//   const [filter, setFilter] = useState("all");

//   const projectsData = [
//     {
//       id: 1,
//       title: "E-Market Vegetables",
//       desc: "Market Vegetables menyediakan berbagai pilihan sayuran dan buah segar dengan tampilan menarik.",
//       tags: ["html", "css", "javascript"],
//       img: p01,
//       live: "#",
//       code: "#",
//     },
//     {
//       id: 2,
//       title: "SnapBook",
//       desc: "Buku Tamu digital ini memudahkan proses pencatatan dan meningkatkan keamanan data kunjungan.",
//       tags: ["laravel", "tailwind", "javascript", "mysql"],
//       img: p03,
//       live: "#",
//       code: "#",
//     },
//     {
//       id: 3,
//       title: "AdoptMe",
//       desc: "Adopt Pet adalah platform adopsi hewan peliharaan yang mempertemukan kucing dan anjing lucu.",
//       tags: ["html", "css", "javascript"],
//       img: p04,
//       live: "#",
//       code: "#",
//     },
//     {
//       id: 4,
//       title: "ZannPlant",
//       desc: "GreenStore adalah toko tanaman online yang menyediakan berbagai macam tanaman hias.",
//       tags: ["laravel", "css", "javascript", "mysql"],
//       img: p05,
//       live: "#",
//       code: "#",
//     },
//     {
//       id: 5,
//       title: "AuraNet",
//       desc: "Login Voucher",
//       tags: ["html", "css", "javascript"],
//       img: p13,
//       live: "#",
//       code: "#",
//     },
//     {
//       id: 6,
//       title: "ArepLungeu",
//       desc: "Aplikasi untuk membuat surat perjalanan dinas yang termonitoring.",
//       tags: ["laravel", "bootstrap", "mysql"],
//       img: p06,
//       live: "#",
//       code: "#",
//     },
//     {
//       id: 7,
//       title: "Todo List",
//       desc: "Aplikasi produktivitas untuk mengelola tugas harian, mengatur prioritas, dan memantau progres aktivitas secara efisien.",
//       tags: ["react", "tailwind"],
//       img: p12,
//       live: "#",
//       code: "#",
//     },
//     {
//       id: 8,
//       title: "Website Fakultas",
//       desc: "Pusat informasi akademik terintegrasi yang menyajikan profil fakultas, berita kampus, dan layanan mahasiswa dengan antarmuka modern.",
//       tags: ["react", "tailwind", "mysql", "filament", "laravel"],
//       img: p10,
//       live: "#",
//       code: "#",
//     },
//     {
//       id: 9,
//       title: "ParkFlow",
//       desc: "Website sistem parkir",
//       tags: ["laravel", "filament", "tailwind", "javascript", "mysql"],
//       img: p11,
//       live: "#",
//       code: "#",
//     },
//   ];

//   const filterButtons = [
//     { name: "All", slug: "all", icon: "ri-layout-grid-line" },
//     { name: "HTML", slug: "html", icon: "ri-html5-fill" },
//     { name: "CSS", slug: "css", icon: "ri-css3-fill" },
//     { name: "Javascript", slug: "javascript", icon: "ri-javascript-fill" },
//     { name: "React", slug: "react", icon: "ri-reactjs-fill" },
//     { name: "Laravel", slug: "laravel", icon: "fa-brands fa-laravel" },
//     {
//       name: "Filament",
//       slug: "filament",
//       icon: (
//         <span className="text-[11px] italic font-bold tracking-tight lowercase">
//           filament
//         </span>
//       ),
//     },
//     { name: "Tailwind CSS", slug: "tailwind", icon: "ri-tailwind-css-fill" },
//     { name: "MySQL", slug: "mysql", icon: "ri-database-2-fill" },
//     { name: "PHP", slug: "php", icon: "ri-php-line" },
//     { name: "Bootstrap", slug: "bootstrap", icon: "ri-bootstrap-fill" },
//   ];

//   const sortedData = [...projectsData].sort((a, b) => b.id - a.id);

//   const filteredProjects =
//     filter === "all"
//       ? sortedData
//       : sortedData.filter((p) => p.tags.includes(filter));

//   return (
//     <div className="bg-white text-black dark:bg-[#141414] dark:text-white min-h-screen transition-colors duration-300">
//       <style>{`
//         .full-slash {
//           position: relative;
//           overflow: hidden;
//         }
//         .full-slash::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -150%;
//           width: 50%;
//           height: 100%;
//           background: linear-gradient(
//             120deg, 
//             transparent, 
//             rgba(255, 255, 255, 0.3), 
//             transparent
//           );
//           transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
//           z-index: 40;
//           pointer-events: none;
//           transform: skewX(-25deg);
//         }
//         .group:hover .full-slash::before {
//           left: 150%;
//         }
//       `}</style>

//       {/* Header Section */}
//       <section className="py-16 sm:py-20 px-4 sm:px-6 text-center">
//         <h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
//         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
//           A collection of projects showcasing my expertise in web development
//           and software engineering.
//         </p>

//         {/* Filter Buttons */}
//         <div className="mt-10 max-w-5xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
//             {filterButtons.map((btn) => (
//               <button
//                 key={btn.slug}
//                 onClick={() => setFilter(btn.slug)}
//                 className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 border
//                   ${filter === btn.slug
//                     ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-md"
//                     : "bg-transparent border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500"
//                   }`}
//               >
//                 {typeof btn.icon === "string" ? (
//                   <i className={btn.icon}></i>
//                 ) : (
//                   btn.icon
//                 )}
//                 {btn.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="px-4 sm:px-6 pb-20">
//         <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="group relative bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-500"
//             >
//               <div className="full-slash h-full w-full flex flex-col">
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden aspect-video">
//                   <img
//                     src={project.img}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//                   />

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] bg-black/40 flex items-center justify-center gap-4 z-20">
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors"
//                     >
//                       <i className="ri-external-link-line"></i> LIVE
//                     </a>
//                     <a
//                       href={project.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-transparent text-white border border-white/50 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
//                     >
//                       <i className="ri-github-line"></i> CODE
//                     </a>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-5 flex-grow flex flex-col">
//                   <h3 className="font-semibold text-lg mb-2 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">
//                     {project.desc}
//                   </p>

//                   <div className="mt-auto flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-2 py-1 text-[9px] uppercase tracking-tighter font-bold rounded-xl bg-gray-300 dark:bg-[#262626] text-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredProjects.length === 0 && (
//           <div className="text-center py-20">
//             <i className="ri-folder-open-line text-4xl text-gray-300"></i>
//             <p className="mt-4 text-gray-500">
//               No projects found for this category.
//             </p>
//           </div>
//         )}
//       </section>

//       {/* MORE PROJECTS CTA */}
//       <section className="px-4 sm:px-6 pb-24">
//         <div className="max-w-6xl mx-auto">
//           <div className="border-t border-gray-200 dark:border-gray-800 pt-16 text-left">

//             <p className="text-gray-400 text-sm mb-3 tracking-wide">
//               want to see more?
//             </p>

//             <a
//               href="https://github.com/FznnnNox"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group inline-flex items-center gap-2 text-xl font-semibold hover:text-blue-500 transition-colors"
//             >
//               visit my github
//               <span className="transition-transform duration-300 group-hover:translate-x-2">
//                 →
//               </span>
//             </a>

//           </div>
//         </div>
//       </section>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Project;
import React, { useState } from "react";
import Footer from "../components/Footer";

import p01 from "../assets/p-01.png";
import p03 from "../assets/p-03.png";
import p04 from "../assets/p-04.png";
import p05 from "../assets/p-05.png";
import p06 from "../assets/p-06.png";
import p10 from "../assets/p-10.png";
import p11 from "../assets/p-11.png";
import p12 from "../assets/p-12.png";
import p13 from "../assets/p-13.png";

const Project = () => {
  const [filter, setFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      title: "E-Market Vegetables",
      desc: "Platform toko online sayur dan buah segar yang memudahkan konsumen memilih produk berkualitas tinggi dengan katalog interaktif dan antarmuka yang bersih.",
      tags: ["html", "css", "javascript"],
      img: p01,
      live: "#",
      code: "#",
    },
    {
      id: 2,
      title: "SnapBook",
      desc: "Sistem buku tamu digital berbasis web untuk mencatat data pengunjung secara efisien, terstruktur, serta dilengkapi dengan manajemen direktori data kunjungan.",
      tags: ["laravel", "tailwind", "javascript", "mysql"],
      img: p03,
      live: "#",
      code: "#",
    },
    {
      id: 3,
      title: "AdoptMe",
      desc: "Platform adopsi hewan peliharaan interaktif yang menghubungkan calon pemilik dengan hewan terlantar seperti kucing dan anjing melalui direktori profil hewan.",
      tags: ["html", "css", "javascript"],
      img: p04,
      live: "#",
      code: "#",
    },
    {
      id: 4,
      title: "ZannPlant",
      desc: "Website toko tanaman hias online (GreenStore) yang menyajikan katalog koleksi tanaman lengkap, panduan perawatan, dan navigasi pemesanan yang responsif.",
      tags: ["laravel", "css", "javascript", "mysql"],
      img: p05,
      live: "#",
      code: "#",
    },
    {
      id: 5,
      title: "AuraNet",
      desc: "Halaman captive portal login voucher Wi-Fi interaktif untuk manajemen autentikasi akses internet pengguna secara dinamis dan aman.",
      tags: ["html", "css", "javascript"],
      img: p13,
      live: "#",
      code: "#",
    },
    {
      id: 6,
      title: "ArepLungeu",
      desc: "Sistem informasi manajemen surat perjalanan dinas (SPPD) untuk pembuatan, pengarsipan, dan pemantauan status persetujuan dokumen dinas secara terpusat.",
      tags: ["laravel", "bootstrap", "mysql"],
      img: p06,
      live: "#",
      code: "#",
    },
    {
      id: 7,
      title: "Todo List",
      desc: "Aplikasi produktivitas berbasis React untuk mengelola tugas harian, mengatur tingkat prioritas, serta memantau status penyelesaian aktivitas secara interaktif.",
      tags: ["react", "tailwind"],
      img: p12,
      live: "#",
      code: "#",
    },
    {
      id: 8,
      title: "Website Fakultas",
      desc: "Pusat informasi akademik terintegrasi yang menyajikan profil fakultas, portal berita kampus, program studi, dan layanan mahasiswa dengan dasbor Filament Admin.",
      tags: ["react", "tailwind", "mysql", "filament", "laravel"],
      img: p10,
      live: "#",
      code: "#",
    },
    {
      id: 9,
      title: "ParkFlow",
      desc: "Sistem manajemen parkir cerdas berbasis web untuk mencatat alur keluar-masuk kendaraan, pemindaian tiket, pemantauan slot parkir, dan rekapitulasi data petugas.",
      tags: ["laravel", "filament", "tailwind", "javascript", "mysql"],
      img: p11,
      live: "#",
      code: "#",
    },
  ];

  const filterButtons = [
    { name: "All", slug: "all", icon: "ri-layout-grid-line" },
    { name: "HTML", slug: "html", icon: "ri-html5-fill" },
    { name: "CSS", slug: "css", icon: "ri-css3-fill" },
    { name: "Javascript", slug: "javascript", icon: "ri-javascript-fill" },
    { name: "React", slug: "react", icon: "ri-reactjs-fill" },
    { name: "Laravel", slug: "laravel", icon: "fa-brands fa-laravel" },
    {
      name: "Filament",
      slug: "filament",
      icon: (
        <span className="text-[11px] italic font-bold tracking-tight lowercase">
          filament
        </span>
      ),
    },
    { name: "Tailwind CSS", slug: "tailwind", icon: "ri-tailwind-css-fill" },
    { name: "MySQL", slug: "mysql", icon: "ri-database-2-fill" },
    { name: "PHP", slug: "php", icon: "ri-php-line" },
    { name: "Bootstrap", slug: "bootstrap", icon: "ri-bootstrap-fill" },
  ];

  const sortedData = [...projectsData].sort((a, b) => b.id - a.id);

  const filteredProjects =
    filter === "all"
      ? sortedData
      : sortedData.filter((p) => p.tags.includes(filter));

  return (
    <div className="bg-white text-black dark:bg-[#141414] dark:text-white min-h-screen transition-colors duration-300">
      <style>{`
        .full-slash {
          position: relative;
          overflow: hidden;
        }
        .full-slash::before {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent
          );
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 40;
          pointer-events: none;
          transform: skewX(-25deg);
        }
        .group:hover .full-slash::before {
          left: 150%;
        }
      `}</style>

      {/* Header Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of projects showcasing my expertise in web development
          and software engineering.
        </p>

        {/* Filter Buttons */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {filterButtons.map((btn) => (
              <button
                key={btn.slug}
                onClick={() => setFilter(btn.slug)}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 border
                  ${
                    filter === btn.slug
                      ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-md"
                      : "bg-transparent border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500"
                  }`}
              >
                {typeof btn.icon === "string" ? (
                  <i className={btn.icon}></i>
                ) : (
                  btn.icon
                )}
                {btn.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 pb-20">
        {/* Diubah menjadi 3 kolom di layar sedang/besar (md:grid-cols-3) dan max-w-6xl */}
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-500 hover:border-gray-400 dark:hover:border-gray-700"
            >
              <div className="full-slash h-full w-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] bg-black/40 flex items-center justify-center gap-3 z-20">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-3 py-1.5 rounded-md text-[11px] font-bold flex items-center gap-1.5 hover:bg-gray-200 transition-colors"
                    >
                      <i className="ri-external-link-line"></i> LIVE
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent text-white border border-white/50 px-3 py-1.5 rounded-md text-[11px] font-bold flex items-center gap-1.5 hover:bg-white/10 transition-colors"
                    >
                      <i className="ri-github-line"></i> CODE
                    </a>
                  </div>
                </div>

                {/* Content Section dengan padding lebih kecil (p-4) & ukuran font ringkas (text-xs) */}
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-semibold text-base mb-1.5 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[9px] uppercase tracking-tighter font-bold rounded-lg bg-gray-100 dark:bg-[#262626] text-gray-700 dark:text-gray-400 border border-gray-200 dark:border-gray-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <i className="ri-folder-open-line text-4xl text-gray-300"></i>
            <p className="mt-4 text-gray-500">
              No projects found for this category.
            </p>
          </div>
        )}
      </section>

      {/* MORE PROJECTS CTA */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-200 dark:border-gray-800 pt-16 text-left">
            <p className="text-gray-400 text-sm mb-3 tracking-wide">
              want to see more?
            </p>

            <a
              href="https://github.com/FznnnNox"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xl font-semibold hover:text-blue-500 transition-colors"
            >
              visit my github
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <Footer />
      </div>
    </div>
  );
};

export default Project;
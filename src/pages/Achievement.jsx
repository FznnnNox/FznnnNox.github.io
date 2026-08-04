import React from 'react';
import Footer from "../components/Footer";

import lks2025 from "../assets/lks2025.jpg";
import lks2026 from "../assets/lks2026.jpeg";
import dicoding from "../assets/dicoding.jpeg";
import lkssmk from "../assets/lkssmk.jpeg";
import kominfo from "../assets/kominfo.jpeg";
import unbaja from "../assets/unbaja.jpeg";

const achievementsData = [
  {
    id: 1,
    title: "1st Place | LKS Web Technology 2025",
    organizer: "Lomba Kompetensi Siswa",
    date: "Nov 2025",
    image: lks2025, 
    postUrl: "#",
    certificateUrl: "#",
    isGrayscale: true 
  },
  {
    id: 2,
    title: "1st Place | LKS Web Technology 2026",
    organizer: "Lomba Kompetensi Siswa",
    date: "Aug 2025",
    image: lks2026, 
    postUrl: "#",
    certificateUrl: "#",
    isGrayscale: true
  },
  {
    id: 3,
    title: "Full-Stack Web Developer | DBS Foundation Coding Camp",
    organizer: "Lomba Kompetensi Siswa",
    date: "Aug 2025",
    image: dicoding, 
    postUrl: "#",
    certificateUrl: "#",
    isGrayscale: true
  },
  {
    id: 4,
    title: "1st Place | Web Technologies - LKS SMK 2025",
    organizer: "Penyelenggara LKS SMK Tingkat Kota Serang",
    date: "Aug 2025",
    image: lkssmk, 
    postUrl: "#",
    certificateUrl: "#",
    isGrayscale: true
  },
  {
    id: 5,
    title: "Web Developer Intern | Official Trip & Personnel System",
    organizer: "Dinas Komunikasi dan Informatika Kota Serang",
    date: "Jul - Oct 2025",
    image: kominfo, 
    postUrl: "#",
    certificateUrl: "#",
    isGrayscale: true
  },
  {
    id: 6,
    title: "Full-Stack Web Developer Intern | FKIP Faculty Portal",
    organizer: "Universitas Banten Jaya (UNBAJA)",
    date: "Nov - Dec 2025",
    image: unbaja,
    postUrl: "#",
    certificateUrl: "#",
    isGrayscale: true
  }
];

const Achievement = () => {
  return (
    <div className="bg-white text-black dark:bg-[#141414] dark:text-white min-h-screen flex flex-col justify-between font-sans relative overflow-hidden transition-colors duration-300">

      {/* Background Subtle Geometric Accents */}
      <div className="absolute top-24 left-10 text-gray-300 dark:text-gray-700 pointer-events-none select-none text-2xl tracking-widest opacity-60 leading-tight">
        ::::<br />::::<br />::::
      </div>
      <div className="absolute top-40 right-16 w-24 h-24 border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center pointer-events-none select-none opacity-60">
        <div className="w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 left-[-40px] w-32 h-32 border border-gray-200 dark:border-gray-800 rounded-full pointer-events-none select-none opacity-40"></div>
      <div className="absolute top-1/2 right-10 text-gray-300 dark:text-gray-700 pointer-events-none select-none text-3xl opacity-50 font-light">+</div>
      <div className="absolute top-1/3 right-4 text-gray-300 dark:text-gray-700 pointer-events-none select-none opacity-60">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 flex-grow w-full z-10">

        {/* Header Section */}
        <section className="mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 lowercase">
            achievements
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed lowercase">
            a collection of milestones and recognitions from competitions and events that i've participated in.
          </p>
        </section>

        {/* Achievement Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#1c1c1c] rounded-2xl p-4 shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between transition-all duration-500"
            >
              {/* Image Container */}
              <div className="rounded-xl overflow-hidden mb-5 aspect-[4/3] bg-gray-100 dark:bg-[#262626]">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-300 hover:scale-105 ${
                    item.isGrayscale ? 'grayscale hover:grayscale-0' : ''
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex-grow px-1">
                <h3 className="text-base font-bold text-black dark:text-white mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">
                  {item.organizer}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">
                  {item.date}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={item.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-[#262626] hover:bg-gray-100 dark:hover:bg-[#303030] text-gray-600 dark:text-gray-300 text-xs font-medium transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h0.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  view post
                </a>

                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-[#262626] hover:bg-gray-100 dark:hover:bg-[#303030] text-gray-600 dark:text-gray-300 text-xs font-medium transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  certificate
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <Footer />
      </div>
    </div>
  );
};

export default Achievement;
// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
//       <div
//         className="max-w-6xl mx-auto"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//       >
//         <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
//         <p className="text-gray-400 mb-6">Hit me up on:</p>
//         <div className="flex justify-center flex-wrap gap-4">
//           <a
//             href="#"
//             className="px-10 py-4 rounded bg-gray-200 text-gray-900 dark:bg-[#1a1a1a] dark:text-white flex items-center gap-2"
//           >
//             <i className="ri-discord-fill"></i> Discord
//           </a>
//           <a
//             href="#"
//             className="px-10 py-4 rounded bg-gray-200 text-gray-900 dark:bg-[#1a1a1a] dark:text-white flex items-center gap-2"
//           >
//             <i className="ri-instagram-line"></i> Instagram
//           </a>
//           <a
//             href="#"
//             className="px-10 py-4 rounded bg-gray-200 text-gray-900 dark:bg-[#1a1a1a] dark:text-white flex items-center gap-2"
//           >
//             <i className="ri-linkedin-box-fill"></i> LinkedIn
//           </a>
//           <a
//             href="#"
//             className="px-10 py-4 rounded bg-gray-200 text-gray-900 dark:bg-[#1a1a1a] dark:text-white flex items-center gap-2"
//           >
//             <i className="ri-spotify-fill"></i> Spotify
//           </a>
//         </div>
//         <footer className="flex justify-between py-10 mt-6 text-gray-500 text-sm">
//           <i className="text-xl ri-github-line"></i>
//           <p>© 2025 - Ahmad Fauzan</p>
//         </footer>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: "ri-discord-fill",
      color: "hover:text-[#5865F2]",
      url: "#",
    },
    {
      name: "Instagram",
      icon: "ri-instagram-line",
      color: "hover:text-[#E1306C]",
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: "ri-linkedin-box-fill",
      color: "hover:text-[#0077B5]",
      url: "#",
    },
    {
      name: "Spotify",
      icon: "ri-spotify-fill",
      color: "hover:text-[#1DB954]",
      url: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 transition-colors duration-300"
    >
      <div
        className="max-w-4xl mx-auto text-center mb-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        {/* Social Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-[#111] hover:bg-white dark:hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${link.color}`}
            >
              <i
                className={`${link.icon} text-3xl mb-2 transition-transform duration-300 group-hover:scale-110`}
              ></i>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-inherit">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Divider line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-10"></div>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <i className="ri-github-line text-2xl"></i>
            </a>
            <span>Check out my repos</span>
          </div>
          <p className="font-medium tracking-wide">
            © 2025{" "}
            <span className="text-black dark:text-white">Ahmad Fauzan</span>.
            All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

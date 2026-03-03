// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Lenis from "@studio-freight/lenis";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Education from "./components/Education";
// import Contact from "./components/Contact";

// // Swiper
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function App() {
//   useEffect(() => {
//     // 1. Inisialisasi AOS
//     AOS.init({
//       duration: 1000,
//       once: false,
//       easing: "ease-in-out",
//     });

//     // 2. Inisialisasi Lenis (Scroll Berat/Smooth)
//     const lenis = new Lenis({
//       duration: 1.8,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <WorkExperience />
//       <Education />
//       <Contact />
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Blog from "./pages/Blog";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogDetail from "./pages/BlogDetail";

function App() {
  useEffect(() => {
    // AOS Init
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });

    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#141414] transition-colors duration-300">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

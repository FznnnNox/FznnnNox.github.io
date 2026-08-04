// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Lenis from "@studio-freight/lenis";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Project from "./pages/Project";
// import Achievement from "./pages/Achievement";
// import Blog from "./pages/Blog";

// // Swiper CSS
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import BlogDetail from "./pages/BlogDetail";

// function App() {
//   useEffect(() => {
//     // AOS Init
//     AOS.init({
//       duration: 1000,
//       once: false,
//       easing: "ease-in-out",
//     });

//     // Lenis Smooth Scroll
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
//     <Router>
//       <div className="min-h-screen bg-white dark:bg-[#141414] transition-colors duration-300">
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Project />} />
//           <Route path="/Achievement" element={<Achievement />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:slug" element={<BlogDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Achievement from "./pages/Achievement";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ScrollToHash({ lenisRef }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      let attempts = 0;
      const maxAttempts = 30; // ~1.5s of retrying while the page renders

      const interval = setInterval(() => {
        attempts += 1;
        const el = document.getElementById(id);

        if (el) {
          clearInterval(interval);
          if (lenisRef.current) {
            lenisRef.current.scrollTo(el, { offset: -100 });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    } else {
      // No hash: reset scroll position on normal route change
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0 });
      }
    }
  }, [location, lenisRef]);

  return null;
}

function App() {
  const lenisRef = useRef(null);

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
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#141414] transition-colors duration-300">
        <Navbar />
        <ScrollToHash lenisRef={lenisRef} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/Achievement" element={<Achievement />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
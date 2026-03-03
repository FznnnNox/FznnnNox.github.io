// import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";

// import blogData from "../data/blogData";

// const Blog = () => {
// //   const blogs = [
// //     {
// //       title: "Cara Commit yang Baik dan Benar",
// //       desc: "Panduan singkat biar commit kamu nggak bikin senior geleng-geleng kepala.",
// //       date: "August 14, 2025",
// //       slug: "cara-commit",
// //     },
// //   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-[#141414] text-black dark:text-white pt-32 px-6 transition-colors duration-500">
//       <div className="max-w-3xl mx-auto">
//         {/* Header Section */}
//         <header className="mb-24" data-aos="fade-up">
//           <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 italic">
//             Writing in <span className="font-light">My Spare Time</span>
//           </h1>
//           <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light max-w-xl leading-relaxed">
//             Thoughts, tutorials, and insights about web development and the digital world.
//           </p>
//         </header>

//         {/* Blog List */}
//         <div className="space-y-20 mb-32">
//           {blogData.map((post, index) => (
//             <article 
//               key={index} 
//               className="group relative"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <Link to={`/blog/${post.slug}`} className="block">
//                 <div className="flex flex-col gap-3">
//                   <h2 className="text-2xl md:text-3xl font-semibold group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
//                     {post.title}
//                   </h2>
//                   <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed font-light">
//                     {post.desc}
//                   </p>
//                   <div className="flex items-center gap-4 mt-2">
//                     <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
//                       {post.date}
//                     </span>
//                     <span className="h-[1px] w-8 bg-gray-200 dark:bg-gray-800 group-hover:w-12 transition-all duration-500"></span>
//                     <span className="text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
//                       Read more →
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             </article>
//           ))}

//           <div className="pt-20 text-center">
//             <p className="text-sm tracking-widest text-gray-400 uppercase">more articles coming soon...</p>
//           </div>
//         </div>

//         <div className="pb-10">
//           <hr className="border-gray-100 dark:border-gray-800 mb-10" />
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { blogs } from "../data/blogData";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#141414] text-black dark:text-white pt-32 px-6 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <header className="mb-24" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 italic">
            Writing in <span className="font-light">My Spare Time</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Thoughts, tutorials, and insights about web development.
          </p>
        </header>

        <div className="space-y-20 mb-32">
          {blogs.map((post, index) => (
            <article 
              key={post.id} 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl md:text-3xl font-semibold group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed font-light">
                    {post.desc}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                      {post.date}
                    </span>
                    <span className="h-[1px] w-8 bg-gray-200 dark:bg-gray-800 group-hover:w-12 transition-all duration-500"></span>
                    <span className="text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="pb-10">
          <hr className="border-gray-100 dark:border-gray-800 mb-10" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Blog;
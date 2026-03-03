// import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";

// const BlogDetail = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-[#141414] text-black dark:text-white pt-32 px-6 pb-20 transition-colors duration-500">
//       <article className="max-w-2xl mx-auto" data-aos="fade-in">
//         {/* Navigation */}
//         <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white mb-12 transition-all hover:-translate-x-1">
//           <i className="ri-arrow-left-s-line"></i> Back to Blog
//         </Link>

//         {/* Header */}
//         <header className="mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold leading-[1.2] mb-6">
//             Cara Commit yang Baik dan Benar
//           </h1>
//           <div className="flex items-center gap-3 text-sm text-gray-400 uppercase tracking-widest">
//             <span>August 14, 2025</span>
//             <span>•</span>
//             <span>5 min read</span>
//           </div>
//         </header>

//         {/* Main Content */}
//         <div className="text-gray-700 dark:text-gray-300 space-y-8 text-lg leading-relaxed font-light">
//           <p>
//             Pernah nggak sih kamu commit kode, terus tiba-tiba di-review sama senior dan langsung kena komentar pedas? 
//             Biasanya bukan karena kodenya jelek banget, tapi cara commit-nya bikin susah dibaca atau nggak jelas maksudnya.
//           </p>

//           <p>
//             Commit itu kayak <span className="text-black dark:text-white font-medium">catatan sejarah proyek</span>. 
//             Kalau isinya cuma "update" atau "fix", itu sama aja kayak bikin buku sejarah tapi halamannya cuma tulis "ya gitu deh".
//           </p>

//           <h3 className="text-2xl font-semibold text-black dark:text-white mt-12 mb-4">Kenapa Commit Message Penting?</h3>
//           <p>Biar nggak dimarahin senior (dan bikin diri sendiri enak pas nyari history), ini tips commit yang baik:</p>
          
//           <ul className="space-y-4 list-none">
//             {[
//               { num: "01", text: "Satu commit = satu perubahan spesifik" },
//               { num: "02", text: "Pesan commit jelas dan singkat" },
//               { num: "03", text: "Gunakan bahasa yang konsisten" }
//             ].map((item, i) => (
//               <li key={i} className="flex gap-4">
//                 <span className="text-blue-500 font-mono font-bold text-sm">{item.num}.</span>
//                 <span>{item.text}</span>
//               </li>
//             ))}
//           </ul>

//           {/* Code Block Example */}
//           <div className="relative group my-12">
//             <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
//             <div className="relative bg-gray-50 dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 p-8 rounded-xl overflow-hidden">
//               <div className="flex gap-1.5 mb-6">
//                 <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
//                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
//                 <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
//               </div>
//               <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
//                 <code className="block text-blue-500">feat: tambah fitur login dengan Google OAuth</code>
//                 <code className="block text-purple-400">fix: perbaiki bug validasi email di form register</code>
//                 <code className="block text-gray-400">docs: update README dengan cara instalasi</code>
//               </pre>
//             </div>
//           </div>

//           {/* Pro Tip Box */}
//           <div className="bg-blue-50 dark:bg-blue-500/5 border-l-2 border-blue-500 p-8 my-12 rounded-r-xl">
//              <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold mb-3 uppercase tracking-tighter text-sm italic">
//                <i className="ri-lightbulb-flash-line text-xl"></i> Pro Tip
//              </div>
//              <p className="text-gray-600 dark:text-gray-300 italic text-base">
//                "Kalau commit message kamu bisa melengkapi kalimat 'This commit will...', berarti udah bagus!"
//              </p>
//           </div>
//         </div>

//         {/* Article Footer */}
//         <footer className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800">
//           <div className="flex justify-between items-center mb-16">
//             <div className="flex gap-4">
//                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full uppercase tracking-widest font-bold">#git</span>
//                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full uppercase tracking-widest font-bold">#career</span>
//             </div>
//           </div>
//           <Footer />
//         </footer>
//       </article>
//     </div>
//   );
// };

// export default BlogDetail;

import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { blogs } from "../data/blogData";

const BlogDetail = () => {
  const { slug } = useParams();
  
  // Mencari data blog berdasarkan slug yang ada di URL
  const post = blogs.find((b) => b.slug === slug);

  // Jika data tidak ditemukan
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Artikel tidak ditemukan.</h1>
        <Link to="/blog" className="ml-4 text-blue-500 underline">Kembali</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#141414] text-black dark:text-white pt-32 px-6 pb-20 transition-colors duration-500">
      <article className="max-w-2xl mx-auto" data-aos="fade-in">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white mb-12 transition-all hover:-translate-x-1">
          <i className="ri-arrow-left-s-line"></i> Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.2] mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400 uppercase tracking-widest">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Konten Utama dari Data */}
        <div className="text-gray-700 dark:text-gray-300 space-y-8 text-lg leading-relaxed font-light">
          {post.content}
        </div>

        <footer className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800">

  {/* TAGS & SHARE */}
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 mb-20">

    {/* Tags */}
    <div className="flex flex-wrap gap-3">
      {post.tags.map((tag, index) => (
        <span
          key={index}
          className="group relative px-4 py-2 text-[11px] font-semibold uppercase tracking-wider rounded-full 
          bg-gray-100 dark:bg-white/5 
          text-gray-600 dark:text-gray-300
          border border-gray-200 dark:border-white/10
          hover:scale-105 hover:border-blue-400/50 hover:text-blue-500
          transition-all duration-300"
        >
          {tag.replace("#", "")}
        </span>
      ))}
    </div>

    {/* Share Section */}
    <div className="flex items-center gap-4 text-sm text-gray-400">
      <span className="tracking-wide">Share:</span>
      <div className="flex gap-3 text-lg">
        <a href="#" className="hover:text-blue-500 transition">
          <i className="ri-twitter-x-line"></i>
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          <i className="ri-linkedin-box-line"></i>
        </a>
        <a href="#" className="hover:text-gray-600 transition">
          <i className="ri-link"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Glow Divider */}
  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-16"></div>

  <Footer />
</footer>
      </article>
    </div>
  );
};

export default BlogDetail;
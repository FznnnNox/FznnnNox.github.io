import React from "react";

export const blogs = [
  {
    id: 1,
    title: "Cara Commit yang Baik dan Benar",
    desc: "Panduan singkat biar commit kamu nggak bikin senior geleng-geleng kepala.",
    date: "February 20, 2026",
    slug: "cara-commit",
    readTime: "5 min read",
    tags: ["#git", "#career"],
    content: (
      <>
        <p>
          Pernah nggak sih kamu commit kode, terus tiba-tiba di-review sama senior dan langsung kena komentar pedas? 
          Biasanya bukan karena kodenya jelek banget, tapi cara commit-nya bikin susah dibaca atau nggak jelas maksudnya.
        </p>

        <p>
          Commit itu kayak <span className="text-black dark:text-white font-medium">catatan sejarah proyek</span>. 
          Kalau isinya cuma "update" atau "fix", itu sama aja kayak bikin buku sejarah tapi halamannya cuma tulis "ya gitu deh".
        </p>

        <h3 className="text-2xl font-semibold text-black dark:text-white mt-12 mb-4">Kenapa Commit Message Penting?</h3>
        <p>Biar nggak dimarahin senior (dan bikin diri sendiri enak pas nyari history), ini tips commit yang baik:</p>
        
        <ul className="space-y-4 list-none">
          {[
            { num: "01", text: "Satu commit = satu perubahan spesifik" },
            { num: "02", text: "Pesan commit jelas dan singkat" },
            { num: "03", text: "Gunakan bahasa yang konsisten" }
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-blue-500 font-mono font-bold text-sm">{item.num}.</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        {/* Code Block Example */}
        <div className="relative group my-12">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-gray-50 dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-800 p-8 rounded-xl overflow-hidden">
            <div className="flex gap-1.5 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
              <code className="block text-blue-500">feat: tambah fitur login dengan Google OAuth</code>
              <code className="block text-purple-400">fix: perbaiki bug validasi email di form register</code>
              <code className="block text-gray-400">docs: update README dengan cara instalasi</code>
            </pre>
          </div>
        </div>

        {/* Pro Tip Box */}
        <div className="bg-blue-50 dark:bg-blue-500/5 border-l-2 border-blue-500 p-8 my-12 rounded-r-xl">
           <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold mb-3 uppercase tracking-tighter text-sm italic">
             <i className="ri-lightbulb-flash-line text-xl"></i> Pro Tip
           </div>
           <p className="text-gray-600 dark:text-gray-300 italic text-base">
             "Kalau commit message kamu bisa melengkapi kalimat 'This commit will...', berarti udah bagus!"
           </p>
        </div>
      </>
    ),
  },
]; 
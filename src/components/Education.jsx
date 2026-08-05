import React from "react";
import logoSmk from "../assets/logosmk.png";
import logoUnpam from "../assets/logounpam.png";

const educationData = [
  {
    school: "Universitas Pamulang",
    logo: logoUnpam,
    major: "System Information",
    period: "2025 - Present",
    achievements: [
      // isi pencapaian/organisasi/nilai kalau ada
    ],
  },
  {
    school: "SMKN 7 Kota Serang",
    logo: logoSmk,
    major: "Rekayasa Perangkat Lunak",
    period: "2022 - 2025",
    achievements: [
      "1st Place | Web Programming 2026 – Kota Serang",
      "1st Place | Web Programming 2025 – Kota Serang",
    ],
  },
];

const Education = () => {
  // Bisa diubah jumlahnya kalau mau tampil sebagian
  const visibleEducation = educationData.slice(0, educationData.length);

  return (
    <section
      id="education"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-[#141414] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            My academic background and the achievements along the way
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-8">
            {visibleEducation.map((edu, index) => (
              <div key={index} className="relative flex gap-5 sm:gap-6">

                {/* Logo node - Tambahkan bg-white permanen agar gambar transparan tetap kontras */}
                <div className="relative z-10 shrink-0">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden
                     bg-white shadow-sm border border-gray-200 dark:border-gray-700
                     flex items-center justify-center p-2"
                  >
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="group flex-1 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200
                   dark:bg-[#1a1a1a] dark:border-gray-800
                   transition-all duration-300
                   hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {edu.school}
                    </h3>
                    <span className="inline-block w-fit text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base">
                    {edu.major}
                  </p>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <>
                      <h4 className="text-gray-900 dark:text-white font-medium mb-2 text-sm">
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-1 text-sm">
                        {edu.achievements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
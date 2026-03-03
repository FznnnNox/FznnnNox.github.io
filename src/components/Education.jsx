import React from "react";

/* ============================= */
/* ========= DUMMY DATA ======== */
/* ============================= */

const educationData = [
  {
    school: "SMKN 7 Kota Serang",
    major: "Rekayasa Perangkat Lunak",
    period: "2022 - 2025",
    achievements: [
      "1st Place | Web Programming 2025 – Kota Serang",
      "2nd Place (Men's Singles) | Kota Serang Badminton Championship 2019",
    ],
  },
  // Kamu bisa tambah data baru di sini nanti
];

/* ============================= */
/* ========= COMPONENT ========= */
/* ============================= */

const Education = () => {
  // Bisa diubah jumlahnya kalau mau tampil sebagian
  const visibleEducation = educationData.slice(0, 1);

  return (
    <section
      id="education"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-[#141414] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Education
        </h2>

        {/* Cards */}
        <div className="space-y-6">
          {visibleEducation.map((edu, index) => (
            <div
              key={index}
              className="group p-6 bg-white border border-gray-300 rounded-lg
                         dark:bg-[#1a1a1a] dark:border-gray-700
                         transition-all duration-300
                         hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {edu.school}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {edu.major} ({edu.period})
              </p>

              <h4 className="text-gray-900 dark:text-white font-medium mb-2">
                Key Achievements
              </h4>

              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-1">
                {edu.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

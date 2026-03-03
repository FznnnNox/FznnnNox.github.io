import React from "react";

const workData = [
  {
    company: "Dinas Komunikasi dan Informatika Kota Serang",
    period: "Juli 2025 - Present",
    description:
      "Web Development – Building Areplungeu web application with Laravel, MySQL and Tailwind CSS.",
    skills: ["MySQL", "Laravel", "Tailwind CSS"],
  },
  {
    company: "Universitas Banten Jaya",
    period: "Oktober 2025 - Present",
    description:
      "Full Stack Developer – Merancang arsitektur database serta mengembangkan fitur frontend dan backend secara end-to-end untuk website Fakultas menggunakan Laravel dan React.",
    skills: ["Laravel", "MySQL", "React", "Tailwind CSS"],
  },
  {
    company: "Coding Camp powered by DBS Foundation",
    period: "Jan 2025 - May 2025",
    description:
      "Front End & Back End Developer – Learned HTML, CSS, JavaScript, Hapi.js, Postman, teamwork & soft skills.",
    skills: ["HTML", "CSS", "JavaScript", "Hapi.js", "Postman"],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="work"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-[#141414] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            My journey in software development and the experiences that shaped my skills
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">

          {workData.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-white border border-gray-300
                         dark:bg-[#1a1a1a] dark:border-gray-700
                         transition-all duration-300
                         hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.company}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-400 mb-3">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-gray-100
                               dark:bg-gray-800
                               text-gray-800 dark:text-gray-200
                               transition duration-200
                               group-hover:bg-gray-200
                               dark:group-hover:bg-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

import React from "react";
import logoKominfo from "../assets/logokominfo.png";
import logoUnbaja from "../assets/logounbaja.png";
import logoDicoding from "../assets/logodicoding.png";

const workData = [
  {
    company: "Dinas Komunikasi dan Informatika Kota Serang",
    logo: logoKominfo,
    period: "Juli 2025 - Present",
    description:
      "Web Development – Building Areplungeu web application with Laravel, MySQL and Tailwind CSS.",
    skills: ["MySQL", "Laravel", "Tailwind CSS"],
  },
  {
    company: "Universitas Banten Jaya",
    logo: logoUnbaja,
    period: "Oktober 2025 - Present",
    description:
      "Full Stack Developer – Merancang arsitektur database serta mengembangkan fitur frontend dan backend secara end-to-end untuk website Fakultas menggunakan Laravel dan React.",
    skills: ["Laravel", "MySQL", "React", "Tailwind CSS"],
  },
  {
    company: "Coding Camp powered by DBS Foundation",
    logo: logoDicoding,
    period: "Jan 2025 - May 2025",
    description:
      "Front End & Back End Developer – Learned HTML, CSS, JavaScript, Hapi.js, Postman, teamwork & soft skills.",
    skills: ["HTML", "CSS", "JavaScript", "Hapi.js", "Postman"],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="workExperience"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-[#141414] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            My journey in software development and the experiences that shaped my skills
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-8">
            {workData.map((item, index) => (
              <div key={index} className="relative flex gap-5 sm:gap-6">

                {/* Logo node */}
                <div className="relative z-10 shrink-0">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden
                               bg-white dark:bg-[#1a1a1a]
                               border border-gray-200 dark:border-gray-700
                               shadow-sm flex items-center justify-center"
                  >
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="max-w-full max-h-full w-auto h-auto object-contain p-2"
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
                      {item.company}
                    </h3>
                    <span className="inline-block w-fit text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-gray-100
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
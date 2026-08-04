import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const skillsData = [
  {
    title: "Frontend",
    description: "Developing dynamic web applications",
    icons: [
      <i className="ri-reactjs-fill text-[#61DAFB]" />,
      <i className="ri-javascript-fill text-[#F7DF1E]" />,
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
        alt="Next.js"
        className="w-8 h-8 dark:invert"
      />,
    ],
  },
  {
    title: "Backend",
    description: "Building robust server-side logic",
    icons: [
      <i className="ri-php-line text-[#777BB4]" />,
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg"
        alt="Laravel"
        className="w-8 h-8"
      />,
    ],
  },
  {
    title: "Styling",
    description: "Creating modern & responsive designs",
    icons: [
      <i className="ri-tailwind-css-fill text-[#06B6D4]" />,
      <i className="ri-bootstrap-fill text-[#7952B3]" />,
      <i className="ri-css3-fill text-[#1572B6]" />,
    ],
  },
  {
    title: "Database",
    description: "Managing relational data structures",
    icons: [
      <img
        src="https://img.icons8.com/ios/50/mysql-logo.png"
        alt="MySQL"
        className="w-8 dark:invert opacity-80"
      />,
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg"
        alt="Supabase"
        className="w-8 h-8"
      />,
    ],
  },
  {
    title: "Tools",
    description: "Streamlining development & design",
    icons: [
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
        alt="Figma"
        className="w-8"
      />,
      <img
        src="https://img.icons8.com/wired/64/postman-api.png"
        alt="Postman"
        className="w-8 dark:invert opacity-80"
      />,
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-6 bg-white dark:bg-[#141414] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="w-20 h-[3px] mt-6 mx-auto bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-full"></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={900}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {skillsData.map((skill, index) => (
            <SwiperSlide key={index}>
              <SkillCard {...skill} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SkillCard = ({ title, description, icons }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl">

      {/* CARD BODY */}
      <div
        className="relative z-10 p-8 rounded-2xl
                   bg-white dark:bg-[#1c1c1c]
                   border border-gray-200 dark:border-white/10
                   shadow-md
                   transition-all duration-500
                   transform group-hover:-translate-y-3
                   group-hover:shadow-xl"
      >
        <h3 className="text-xl font-semibold mb-3 text-center text-black dark:text-white tracking-wide">
          {title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 mb-6 text-center text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex gap-5 text-3xl justify-center items-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-14 h-14 rounded-xl
                         bg-gray-100 dark:bg-[#262626]
                         flex items-center justify-center
                         transition-all duration-300
                         group-hover:scale-110
                         shadow-sm"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* SLASH EFFECT — DI DEPAN */}
      <span
        className="pointer-events-none absolute top-0 left-[-120%]
                   w-[60%] h-full
                   bg-gradient-to-r from-transparent via-white/50 to-transparent
                   dark:via-white/20
                   skew-x-[-25deg]
                   group-hover:left-[130%]
                   transition-all duration-700 ease-in-out
                   z-20"
      ></span>
    </div>
  );
};

export default Skills;
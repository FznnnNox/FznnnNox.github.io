import React from "react";
import { GraduationCap, Code2, Bike, Gamepad2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-6 
                 bg-white dark:bg-[#141414] 
                 transition-colors duration-500 overflow-hidden"
    >
      <div
        className="absolute -top-40 -right-40 w-[400px] h-[400px] 
                      bg-purple-500/10 dark:bg-purple-500/5 
                      blur-[120px] rounded-full"
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold 
                         bg-gradient-to-r 
                         from-gray-900 to-gray-600
                         dark:from-white dark:to-gray-400
                         bg-clip-text text-transparent"
          >
            About Me
          </h2>

          <div
            className="w-16 h-[3px] mt-4 
                          bg-gradient-to-r 
                          from-purple-500 to-blue-500 
                          rounded-full"
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div
            className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p>
              I'm{" "}
              <span className="font-semibold text-black dark:text-white">
                Fauzan
              </span>
              , currently in 12th grade at SMKN 7 Kota Serang. I never expected
              to fall into programming, but web development quickly became
              something I genuinely enjoy.
            </p>

            <p>
              Outside of coding, you’ll usually find me gaming, spending time
              with pets, or cycling on weekends. Life stays simple — and that’s
              what keeps everything balanced.
            </p>
          </div>

          {/* Right Card */}
          <div
            className="relative group"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div
              className="absolute inset-0 
                            bg-gradient-to-r 
                            from-purple-500/20 to-blue-500/20 
                            blur-xl rounded-2xl 
                            opacity-60 group-hover:opacity-80 
                            transition"
            ></div>

            <div
              className="relative p-8 rounded-2xl 
                            bg-white/60 dark:bg-white/5 
                            backdrop-blur-xl 
                            border border-gray-200 
                            dark:border-white/10 
                            shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Quick Facts
              </h3>

              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 shrink-0 text-gray-400 dark:text-gray-500" />
                  12th Grade Student
                </li>
                <li className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 shrink-0 text-gray-400 dark:text-gray-500" />
                  Passionate in Web Development
                </li>
                <li className="flex items-center gap-2.5">
                  <Bike className="w-4 h-4 shrink-0 text-gray-400 dark:text-gray-500" />
                  Loves Cycling
                </li>
                <li className="flex items-center gap-2.5">
                  <Gamepad2 className="w-4 h-4 shrink-0 text-gray-400 dark:text-gray-500" />
                  Gamer & Pet Enthusiast
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

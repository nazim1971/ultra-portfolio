"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const AboutMe: React.FC = () => {
  const router = useRouter();
  const skills = [
    { name: "Next.js", category: "Framework" },
    { name: "React", category: "Library" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Runtime" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redux", category: "State Management" },
    { name: "Mongoose", category: "ODM" },
    { name: "Prisma", category: "ORM" },
    { name: "Shadcn", category: "UI Library" },
    { name: "Ant Design", category: "UI Library" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-[#CBACF9] mb-4 tracking-wider">
            ABOUT ME
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Crafting Digital <span className="text-[#CBACF9]">Experiences</span>
          </h1>
          <div className="w-20 h-1 bg-[#CBACF9] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I am <span className="font-medium text-[#CBACF9]">Nazim</span>, a passionate web developer dedicated to creating impactful digital experiences. My journey began in 2020 when I first discovered the magic of turning code into visual interfaces.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              What started with simple <span className="text-[#CBACF9]">HTML</span> and <span className="text-[#CBACF9]">CSS</span> customizations has evolved into a deep expertise in building full-stack applications with modern technologies.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in creating <span className="text-[#CBACF9]">scalable</span>, <span className="text-[#CBACF9]">performant</span> web applications with great attention to <span className="text-[#CBACF9]">user experience</span> and <span className="text-[#CBACF9]">accessibility</span>.
            </p>

            <motion.a
              onClick={() => router.push('/project')}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#CBACF9] hover:bg-[#ba9ce6] text-white font-medium rounded-full transition-all duration-300 shadow hover:shadow-lg"
            >
              Explore my work
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm overflow-hidden"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              My <span className="text-[#CBACF9]">Toolkit</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-xs"
                >
                  <div className="w-2 h-2 rounded-full bg-[#CBACF9]"></div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
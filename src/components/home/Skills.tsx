import { BiLogoJavascript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaCpanel, FaGitAlt, FaGithub, FaWindows, FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign, SiPostgresql, SiPrisma, SiShadcnui } from "react-icons/si";
import {
  SiExpress,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const skillsData = [
  { icon: <BiLogoJavascript />, color: 'text-yellow-500', name: 'JavaScript' },
  { icon: <SiTypescript />, color: 'text-blue-500', name: 'TypeScript' },
  { icon: <FaReact />, color: 'text-cyan-500', name: 'React.js' },
  { icon: <RiNextjsFill />, color: 'text-black dark:text-white', name: 'Next.js' },
  { icon: <SiExpress />, color: 'text-black dark:text-white', name: 'Express.js' },
  { icon: <SiNodedotjs />, color: 'text-green-700', name: 'Node.js' },
  { icon: <FaWordpress />, color: 'text-blue-500', name: 'WordPress' },
  { icon: <FaGitAlt />, color: 'text-orange-700', name: 'Git' },
  { icon: <FaGithub />, color: 'text-black dark:text-white', name: 'GitHub' },
  { icon: <IoLogoFirebase />, color: 'text-yellow-600', name: 'Firebase' },
  { icon: <RiTailwindCssFill />, color: 'text-blue-500', name: 'TailwindCSS' },
  { icon: <SiAntdesign />, color: 'text-red-600', name: 'Ant Design' },
  { icon: <SiShadcnui />, color: 'text-black dark:text-white', name: 'shadcn-ui' },
  { icon: <DiMongodb />, color: 'text-green-500', name: 'MongoDB' },
  { icon: <SiMysql />, color: 'text-blue-500', name: 'MySQL' },
  { icon: <SiPostgresql />, color: 'text-blue-700', name: 'PostgreSQL' },
   { icon: <SiPrisma />, color: '', name: 'Prisma' },
];

const toolsData = [
  { icon: <FaWindows />, color: 'text-blue-600', name: 'Windows' },
  { icon: <VscVscode />, color: 'text-blue-600', name: 'VS Code' },
  { icon: <SiPostman />, color: 'text-orange-600', name: 'Postman' },
  { icon: <IoLogoVercel />, color: 'text-black dark:text-white', name: 'Vercel' },
  { icon: <FaCpanel />, color: 'text-orange-600', name: 'cPanel' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Professional Skillset */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Professional <span className="text-[#00ABF0]">Skillset</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies I have worked with and mastered throughout my development journey
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsData.map((skill, index) => (
          <CardContainer key={index} className="inter-var w-full">
            <CardBody
              className={`bg-gray-50 dark:bg-gray-900 relative group/card border-black/[0.1] dark:border-white/[0.2] w-full h-40 rounded-xl p-4 border transition-all duration-300 hover:shadow-xl ${skill.color} flex flex-col items-center justify-center`}
            >
              <CardItem
                translateZ="50"
                className="text-4xl md:text-5xl mx-auto flex justify-center"
              >
                {skill.icon}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-4 text-neutral-600 dark:text-neutral-300 text-center font-medium text-sm md:text-base"
              >
                {skill.name}
              </CardItem>
              <CardItem
                translateZ="20"
                className="w-1/2 mt-4 h-0.5 bg-gradient-to-r from-transparent via-[#00ABF0] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"
              />
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Tools I Use */}
      <div className="mt-32 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#00ABF0]">Tools</span> I Use
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My trusted toolkit for development, collaboration, and deployment
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {toolsData.map((tool, index) => (
          <CardContainer key={index} className="inter-var w-full">
            <CardBody
              className={`bg-gray-50 dark:bg-gray-900 relative group/card border-black/[0.1] dark:border-white/[0.2] w-full h-40 rounded-xl p-4 border transition-all duration-300 hover:shadow-xl ${tool.color} flex flex-col items-center justify-center`}
            >
              <CardItem
                translateZ="50"
                className="text-4xl md:text-5xl mx-auto flex justify-center"
              >
                {tool.icon}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-4 text-neutral-600 dark:text-neutral-300 text-center font-medium text-sm md:text-base"
              >
                {tool.name}
              </CardItem>
              <CardItem
                translateZ="20"
                className="w-1/2 mt-4 h-0.5 bg-gradient-to-r from-transparent via-[#00ABF0] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"
              />
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Skills;
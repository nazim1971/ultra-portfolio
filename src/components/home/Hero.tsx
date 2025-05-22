import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { ShinyButton } from "../magicui/shiny-button";

const Hero = () => {
  const words = [
  { text: "I'm a Frontend Developer" },
  {
    text: "Full-Stack experience",
    className: "text-blue-500 dark:text-blue-300",
  },
  { text: "Building scalable UIs" },
  {
    text: "Modern technologies",
    className: "text-purple-500 dark:text-purple-300",
  },
  { text: "Performance-driven development" },
  { text: "Clean and maintainable code" },
]


  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-0">
      {/* 3D Profile Card with enhanced styling */}
      <CardContainer className="inter-var mb-8">
        <CardBody className="bg-gray-50 dark:bg-gray-900 relative group/card transition-all duration-500 ease-in-out transform hover:scale-[1.02] dark:border-gray-700 border-gray-200 w-full sm:w-[30rem] h-auto rounded-2xl p-6 border">
          <CardItem
            translateZ="100"
            className="mx-auto h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-10 blur-md group-hover/card:opacity-20 transition-opacity duration-300" />
            <Image
              height={250}
              width={250}
              className="rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              alt="Nazim Uddin - Web Developer"
              src="https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738593414/q2kogki4snnc6yicjtyl.png"
              priority
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      {/* Name with gradient text */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
        Md. Nazim Uddin
      </h1>

      {/* Typewriter effect with improved words */}
      <TypewriterEffectSmooth
        words={words}
        className="mb-8 text-lg md:text-xl"
      />

      {/* Professional tagline */}
      <p className="max-w-xl mx-auto text-center text-base md:text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
        Web Developer specializing in{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          scalable applications
        </span>{" "}
        with enterprise experience 
        . Passionate about{" "}
        <span className="font-semibold text-teal-600 dark:text-teal-400">
          performance
        </span>{" "}
        and{" "}
        <span className="font-semibold text-purple-600 dark:text-purple-400">
          user experience
        </span>
        .
      </p>

      {/* Enhanced Download Button */}
      <div className="mb-12">
        <a
          href="https://drive.usercontent.google.com/u/0/uc?id=1DrNuSNodw7TRKbKq9AY_OKnqs3mlqwrE&export=download"
          download="Software_developer_resume_of_Md_Nazim_Uddin.pdf"
          aria-label="Download Resume"
        >
          <ShinyButton className="rounded-full px-6 py-3 text-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            Download Resume
          </ShinyButton>
        </a>
      </div>
    </div>
  );
};

export default Hero;

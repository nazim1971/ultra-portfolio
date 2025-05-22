"use client"
import { GithubIcon, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/nazim1971",
    icon: <GithubIcon />,
    color: "text-gray-800 dark:text-white",
    bgColor: "bg-gray-800 dark:bg-gray-700",
    hoverColor: "hover:bg-gray-900 dark:hover:bg-gray-600"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nazim1971/",
    icon: <LinkedinIcon />,
    color: "text-[#0077B5]",
    bgColor: "bg-[#0077B5]",
    hoverColor: "hover:bg-[#006097]"
  },
  {
    name: "Twitter",
    url: "https://x.com/_nazim1971",
    icon: <TwitterIcon />,
    color: "text-[#1DA1F2]",
    bgColor: "bg-[#1DA1F2]",
    hoverColor: "hover:bg-[#1a8cd8]"
  },
  {
    name: "Email",
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=nazimmuddin10@gmail.com`,
    icon: <Mail />,
    color: "text-[#D44638]",
    bgColor: "bg-[#D44638]",
    hoverColor: "hover:bg-[#c13525]"
  },
  {
    name: "WhatsApp",
    url: `https://wa.me/+8801867748073`,
    icon: <FaWhatsapp />,
    color: "text-[#25D366]",
    bgColor: "bg-[#25D366]",
    hoverColor: "hover:bg-[#1da851]"
  }
];

const Find = () => {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold dark:text-white mb-4"
        >
          Lets Connect
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12"
        >
          Feel free to <span className="text-[#CBACF9] font-medium">reach out</span> for collaborations or just to say hello!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {socialLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`
                  flex items-center justify-center
                  w-14 h-14 md:w-16 md:h-16
                  rounded-full
                  text-white
                  ${link.bgColor}
                  ${link.hoverColor}
                  transition-all duration-300
                  shadow-lg hover:shadow-xl
                  transform hover:scale-105
                `}
              >
                <span className="text-2xl">{link.icon}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            Prefer email?
          </p>
          <Link
            href="mailto:nazimmuddin10@gmail.com"
            className="inline-block px-6 py-3 bg-[#CBACF9] hover:bg-[#ba9ce6] text-white font-medium rounded-full transition-colors duration-300 shadow hover:shadow-md"
          >
            nazimmuddin10@gmail.com
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Find;
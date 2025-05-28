import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const TechnologiesAnimated = ({ technologies, technologyIcons }) => {
  return (
    <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden"
>
  {technologies.map((tech) => {
  const icon = technologyIcons[tech];
  return (
    <motion.div
      key={tech}
      variants={itemVariants}
      className="flex items-center justify-between bg-white dark:bg-gray-950 p-4 border border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>

      {typeof icon === 'object' ? (
        <>
          <img
            src={icon.light}
            alt={`${tech} icon light`}
            className="h-12 w-auto object-contain ml-4 block dark:hidden"
            loading="lazy"
          />
          <img
            src={icon.dark}
            alt={`${tech} icon dark`}
            className="h-12 w-auto object-contain ml-4 hidden dark:block"
            loading="lazy"
          />
        </>
      ) : (
        <img
          src={icon}
          alt={`${tech} icon`}
          className="h-12 w-auto object-contain ml-4"
          loading="lazy"
        />
      )}
    </motion.div>
  );
})}
</motion.div>
  );
};

export default TechnologiesAnimated;

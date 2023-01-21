import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Data from "../public/data.json";
import Typewriter from "typewriter-effect";

const Projects: NextPage = () => {
  return (
    <>
      <h2 className="text-5xl py-2 text-cyan-600 font-medium dark:text-cyan-400 md:text-6xl text-center mt-10">
        <Typewriter
          options={{
            strings: ["Publications!"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-20">
        {Data?.Publication?.map((project) => (
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            initial={{ y: 500, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-cyan-700 text- to-cyan-500 max-w-sm rounded overflow-hidden shadow-lg mb-5"
            key={project?.title}
          >
            <div className="widht-full h-56 relative bg-black">
              <Image
                layout="fill"
                objectFit="contain"
                src={project?.image}
                alt="Mountain"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-white mb-2">
                {project.title}
              </div>
              <p className="text-gray-300 text-base">{project?.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {project?.tags?.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;

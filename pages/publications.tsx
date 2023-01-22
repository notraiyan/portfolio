import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Data from "../public/data.json";
import Typewriter from "typewriter-effect";
import { openInNewTab } from "@utils/utils";
import { MdOpenInNew } from "react-icons/md";

const Publications: NextPage = () => {
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
      <div className="p-10 width-full gap-5 mt-20">
        {Data?.Publication?.map((project) => (
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            initial={{ y: 500, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-cyan-700 text- to-cyan-500 flex rounded overflow-hidden shadow-lg mb-5 width-full"
            key={project?.title}
          >
            <div className="height-full flex-1 relative bg-black">
              <Image
                layout="fill"
                objectFit="contain"
                src={project?.image}
                alt="Mountain"
              />
            </div>
            <div className="flex-1 card-block">
              <div className="px-6 py-5">
                <div className="font-bold text-xl text-white mb-2">
                  <a
                    className="hover:underline hover:underline-offset-4 cursor-pointer"
                    onClick={() => openInNewTab(project?.pdf)}
                  >
                    {project.title}
                    <MdOpenInNew className="inline-block ml-2" />
                  </a>
                </div>
                <div className="pb-2">
                  <div className="text-md text-white">
                    Citations: {project?.citation}
                  </div>
                  <div className="text-md text-white">
                    DOI:{" "}
                    <a
                      className="hover:underline hover:underline-offset-4 cursor-pointer"
                      onClick={() => openInNewTab(project?.link)}
                    >
                      {project?.doi}
                    </a>
                  </div>
                  <div className="font-semibold text-md text-white">
                    Conference: {project?.conference}
                  </div>
                </div>
                <div className="pt-4 pb-2">
                  <span className="font-bold text-md text-white">
                    Authors:{" "}
                  </span>
                  {project?.authors?.map((author) => (
                    <span
                      key={author}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {author}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-base">
                  {project?.description}
                </p>
              </div>
              <div className="px-6 pt-2 pb-2">
                <div className="text-bold text-md text-white">
                  Published in: {project?.publishedIn}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Publications;

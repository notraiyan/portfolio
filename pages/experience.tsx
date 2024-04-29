import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Data from "../public/data.json";
import Typewriter from "typewriter-effect";
import { MdOpenInNew } from "react-icons/md";
import { openInNewTab } from "@utils/utils";

const Experience: NextPage = () => {
  console.log(Data.Project[0].title);
  return (
    <>
      <h2 className="text-5xl py-2 text-cyan-600 font-medium dark:text-cyan-400 md:text-6xl text-center mt-10">
        <Typewriter
          options={{
            strings: ["Experience!"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <div className="p-10 gap-5 mt-20 width-full">
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          initial={{ y: 500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="width-full rounded overflow-hidden shadow-lg bg-gradient-to-r from-slate-500 text- to-slate-200 text-black"
        >
          <div className="widht-full h-32 relative mt-5">
            <Image
              layout="fill"
              objectFit="contain"
              src="/lcm.svg"
              alt="Mountain"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              <a
                className="hover:underline hover:underline-offset-4 cursor-pointer"
                onClick={() => openInNewTab("https://lastcallmedia.com/")}
              >
                Last Call Media
                <MdOpenInNew className="inline-block ml-2" />
              </a>
            </div>
            <div className="text-xl mb-2 text-center">Software Engineer</div>
            <div className="text-xl mb-2 text-center italic">
              July 2021 - Present
            </div>
            <p className="mt-10 text-justify max-w-md mx-auto">
              My Primary responsibilities include developing and maintaining web
              applications for clients. I have been fortunate enough to work
              with top notch fellow developers. I have acquired a diversified
              set of expertise while working with React, Next JS, AWS, Cypress,
              Wordpress, CI/CD, etc.
            </p>
          </div>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-20 mx-auto">
            {Data?.Experience?.map((project) => (
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                initial={{ y: 500, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-r from-cyan-700 text- to-cyan-500 max-w-sm rounded overflow-hidden shadow-lg mb-5"
                key={project?.title}
              >
                <div className="widht-full h-64 relative bg-black">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={project?.image}
                    alt="Mountain"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl text-white mb-2">
                    <a
                      className="hover:underline hover:underline-offset-4 cursor-pointer"
                      onClick={() => openInNewTab(project?.link)}
                    >
                      {project.title}
                      <MdOpenInNew className="inline-block ml-2" />
                    </a>
                  </div>
                  <p className="text-gray-300 text-base">
                    {project?.description}
                  </p>
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
          <div className="px-6 pt-4 pb-2"></div>
        </motion.div>
      </div>
      <div className="p-10 gap-5 width-full">
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          initial={{ y: 500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="width-full rounded overflow-hidden shadow-lg mb-5 bg-gradient-to-r from-slate-500 text- to-slate-200 text-black"
        >
          <div className="mx-auto w-64 h-32 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/dataedge.png"
              alt="Mountain"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              <a
                className="hover:underline hover:underline-offset-4 cursor-pointer"
                onClick={() => openInNewTab("https://www.data-edge.com/")}
              >
                Data-Edge
                <MdOpenInNew className="inline-block ml-2" />
              </a>
            </div>
            <div className="text-xl mb-2 text-center">
              Software Engineer (Intern)
            </div>
            <div className="text-xl mb-2 text-center italic">
              November 2019 - December 2019
            </div>
            <p className="mt-10 text-justify max-w-md mx-auto">
              During the 2 months internship, I have been assigned to work under
              a supervisor. My prime roles were to get familiar with Asp.Net
              framework and test their applications. Finally, I had to come up
              with a proposed solution for a problem.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </motion.div>
      </div>
    </>
  );
};

export default Experience;

import type { NextPage } from "next";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaResearchgate } from "react-icons/fa";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/protrain-1.png";
import web2 from "../public/swifteats-1.png";
import web3 from "../public/seramount-1.png";
import web4 from "../public/web1.png";
import { openInNewTab } from "@utils/utils";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { MdOpenInNew } from "react-icons/md";

const Home: NextPage = () => {
  return (
    <>
      <motion.section
        initial={{ y: 500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-center p-10 py-10">
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-48 h-48 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src="/avatar.jpg" layout="fill" objectFit="cover" />
          </div>
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Raiyan Ahmed
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
          <p className="text-md py-5 leading-8 max-w-xl mx-auto md:text-xl">
            Join me down below and let&apos;s get the ball rolling!
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <AiFillFacebook
              onClick={() => openInNewTab("https://www.facebook.com/R41Y4N/")}
              className="cursor-pointer transform 
              transition duration-500 hover:scale-110"
            />
            <AiFillLinkedin
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/raiyan-ahmed/")
              }
              className="cursor-pointer transform 
              transition duration-500 hover:scale-110"
            />
            <AiFillGithub
              onClick={() => openInNewTab("https://github.com/notraiyan")}
              className="cursor-pointer transform 
              transition duration-500 hover:scale-110"
            />
            <FaResearchgate
              onClick={() =>
                openInNewTab(
                  "https://www.researchgate.net/profile/Raiyan-Ahmed-2"
                )
              }
              className="cursor-pointer transform 
              transition duration-500 hover:scale-110"
            />
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="col-span-12 sm:col-span-5 cursor-pointer"
            >
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-cyan-400">
                <h3 className="text-3xl font-semibold">Background</h3>
                <span className="text-sm text-justify tracking-wider">
                  I have studied computer science & engineering at the Islamic
                  University of Technology. My thesis was on the development of
                  a prototype-based detection system that employs Machine
                  Learning algorithms to recognize violence in video data. I
                  have worked for Last Call Media for almost two years as a
                  Software Engineer.
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative col-span-12 px-4 space-y-6 sm:col-span-7"
            >
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-cyan-400">
                  <h3 className="text-xl font-bold tracking-wide">
                    <a
                      className="hover:underline hover:underline-offset-4 cursor-pointer"
                      onClick={() =>
                        openInNewTab("https://www.iutoic-dhaka.edu/")
                      }
                    >
                      Islamic University of Technology
                      <MdOpenInNew className="inline-block ml-2" />
                    </a>
                  </h3>
                  <h3 className="text-lg italic tracking-wide">
                    Bachelor of Science in Computer Science & Engineering
                  </h3>
                  <time className="text-xs tracking-wide uppercase">
                    January 2017 - March 2021
                  </time>
                  <p className="mt-3">
                    CGPA : 3.52/4.00 <br />
                    Thesis: Efficient Two-Stream Network for Violence Detection
                    Using Separable Convolutional LSTM
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-cyan-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    <a
                      className="hover:underline hover:underline-offset-4 cursor-pointer"
                      onClick={() =>
                        openInNewTab("https://sjs.edu.bd/new/index.php")
                      }
                    >
                      St Joseph Higher Secondary School & College
                      <MdOpenInNew className="inline-block ml-2" />
                    </a>
                  </h3>
                  <h3 className="text-lg italic tracking-wide">
                    Higher Secondary School Certificate
                  </h3>
                  <time className="text-xs tracking-wide uppercase">
                    2015 - 2016
                  </time>
                  <p className="mt-3">GPA: 5/5</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-cyan-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    <a
                      className="hover:underline hover:underline-offset-4 cursor-pointer"
                      onClick={() =>
                        openInNewTab("https://sjs.edu.bd/new/index.php")
                      }
                    >
                      St Joseph Higher Secondary School & College
                      <MdOpenInNew className="inline-block ml-2" />
                    </a>
                  </h3>
                  <h3 className="text-lg italic tracking-wide">
                    Secondary School Certificate
                  </h3>
                  <time className="text-xs tracking-wide uppercase">
                    2006-2014
                  </time>
                  <p className="mt-3">GPA: 5/5</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        <div className="lg:flex gap-10">
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-gradient-to-r from-cyan-700 text- to-cyan-500 text-center shadow-lg p-10 rounded-xl my-10 flex-1"
          >
            <Image src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-cyan-700 text- to-cyan-500 flex-1"
          >
            <Image src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Code your dream project
            </h3>
            <p className="py-2">
              Do you have an idea for your next great application? Let&apos;s
              make make it a reality.
            </p>
            {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p> */}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-cyan-700 text- to-cyan-500 flex-1"
          >
            <Image src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        initial={{ y: 500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="py-10"
      >
        <div>
          <h3 className="text-3xl py-1">
            <Typewriter
              options={{
                strings: ["Portfolio"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          {/* <p className="text-md py-2 leading-8">
            Since the beginning of my journey as a freelance designer and
            developer, I&apos;ve done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p> */}
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="basis-1/3 flex-1"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web1}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="basis-1/3 flex-1"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web2}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="basis-1/3 flex-1"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web3}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="basis-1/3 flex-1"
          >
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web4}
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;

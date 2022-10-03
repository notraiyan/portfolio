import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaResearchgate } from "react-icons/fa";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

const Home: NextPage = () => {
  const openInNewTab = (url: string): void => {
    window.name = "parent-tab";
    window.open(url, "_blank");
  };
  return (
    <>
      <section>
        <div className="text-center p-10 py-10">
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src="/avatar.jpg" layout="fill" objectFit="cover" />
          </div>
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Raiyan Ahmed
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Software Engineer
          </h3>
          <p className="text-md py-5 leading-8 max-w-xl mx-auto md:text-xl">
            Freelancer providing services for programming and design content
            needs. Join me down below and let&apos;s get cracking!
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <AiFillFacebook
              onClick={() => openInNewTab("https://www.facebook.com/R41Y4N/")}
              className="cursor-pointer"
            />
            <AiFillLinkedin
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/raiyan-ahmed/")
              }
              className="cursor-pointer"
            />
            <AiFillGithub
              onClick={() => openInNewTab("https://github.com/notraiyan")}
              className="cursor-pointer"
            />
            <FaResearchgate
              onClick={() =>
                openInNewTab(
                  "https://www.researchgate.net/profile/Raiyan-Ahmed-2"
                )
              }
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8">
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
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Image src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Code your dream project
            </h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let&apos;s make
              it a reality.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1">Portofolio</h3>
          <p className="text-md py-2 leading-8">
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
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web1}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web2}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web3}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web4}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web5}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web6}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

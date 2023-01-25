import { openInNewTab } from "@utils/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

interface NavProps {
  handleClick: () => void;
}
export default function Navbar({ handleClick }: NavProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const path = router.asPath;
  return (
    <nav className="sticky top-0 z-30 bg-inherit py-5 px-5 flex justify-between">
      <motion.h1
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="font-burtons text-2xl"
      >
        <a className="px-4 py-2 ml-2" href="/">
          RaiyanAhmed
        </a>
      </motion.h1>
      <button
        className=" inline-flex pl-3 pr-3 pb-3 rounded md:hidden ml-auto outline-none"
        onClick={() => toggleMenu()}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-20 right-0 bg-inherit min-w-screen md:hidden flex flex-col items-center justify-center space-x-4 space-y-4 z-20 shadow-lg rounded-sm`}
      >
        <a href="/projects" className="text-2xl block p-4">
          Projects
        </a>
        <a href="/experience" className="text-2xl block p-4">
          Experience
        </a>
        <a href="/publications" className="text-2xl block p-4">
          Publications
        </a>
        <a
          onClick={() => openInNewTab("/RaiyanAhmedResume.pdf")}
          className="text-2xl block p-4"
        >
          Resume
        </a>
      </div>
      <motion.ul
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hidden items-center md:flex"
      >
        <li>
          <BsMoonStarsFill onClick={handleClick} className="cursor-pointer" />
        </li>
        <li>
          <a
            className={`px-4 py-2 ml-8 ${
              path.includes("projects") ? "underline underline-offset-8" : ""
            } hover:underline hover:underline-offset-8`}
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={`px-4 py-2 ml-8 ${
              path.includes("experience") ? "underline underline-offset-8" : ""
            } hover:underline hover:underline-offset-8`}
            href="/experience"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            className={`px-4 py-2 ml-8 ${
              path.includes("publications")
                ? "underline underline-offset-8"
                : ""
            } hover:underline hover:underline-offset-8`}
            href="/publications"
          >
            Publications
          </a>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:py-3 hover:cursor-pointer"
            onClick={() => openInNewTab("/RaiyanAhmedResume.pdf")}
          >
            Resume
          </a>
        </li>
      </motion.ul>
    </nav>
  );
}

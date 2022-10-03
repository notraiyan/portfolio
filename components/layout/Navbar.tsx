import { BsMoonStarsFill } from "react-icons/bs";

interface NavProps {
  handleClick: () => void;
}
export default function Navbar({ handleClick }: NavProps): JSX.Element {
  return (
    <nav className="py-5 px-5 flex justify-between dark:text-white">
      <h1 className="font-burtons text-2xl">RaiyanAhmed</h1>
      <button className=" inline-flex p-3 hover:bg-green-600 rounded md:hidden text-white ml-auto hover:text-white outline-none">
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
      <ul className="hidden items-center md:flex">
        <li>
          <BsMoonStarsFill onClick={handleClick} className="cursor-pointer" />
        </li>
        <li>
          <a
            className="px-4 py-2 ml-8 hover:underline hover:underline-offset-8"
            href="#"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="px-4 py-2 ml-8 hover:underline hover:underline-offset-8"
            href="#"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            className="px-4 py-2 ml-8 hover:underline hover:underline-offset-8"
            href="#"
          >
            Publications
          </a>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:py-3"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

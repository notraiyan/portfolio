import Head from "next/head";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : "light"}`}>
      <Head>
        <title>Raiyan&apos;s Portfolio</title>
        <meta name="portfolio" content="Portfolio of Raiyan Ahmed" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Navbar handleClick={toggleDarkMode} />
      <main className=" px-5 md:px-10 lg:px-40">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

import ScrollToTop from "@components/ScrollToTop";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("darkMode");
    setDarkMode(item === "true");
  }, []);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };
  return (
    <div className={`min-h-screen w-full ${darkMode ? "dark" : "light"}`}>
      <Head>
        <title>Raiyan&apos;s Portfolio</title>
        <meta name="portfolio" content="Portfolio of Raiyan Ahmed" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Navbar handleClick={toggleDarkMode} />
      <main className=" px-5 md:px-10 lg:px-40">{children}</main>
      {/* <Footer /> */}
      <ScrollToTop />
    </div>
  );
}

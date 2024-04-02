"use client"
import Link from "next/link"
import React, { useState } from 'react';
import { FULL_NAME, NAV_LINKS } from "@/constants"
import { AnimatePresence, motion } from "framer-motion";
import styles from './styles.module.css'

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuVars = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };


  return (
    <header className="flex items-center justify-center">
      <nav className="flex justify-between items-center py-8 px-8 w-full max-w-screen-md">
        <Link className="flex items-center cursor-pointer" href={'/'}>
          <span className="font-semibold">
            {FULL_NAME}
          </span>
        </Link>

        <div className="lg:flex hidden gap-12 text-md text-zinc-100">

          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              {link.label}
            </Link>
          ))}
        </div>

        {/* <div
          className="cursor-pointer text-md text-black lg:hidden"
          onClick={toggleNav}
        >
          Menu
        </div> */}

        <div className="lg:hidden">
          <button type="button" className="flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={toggleNav}>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
          </button>
        </div>

      </nav>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true }}
            transition={{ duration: 0.8, easeIn: "anticipate" }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 1 },
            }}
            className="fixed left-0 top-0 w-full h-screen origin-top bg-white text-black py-8 px-8 z-50"
          >

            <div className="flex h-full flex-col">

              <div className="flex justify-between items-center w-full max-w-screen-md">
                <Link className="flex items-center cursor-pointer" href={'/'} onClick={toggleNav}>
                  <span className="font-semibold">{FULL_NAME}</span>
                </Link>
                {/* <p
                    className="cursor-pointer text-md text-black"
                    onClick={toggleNav}
                  >
                    Close
                  </p> */}
                <button type="button" className="flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={toggleNav}>
                  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>

              <motion.div
                className="flex justify-center flex-col items-center h-full"
              >
                {NAV_LINKS.map((link, index) => {
                  return (
                    <Link className={styles.project} href={link.href} key={index} onClick={toggleNav}>
                      <h2 className="text-xl">
                        {link.label}
                      </h2>
                    </Link>
                  );
                })}

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

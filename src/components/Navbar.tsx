"use client"
import Link from "next/link"
import React, { useState } from 'react';
import { FULL_NAME, NAV_LINKS } from "@/constants"
import { AnimatePresence, motion } from "framer-motion";


const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="flex items-center justify-center">
      <nav className="flex justify-between items-center py-8 px-8 w-full max-w-[75rem]">
        <div className="flex items-center">
          <span className="font-semibold">
            {FULL_NAME}
          </span>
        </div>

        <div className="lg:flex hidden gap-12 text-md text-zinc-400">

          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              {link.label}
            </Link>
          ))}
        </div>

        <div
          className="cursor-pointer text-md text-black lg:hidden"
          onClick={toggleNav}
        >
          Menu
        </div>
      </nav>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-white text-black z-50"
          >

            <div className="flex h-full flex-col">
              <div className="flex items-center justify-center">
                <div className="flex justify-between py-8 px-8 w-full max-w-[75rem]">
                  <span className="font-semibold">{FULL_NAME}</span>
                  <p
                    className="cursor-pointer text-md text-black"
                    onClick={toggleNav}
                  >
                    Close
                  </p>
                </div>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {NAV_LINKS.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.label}
                        href={link.href}
                      />
                    </div>
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
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }: any) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};


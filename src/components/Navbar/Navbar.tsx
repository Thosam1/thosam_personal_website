'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { FULL_NAME, NAV_LINKS } from '@/constants'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './navbar.module.css'
import { fadeUpVariant } from '@/animations/animations';
import Image from "next/image";

const Navbar: React.FC = () => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	useEffect(() => {
		document.body.style.overflow = isNavOpen ? "hidden" : "unset";
	}, [isNavOpen]);

	return (
		<header className={`flex justify-center w-full top-0`}>
			<nav className="flex justify-between items-center py-2 lg:py-6 px-8 w-full max-w-300">
				<Link className="flex items-center cursor-pointer" href={'/'}>
            <div className="font-semibold items-center">
              {/*{FULL_NAME}*/}
				<Image
					src="/home/tenzin_thosam_himalaya_m.svg"
					alt="Tenzin Thosam"
					width={180}
					height={0}
					priority
				/>
            </div>
				</Link>

				{/* What we see on larger screen */}
				<div className="lg:flex hidden gap-12 text-md">
					{NAV_LINKS.map((link) => (
						<Link href={link.href} key={link.key}
							  className="font-medium hover:text-gray-600 py-3 md:py-6">
							{link.label}
						</Link>
					))}
				</div>

				{/* Navbar button */}
				{/* Check out globals.css for hamburger transition */}
				<input
					type="checkbox"
					name="hamburger"
					id="hamburger"
					className="peer"
					hidden
					checked={isNavOpen}
					onChange={toggleNav}
				/>
				<label
					htmlFor="hamburger"
					className={`peer-checked:hamburger block z-50 p-6 -mr-6 cursor-pointer lg:hidden relative`}
				>
					<div
						// aria-hidden="true"
						className={`m-auto h-0.5 w-6 rounded-xs bg-black transition duration-300`}
					></div>
					<div
						// aria-hidden="true"
						className={`m-auto mt-2 h-0.5 w-6 rounded-xs bg-black transition duration-300`}
					></div>
				</label>
			</nav>

			{/* Mobile Navbar */}
			<AnimatePresence>
				{isNavOpen && (
					<motion.div
						initial="hidden"
						whileInView="visible"
						exit="hidden"
						animate={isNavOpen ? 'visible' : 'hidden'}
						viewport={{ once: false }}
						transition={{ duration: 0.2, ease: 'easeOut' }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 1 },
						}}
					>
						<div
							className="fixed left-0 top-0 w-full h-screen origin-top bg-white text-black py-8 px-8 z-10">
							<div className="flex h-full flex-col">
								<div
									className="flex justify-center flex-col items-center h-full">
									{NAV_LINKS.map((link, index) => {
										return (
											<motion.div
												initial="initial"
												animate="animate"
												variants={fadeUpVariant(0.2 * index + 0.4)}
												key={link.key}
											>
												<Link className={styles.project} href={link.href}
													  onClick={toggleNav}>
													<h2 className="text-xl">
														{link.label}
													</h2>
												</Link>
											</motion.div>
										);
									})}
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;



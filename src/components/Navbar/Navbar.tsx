'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FULL_NAME, NAV_LINKS } from '@/constants'
import styles from './navbar.module.css'
import Image from "next/image";
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';
import { gsap, useGSAP } from '@/animations/gsapAnimations';
import { getLenis } from '@/components/SmoothScroll';

const Navbar: React.FC = () => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const navItemsRef = useRef<HTMLDivElement>(null);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	useEffect(() => {
		setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect -- Standard hydration guard for next-themes
	}, []);

	useEffect(() => {
		const lenis = getLenis();
		if (isNavOpen) {
			document.body.style.overflow = "hidden";
			lenis?.stop();
		} else {
			document.body.style.overflow = "unset";
			lenis?.start();
		}
	}, [isNavOpen]);

	// Animate mobile menu links on mount (menu is conditionally rendered)
	useEffect(() => {
		if (!isNavOpen || !navItemsRef.current) return;

		const items = navItemsRef.current.children;
		if (items.length > 0) {
			gsap.fromTo(items,
				{ y: 20, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					stagger: 0.2,
					delay: 0.4,
					ease: 'power2.out',
				}
			);
		}
	}, [isNavOpen]);

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

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
					className="dark:invert"
					style={{ height: 'auto' }}
				/>
            </div>
				</Link>

				{/* What we see on larger screen */}
				<div className="lg:flex hidden gap-12 text-md items-center">
					{NAV_LINKS.map((link) => (
						<Link href={link.href} key={link.key}
							  className="font-medium hover:text-text-subdued py-3 md:py-6">
							{link.label}
						</Link>
					))}
					{/* Theme toggle - desktop */}
					{mounted && (
						<button
							onClick={toggleTheme}
							className="p-2 rounded-lg hover:bg-bg-highlight transition-colors"
							aria-label="Toggle dark mode"
						>
							{theme === 'dark' ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
						</button>
					)}
				</div>

				<div className="flex items-center gap-2 lg:hidden">
					{/* Theme toggle - mobile */}
					{mounted && (
						<button
							onClick={toggleTheme}
							className="p-2 rounded-lg hover:bg-bg-highlight transition-colors"
							aria-label="Toggle dark mode"
						>
							{theme === 'dark' ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
						</button>
					)}

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
						className={`peer-checked:hamburger block z-50 p-6 -mr-6 cursor-pointer relative`}
					>
						<div
							className={`m-auto h-0.5 w-6 rounded-xs bg-text-primary transition duration-300`}
						></div>
						<div
							className={`m-auto mt-2 h-0.5 w-6 rounded-xs bg-text-primary transition duration-300`}
						></div>
					</label>
				</div>
			</nav>

			{/* Mobile Navbar — only mounted when open */}
			{isNavOpen && (
				<div
					ref={mobileMenuRef}
					className="fixed left-0 top-0 w-full h-dvh origin-top bg-bg-base text-text-primary py-8 px-8 z-10"
				>
					<div className="flex h-full flex-col">
						<div
							ref={navItemsRef}
							className="flex justify-center flex-col items-center h-full">
							{NAV_LINKS.map((link) => {
								return (
									<div key={link.key}>
										<Link className={styles.project} href={link.href}
											  onClick={toggleNav}>
											<h2 className="text-xl">
												{link.label}
											</h2>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;

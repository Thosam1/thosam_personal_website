"use client"
import React, { useState, useEffect } from "react";
import { FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton: React.FC = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.pageYOffset);
		};

		window.addEventListener("scroll", updatePosition, { passive: true });

		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	const scrollToTop = () => {
		document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{scrollPosition > 100 && (
				<div className="fixed bottom-12 right-12 lg:right-24 z-20">
					<motion.button
						onClick={scrollToTop}
						className="flex items-center justify-center w-12 h-12 bg-blue-950 text-slate-200 rounded-full shadow-lg cursor-pointer"
						initial={{ y: 40, opacity: 0 }}
						animate={{ y: 0, opacity: 1, transition: { duration: 1.2 } }}
						exit={{ y: -400, rotate: -45, opacity: 0, transition: { duration: 0.8 } }}
						whileHover={{
							scale: 1.2,
							rotate: -45,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 1.5, rotate: -45 }}
					>
						<FaRocket />
					</motion.button>
				</div>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTopButton;

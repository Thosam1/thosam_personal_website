"use client"
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaRocket } from "react-icons/fa";
import { gsap } from "@/animations/gsapAnimations";
import { getLenis } from "@/components/SmoothScroll";

const ScrollToTopButton: React.FC = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const wasVisible = useRef(false);
	const isAnimating = useRef(false);

	const isVisible = scrollPosition > 100;

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.pageYOffset);
		};
		window.addEventListener("scroll", updatePosition, { passive: true });
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	// Enter / exit animations
	useEffect(() => {
		if (!buttonRef.current) return;
		if (isAnimating.current) return;

		if (isVisible && !wasVisible.current) {
			// Enter: fade up from below
			wasVisible.current = true;
			gsap.killTweensOf(buttonRef.current);
			gsap.fromTo(buttonRef.current,
				{ y: 40, opacity: 0, rotation: 0, scale: 1 },
				{ y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
			);
		} else if (!isVisible && wasVisible.current) {
			// Exit: fly up and away while rotating
			wasVisible.current = false;
			gsap.killTweensOf(buttonRef.current);
			gsap.to(buttonRef.current, {
				y: -400,
				rotation: -45,
				opacity: 0,
				duration: 0.8,
				ease: "power2.in",
			});
		}
	}, [isVisible]);

	// Hover animations
	const handleMouseEnter = useCallback(() => {
		if (!buttonRef.current || isAnimating.current) return;
		gsap.to(buttonRef.current, {
			scale: 1.2,
			rotation: -45,
			duration: 0.2,
			ease: "power2.out",
		});
	}, []);

	const handleMouseLeave = useCallback(() => {
		if (!buttonRef.current || isAnimating.current) return;
		gsap.to(buttonRef.current, {
			scale: 1,
			rotation: 0,
			duration: 0.2,
			ease: "power2.out",
		});
	}, []);

	// Click: fly up animation, then scroll
	const scrollToTop = useCallback(() => {
		if (!buttonRef.current) return;
		isAnimating.current = true;
		wasVisible.current = false;

		gsap.to(buttonRef.current, {
			y: -400,
			rotation: -45,
			opacity: 0,
			scale: 1.5,
			duration: 0.8,
			ease: "power2.in",
			onComplete: () => {
				isAnimating.current = false;
			},
		});

		const lenis = getLenis();
		if (lenis) {
			lenis.scrollTo(0, { duration: 1.2 });
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, []);

	return (
		<div className="fixed bottom-12 right-12 lg:right-24 z-20">
			<button
				ref={buttonRef}
				onClick={scrollToTop}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className="flex items-center justify-center w-12 h-12 bg-blue-950 text-slate-200 rounded-full shadow-lg cursor-pointer"
				style={{ opacity: 0, transform: "translateY(40px)" }}
			>
				<FaRocket />
			</button>
		</div>
	);
};

export default ScrollToTopButton;

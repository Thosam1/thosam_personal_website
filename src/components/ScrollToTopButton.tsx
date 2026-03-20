"use client"
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaRocket } from "react-icons/fa";
import { gsap } from "@/animations/gsapAnimations";
import { getLenis } from "@/components/SmoothScroll";

const RING_RADIUS = 25;
const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const ScrollToTopButton: React.FC = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const flameRef = useRef<HTMLSpanElement>(null);
	const progressRef = useRef<SVGCircleElement>(null);
	const flameTweenRef = useRef<gsap.core.Tween | null>(null);
	const wasVisible = useRef(false);
	const isAnimating = useRef(false);

	const isVisible = scrollPosition > 100;

	// Scroll + resize listener with direct progress ring update
	useEffect(() => {
		const updatePosition = () => {
			const y = window.pageYOffset;
			setScrollPosition(y);

			if (progressRef.current) {
				const docHeight = document.documentElement.scrollHeight;
				const winHeight = window.innerHeight;
				const scrollable = docHeight - winHeight;
				const pct = scrollable > 0 ? Math.min(y / scrollable, 1) : 0;
				progressRef.current.setAttribute(
					"stroke-dashoffset",
					String(CIRCUMFERENCE * (1 - pct))
				);
			}
		};

		window.addEventListener("scroll", updatePosition, { passive: true });
		window.addEventListener("resize", updatePosition, { passive: true });
		return () => {
			window.removeEventListener("scroll", updatePosition);
			window.removeEventListener("resize", updatePosition);
		};
	}, []);

	// Cleanup flame tween on unmount
	useEffect(() => {
		return () => {
			if (flameTweenRef.current) {
				flameTweenRef.current.kill();
			}
		};
	}, []);

	// Enter / exit animations — target containerRef
	useEffect(() => {
		if (!containerRef.current) return;
		if (isAnimating.current) return;

		if (isVisible && !wasVisible.current) {
			// Enter: fade up from below
			wasVisible.current = true;
			gsap.killTweensOf(containerRef.current);
			gsap.fromTo(containerRef.current,
				{ y: 40, opacity: 0, scale: 1 },
				{ y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
			);
		} else if (!isVisible && wasVisible.current) {
			// Exit: fly up and away while rotating
			wasVisible.current = false;
			gsap.killTweensOf(containerRef.current);

			// Clean up flame
			if (flameTweenRef.current) {
				flameTweenRef.current.kill();
				flameTweenRef.current = null;
			}
			if (flameRef.current) {
				gsap.set(flameRef.current, { opacity: 0 });
			}

			gsap.to(containerRef.current, {
				y: -400,
				opacity: 0,
				duration: 0.8,
				ease: "power2.in",
			});
		}
	}, [isVisible]);

	// Hover animations — target buttonRef (ring stays static)
	const handleMouseEnter = useCallback(() => {
		if (!buttonRef.current || isAnimating.current) return;
		gsap.to(buttonRef.current, {
			scale: 1.2,
			duration: 0.2,
			ease: "power2.out",
		});

		// Flame appears and pulses
		if (flameRef.current) {
			gsap.to(flameRef.current, {
				opacity: 1,
				duration: 0.15,
				ease: "power2.out",
			});
			flameTweenRef.current = gsap.to(flameRef.current, {
				scaleY: 1.3,
				scaleX: 0.85,
				duration: 0.3,
				ease: "sine.inOut",
				yoyo: true,
				repeat: -1,
				transformOrigin: "top center",
			});
		}
	}, []);

	const handleMouseLeave = useCallback(() => {
		if (!buttonRef.current || isAnimating.current) return;
		gsap.to(buttonRef.current, {
			scale: 1,
			duration: 0.2,
			ease: "power2.out",
		});

		// Flame fades out
		if (flameTweenRef.current) {
			flameTweenRef.current.kill();
			flameTweenRef.current = null;
		}
		if (flameRef.current) {
			gsap.to(flameRef.current, {
				opacity: 0,
				scaleY: 1,
				scaleX: 1,
				duration: 0.15,
				ease: "power2.in",
			});
		}
	}, []);

	// Click: fly up animation, then scroll — target containerRef
	const scrollToTop = useCallback(() => {
		if (!containerRef.current) return;
		isAnimating.current = true;
		wasVisible.current = false;

		// Kill flame pulse
		if (flameTweenRef.current) {
			flameTweenRef.current.kill();
			flameTweenRef.current = null;
		}

		// Brief flame burst before launch
		if (flameRef.current) {
			gsap.to(flameRef.current, {
				opacity: 1,
				scaleY: 1.8,
				scaleX: 1.2,
				duration: 0.15,
				ease: "power2.out",
			});
		}

		gsap.to(containerRef.current, {
			y: -400,
			opacity: 0,
			scale: 1.5,
			duration: 0.8,
			ease: "power2.in",
			onComplete: () => {
				isAnimating.current = false;
				// Reset for next appearance
				if (buttonRef.current) {
					gsap.set(buttonRef.current, { scale: 1 });
				}
				if (flameRef.current) {
					gsap.set(flameRef.current, { opacity: 0, scaleY: 1, scaleX: 1 });
				}
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
			<div
				ref={containerRef}
				className="relative inline-flex items-center justify-center"
				style={{ opacity: 0, transform: "translateY(40px)" }}
			>
				{/* Progress ring */}
				<svg
					className="absolute w-14 h-14 -top-1 -left-1 pointer-events-none"
					viewBox="0 0 56 56"
					style={{ transform: "rotate(-90deg)" }}
				>
					<circle
						cx="28"
						cy="28"
						r={RING_RADIUS}
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						className="text-white/10"
					/>
					<circle
						ref={progressRef}
						cx="28"
						cy="28"
						r={RING_RADIUS}
						fill="none"
						stroke="var(--color-accent)"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeDasharray={CIRCUMFERENCE}
						strokeDashoffset={CIRCUMFERENCE}
					/>
				</svg>

				{/* Button */}
				<button
					ref={buttonRef}
					onClick={scrollToTop}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className="relative flex items-center justify-center w-12 h-12 bg-blue-950 text-slate-200 rounded-full shadow-lg cursor-pointer"
				>
					<FaRocket style={{ transform: "rotate(-45deg)" }} />
					{/* Rocket flame */}
					<span
						ref={flameRef}
						className="absolute pointer-events-none"
						style={{ bottom: "2px", left: "50%", transform: "translateX(-50%)", width: "14px", height: "20px", opacity: 0 }}
					>
						<span
							className="absolute inset-0 rounded-full"
							style={{
								background: "radial-gradient(ellipse at center, rgba(251,146,60,0.9) 0%, rgba(251,146,60,0.4) 40%, transparent 70%)",
								filter: "blur(3px)",
							}}
						/>
						<span
							className="absolute rounded-full"
							style={{
								top: "20%",
								left: "25%",
								width: "50%",
								height: "40%",
								background: "radial-gradient(ellipse at center, rgba(254,243,199,0.95) 0%, rgba(251,191,36,0.7) 60%, transparent 100%)",
								filter: "blur(1px)",
							}}
						/>
					</span>
				</button>
			</div>
		</div>
	);
};

export default ScrollToTopButton;

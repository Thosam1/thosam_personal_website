"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, ScrollTrigger } from "@/animations/gsapAnimations";

type AnimatedCounterProps = {
	from: number;
	to: number;
};

const AnimatedCounter = ({ from, to }: AnimatedCounterProps) => {
	const ref = useRef<HTMLSpanElement>(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		// Set initial value
		element.textContent = String(from);

		// If reduced motion is enabled
		if (window.matchMedia("(prefers-reduced-motion)").matches) {
			element.textContent = String(to);
			return;
		}

		const trigger = ScrollTrigger.create({
			trigger: element,
			start: "top 90%",
			once: true,
			onEnter: () => {
				if (hasAnimated) return;
				setHasAnimated(true);

				const obj = { value: from };
				gsap.to(obj, {
					value: to,
					duration: 1,
					ease: "power2.out",
					snap: { value: 1 },
					onUpdate: () => {
						if (element) {
							element.textContent = String(Math.round(obj.value));
						}
					},
				});
			},
		});

		return () => {
			trigger.kill();
		};
	}, [from, to, hasAnimated]);

	return <span ref={ref} />;
};

export default AnimatedCounter;

"use client";
import { useRef, ReactNode } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/animations/gsapAnimations";

export const FadeInAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;
        gsap.fromTo(ref.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, { scope: ref });

    return (
        <div ref={ref} style={{ opacity: 0 }}>
            {children}
        </div>
    );
};

export default FadeInAnimation;

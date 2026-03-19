"use client";
import { useRef, ReactNode } from "react";
import { useGSAP, gsap } from "@/animations/gsapAnimations";

export const ZoomIntroAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;
        gsap.from(ref.current, {
            opacity: 0,
            scale: 0.5,
            duration: 2.0,
            ease: "power2.out",
        });
    }, { scope: ref });

    return (
        <div ref={ref}>
            {children}
        </div>
    );
};

export default ZoomIntroAnimation;

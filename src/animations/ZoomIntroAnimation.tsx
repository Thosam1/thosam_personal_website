"use client";
import {motion} from "framer-motion";
import {ReactNode} from "react";

export const ZoomIntroAnimation = ({children}: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1.0}}
            transition={{duration: 2.0, ease: "anticipate"}}
        >
            {children}
        </motion.div>
    );
};

export default ZoomIntroAnimation;

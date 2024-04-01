"use client";
import {motion} from "framer-motion";
import {ReactNode} from "react";

export const FadeInAnimation = ({children}: { children: ReactNode }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{duration: 0.8, ease: "anticipate"}}
            variants={{
                visible: {opacity: 1, scale: 1},
                hidden: {opacity: 0, scale: 1},
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInAnimation;

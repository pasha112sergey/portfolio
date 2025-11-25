import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaGithub, FaBootstrap, FaNodeJs, FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDjango, SiPython } from "react-icons/si";
import { motion } from "framer-motion";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { TbBrandDjango } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiC } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import HoverTech from "./HoverTech";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Languages and Technologies
            </motion.h1>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap justify-center gap-4"
            >
                {/* C */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6"
                >
                    <a href="#portfolio">
                        <HoverTech name={"C"}>
                            <SiC className="text-red-300 text-7xl" />
                        </HoverTech>
                    </a>
                </motion.div>
                {/* Python */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6"
                >
                    <a href="#python-tkinter">
                        <HoverTech name={"Python"}>
                            <SiPython className="text-yellow-500 text-7xl" />
                        </HoverTech>
                    </a>
                </motion.div>
                {/* Java */}
                <motion.div
                    variants={iconVariants(2.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6"
                >
                    <HoverTech name={"Java"}>
                        <FaJava className="text-red-500 text-7xl" />
                    </HoverTech>
                </motion.div>
                {/* C++ */}
                <motion.div
                    variants={iconVariants(2.7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6 px-7"
                >
                    <a href="#game">
                        <HoverTech name={"C++"}>
                            <TbBrandCpp className="text-blue-500 text-7xl" />
                        </HoverTech>
                    </a>
                </motion.div>
                {/* HTML */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6 px-7"
                >
                    <a href="#ascii">
                        <HoverTech name={"HTML"}>
                            <FaHtml5 className="text-orange-500 text-7xl" />
                        </HoverTech>
                    </a>
                </motion.div>
                {/* ReactJs */}
                <motion.div
                    variants={iconVariants(2.3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6"
                >
                    <a href="#portfolio">
                        <HoverTech name={"React"}>
                            <RiReactjsLine className="rounded-full shadow-black text-cyan-500 text-7xl" />
                        </HoverTech>
                    </a>
                </motion.div>
                {/* Assembly */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6"
                >
                    <a href="#portfolio">
                        <HoverTech name={"MIPS Assembly"}>
                            <FaScrewdriverWrench className="text-purple-600 text-7xl" />
                        </HoverTech>
                    </a>
                </motion.div>
                {/* GitHub */}
                <motion.div
                    variants={iconVariants(2.1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6"
                >
                    <a href="#ascii">
                        <HoverTech name={"GitHub"} invert={true}>
                            <FaGithub className="text-7xl " />
                        </HoverTech>
                    </a>
                </motion.div>
                {/* Tailwind */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6"
                >
                    <a href="#portfolio">
                        <HoverTech name={"Tailwind"}>
                            <SiTailwindcss className="text-cyan-300 text-7xl" />
                        </HoverTech>
                    </a>
                </motion.div>

                {/* NodeJS */}
                <motion.div
                    variants={iconVariants(2.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-full flex items-center border-4 border-neutral-900 p-6"
                >
                    <a href="#ascii">
                        <HoverTech name={"NodeJS"}>
                            <FaNodeJs className="text-green-500 text-7xl" />
                        </HoverTech>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;

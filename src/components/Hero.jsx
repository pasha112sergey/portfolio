import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/jurassic.png";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard";
import HoverCard from "./HoverCard";
const container = (delay) => ({
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay },
    },
});

const text =
    "I love going to NYC's Museum of Natural History. Here is me next to a velociraptor!";
const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex flex-col items-center lg:items-start lg:text-left">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl mx-auto text-center"
                        >
                            Sergey Safronov
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Aspiring Software Engineer and Financial Analyst
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="text-lg my-2 max-w-xl py-6 font-light tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <ThreeDCard hoverScale={1} rotateDivisor={150}>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                className="shadow-lg"
                            >
                                <HoverCard
                                    image={profilePic}
                                    text={text}
                                ></HoverCard>
                            </motion.div>
                        </ThreeDCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

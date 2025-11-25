import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import conference from "../assets/conference.png";
import ThreeDCard from "./ThreeDCard";
import HoverCard from "./HoverCard";

const conferenceText =
    "This summer I attended CodePath's Emerging Engineers Summit in NYC! Check out my post on LinkedIn detailing the experience.";

const brotherText =
    "This is my brother and I when we saw Once Upon a Time in Hollywood together!";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-full lg:px-8"
                >
                    <div className="flex items-center justify-center gap-3 pb-9">
                        <ThreeDCard hoverScale={1} rotateDivisor={150}>
                            <HoverCard
                                image={aboutImg}
                                text={brotherText}
                            ></HoverCard>
                        </ThreeDCard>
                        <ThreeDCard hoverScale={1} rotateDivisor={150}>
                            <HoverCard
                                image={conference}
                                text={conferenceText}
                            ></HoverCard>
                        </ThreeDCard>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-full"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p
                            className="my-2 maxw-xl py-6"
                            style={{ whiteSpace: "pre-line" }}
                        >
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

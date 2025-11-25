import clubimg from "../assets/skateclub.png";
import { InstagramEmbed } from "react-social-media-embed";
import { CLUB } from "../constants";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard"; // adjust the path based on where your file is located
import HoverCard from "./HoverCard";

const clubText =
    "This is me landing my first fakie heelflip at a skate club meeting last semester!";
const Clubs = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Extracurricular
                <span className="text-neutral-500"> Involvement</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <ThreeDCard rotateDivisor={150} hoverScale={1.05}>
                            <a href="https://www.instagram.com/sbuskate/">
                                <HoverCard
                                    image={clubimg}
                                    text={clubText}
                                ></HoverCard>
                            </a>
                        </ThreeDCard>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex flex-col justify-center lg:justify-start space-y-4">
                        <p className="my-2 maxw-xl py-3 border-b border-neutral-500">
                            {CLUB.description}
                        </p>
                        <h1 className="text-center font-bold">{CLUB.hook}</h1>
                        <div className="flex flex-col lg:flex-row justify-center items-center">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="rounded-s-lg"
                            >
                                <ThreeDCard
                                    rotateDivisor={150}
                                    hoverScale={1.05}
                                >
                                    <InstagramEmbed
                                        url={CLUB.urls[0]}
                                        className=" max-w-[400px] scale-75 mx-auto"
                                    />
                                </ThreeDCard>
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="rounded-s-lg"
                            >
                                <ThreeDCard
                                    rotateDivisor={150}
                                    hoverScale={1.05}
                                >
                                    <InstagramEmbed
                                        url={CLUB.urls[2]}
                                        className=" max-w-[400px] scale-75 mx-auto"
                                    />
                                </ThreeDCard>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Clubs;

import React from "react";
import { motion } from "framer-motion";

export default function PopUpTab({ text }) {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    width: "85%",
                    paddingTop: "8px",
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%, -100%)", // Center horizontally and position above
                    zIndex: 10, // Ensure it's above other elements
                    pointerEvents: "auto",
                }}
            >
                <div>
                    <motion.div
                        className="py-1 px-3 text-lg rounded-3xl z-10"
                        animate={{
                            backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%",
                            ],
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        style={{
                            transform: "translate(-50%)", // Center horizontally and vertically
                            background:
                                "linear-gradient(-30deg, #d62964, #ab38c7, #292f88, #20b7df)",
                            backgroundSize: "400% 400%",
                            // position: "",
                            zIndex: 10, // Above the arrow
                        }}
                    >
                        <p className="p-2 text-sm text-transparent bg-clip-text bg-gradient-to-r  from-yellow-100 via-white to-yellow-100 text-center">
                            {text}
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

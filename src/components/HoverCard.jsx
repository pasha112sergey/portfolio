import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PopUpTab from "./PopUpTab";
export default function HoverCard({ text, image }) {
    const [isHovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative inline-block">
                <img
                    src={image}
                    alt="image"
                    className="rounded-3xl scale-95"
                ></img>
                {isHovered && <PopUpTab text={text}></PopUpTab>}
            </div>
        </div>
    );
}

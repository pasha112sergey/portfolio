import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import TechTab from "./TechTab";

const HoverTech = ({ children, name, invert = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const childRef = useRef(null);

    // Measure on mount or whenever children change
    useEffect(() => {
        let frameId;

        function measure() {
            if (childRef.current) {
                const rect = childRef.current.getBoundingClientRect();
                setPos({
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                    width: rect.width,
                    height: rect.height,
                });
            }
            // Schedule the next frame
            frameId = requestAnimationFrame(measure);
        }

        // Start the loop
        frameId = requestAnimationFrame(measure);

        // Cleanup on unmount
        return () => {
            cancelAnimationFrame(frameId);
        };
    }, []);

    // Basic hover via mouse events
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        invert = false;
    };

    // Track pointer globally (only when hovered)
    useEffect(() => {
        if (!isHovered) return;

        function handleMouseMove(e) {
            setMousePos({ x: e.clientX, y: e.clientY });
        }

        function checkStillHovered() {
            if (!childRef.current) return;

            const rect = childRef.current.getBoundingClientRect();
            // If the mouse is outside the bounding box, un-hover
            if (
                mousePos.x < rect.left ||
                mousePos.x > rect.right ||
                mousePos.y < rect.top ||
                mousePos.y > rect.bottom
            ) {
                setIsHovered(false);
            }
        }

        // Attach listeners
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", checkStillHovered, true);

        // On every mouse move or scroll, re-check bounding box
        // We'll do that on a small delay so we have updated mousePos
        const intervalId = setInterval(() => {
            checkStillHovered();
        }, 50);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", checkStillHovered, true);
            clearInterval(intervalId);
        };
    }, [isHovered, mousePos.x, mousePos.y]);

    // For a "light column + circle" effect,
    // let's define the final shapes' measurements
    const diameter = Math.max(pos.width, pos.height) * 1.3;

    return (
        <div
            ref={childRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative", display: "inline-block" }}
        >
            {/* If hovered, portal the beam + circle */}
            {isHovered &&
                createPortal(
                    <div>
                        <div>
                            {/* The vertical beam (top->element) */}

                            <motion.div
                                className="rounded-b-full"
                                initial={{ opacity: 0, scaleY: 0 }}
                                animate={{ opacity: 0.4, scaleY: 1.05 }}
                                exit={{ opacity: 0, scaleY: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: "fixed",
                                    top: 0,
                                    left: pos.x - 45, // center a ~80px wide
                                    width: 90,
                                    height: pos.y,
                                    backgroundImage:
                                        "linear-gradient(to bottom, rgba(255,255,255,.15), rgba(255,255,255,1))",
                                    // filter: "blur(20px)",
                                    transformOrigin: "top center",
                                    pointerEvents: "none",
                                    zIndex: -1, // Changed from 0 to -1
                                }}
                            ></motion.div>

                            {/* The blurred circle at the element center */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1.1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: "fixed",
                                    top: pos.y - diameter / 2,
                                    left: pos.x - diameter / 2,
                                    width: diameter,
                                    height: diameter,
                                    backgroundColor: "white",
                                    borderRadius: "9999px",
                                    pointerEvents: "none",
                                    zIndex: -1,
                                }}
                            ></motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }} // Adjust as needed
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <TechTab
                                name={name}
                                position={{
                                    x: pos.x,
                                    y: pos.y + diameter / 2 + 20,
                                }} // Adjust as needed
                            />
                        </motion.div>
                    </div>,

                    document.body
                )}
            {/* Render the child icon with higher z-index */}
            {invert === true && isHovered ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: "relative",
                        zIndex: 1,
                        color: "black",
                    }}
                    className="shadow-black"
                >
                    {children}
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: "relative",
                        zIndex: 1, // Since invert is not 1
                    }}
                    className="shadow-black"
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export default HoverTech;

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const BirdCursor = () => {
    const { theme } = useTheme();
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isMobile, setIsMobile] = useState(false);
    const [rotation, setRotation] = useState(0);

    // Spring physics configuration
    const springConfig = { damping: 40, stiffness: 60, mass: 1.5 };
    const birdX = useSpring(-100, springConfig);
    const birdY = useSpring(-100, springConfig);

    // Mobile scroll config
    const { scrollYProgress, scrollY } = useScroll();
    const mobileY = useTransform(scrollYProgress, [0, 1], ["10vh", "85vh"]);
    const smoothMobileY = useSpring(mobileY, { damping: 20, stiffness: 100 });

    const prevScrollY = useRef(0);
    const [mobileRotation, setMobileRotation] = useState(180);

    // Track scroll direction for mobile rotation
    useEffect(() => {
        if (!isMobile) return;

        const unsubscribe = scrollY.on("change", (latest) => {
            const current = latest;
            const previous = prevScrollY.current;

            if (current > previous + 5) {
                // Scrolling down -> bird faces down
                setMobileRotation(180);
            } else if (current < previous - 5) {
                // Scrolling up -> bird faces up
                setMobileRotation(0);
            }

            prevScrollY.current = current;
        });

        return () => unsubscribe();
    }, [isMobile, scrollY]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            birdX.set(e.clientX);
            birdY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [birdX, birdY]);

    // Handle rotation calculating angle towards target mouse position
    useEffect(() => {
        let animationFrameId: number;

        const updateRotation = () => {
            const bx = birdX.get();
            const by = birdY.get();
            const dx = mousePos.x - bx;
            const dy = mousePos.y - by;

            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 5) {
                const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
                setRotation(angle);
            }

            animationFrameId = requestAnimationFrame(updateRotation);
        };

        if (!isMobile) {
            animationFrameId = requestAnimationFrame(updateRotation);
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [mousePos, birdX, birdY, isMobile]);

    const isLight = theme === "light";

    if (isMobile) {
        return (
            <motion.div
                className={`fixed top-0 right-4 w-16 h-16 z-[9999] pointer-events-none transition-all ${
                    isLight
                        ? "drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
                        : "drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                }`}
                style={{
                    y: smoothMobileY,
                }}
                animate={{ rotate: mobileRotation }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <BirdSVG isLight={isLight} />
            </motion.div>
        );
    }

    // Hide entirely if mouse hasn't entered the window yet on desktop
    if (!isMobile && mousePos.x === -100 && mousePos.y === -100) {
        return null;
    }

    return (
        <motion.div
            className={`fixed top-0 left-0 w-24 h-24 z-[9999] pointer-events-none transition-all ${
                isLight
                    ? "drop-shadow-[0_6px_14px_rgba(0,0,0,0.3)]"
                    : "drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
            }`}
            style={{
                x: birdX,
                y: birdY,
                translateX: "-50%",
                translateY: "-50%",
                rotate: rotation,
            }}
        >
            <BirdSVG isLight={isLight} />
        </motion.div>
    );
};

// Flying bird SVG adapting to Light (solid black) and Dark (glowing white) themes
const BirdSVG = ({ isLight }: { isLight: boolean }) => {
    const bodyFill = isLight ? "#111111" : "#ffffff";
    const bodyStroke = isLight ? "#000000" : "#dddddd";
    const wingFill = isLight ? "#1f1f23" : "#fdfdfd";
    const wingStroke = isLight ? "#09090b" : "#eeeeee";
    const tailStroke = isLight ? "#3f3f46" : "#cccccc";

    return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible transition-colors duration-300">
            {/* Body / Tail */}
            <path
                d="M50 20 L40 60 L35 90 L50 80 L65 90 L60 60 Z"
                fill={bodyFill}
                stroke={bodyStroke}
                strokeWidth="1.2"
            />

            {/* Head / Beak */}
            <path
                d="M48 25 L50 5 L52 25 Z"
                fill={bodyFill}
                stroke={bodyStroke}
                strokeWidth="1.2"
            />

            {/* Left Wing */}
            <motion.path
                d="M40 40 Q20 30 5 15 Q15 60 40 60 Z"
                fill={wingFill}
                stroke={wingStroke}
                strokeWidth="1.2"
                // Flapping animation
                animate={{
                    d: [
                        "M40 40 Q20 30 5 15 Q15 60 40 60 Z", // Up
                        "M40 40 Q20 40 10 50 Q15 60 40 60 Z", // Down
                        "M40 40 Q20 30 5 15 Q15 60 40 60 Z"  // Up
                    ]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            />

            {/* Right Wing */}
            <motion.path
                d="M60 40 Q80 30 95 15 Q85 60 60 60 Z"
                fill={wingFill}
                stroke={wingStroke}
                strokeWidth="1.2"
                // Flapping animation mirrored
                animate={{
                    d: [
                        "M60 40 Q80 30 95 15 Q85 60 60 60 Z", // Up
                        "M60 40 Q80 40 90 50 Q85 60 60 60 Z", // Down
                        "M60 40 Q80 30 95 15 Q85 60 60 60 Z"  // Up
                    ]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            />

            {/* Detail lines on tail */}
            <path d="M45 75 L42 85 M50 78 L50 90 M55 75 L58 85" stroke={tailStroke} strokeWidth="1" />
        </svg>
    );
};

export default BirdCursor;

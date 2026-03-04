import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

const BirdCursor = () => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isMobile, setIsMobile] = useState(false);
    const [rotation, setRotation] = useState(0);

    // Use a very high damping and very low stiffness for a "floaty", "laggy" delay
    const springConfig = { damping: 40, stiffness: 60, mass: 1.5 };
    const birdX = useSpring(-100, springConfig);
    const birdY = useSpring(-100, springConfig);

    // Mobile scroll config
    const { scrollYProgress, scrollY } = useScroll();
    const mobileY = useTransform(scrollYProgress, [0, 1], ["10vh", "85vh"]);
    // Smooth out the scroll movement
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

    const prevMousePos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        // Hide the bird entirely on mobile as requested (touch devices don't have cursors)
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

    // Handle rotation calculating the angle between the lagging bird position and the target mouse position
    useEffect(() => {
        let animationFrameId: number;

        const updateRotation = () => {
            const bx = birdX.get();
            const by = birdY.get();
            const dx = mousePos.x - bx;
            const dy = mousePos.y - by;

            // Only adjust rotation if there is a meaningful distance to cover
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 5) {
                // Calculate angle in degrees.
                // Math.atan2 returns angle in radians from X-axis.
                // We add 90 degrees because our SVG bird may be drawn facing "up" by default.
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

    if (isMobile) {
        return (
            <motion.div
                className="fixed top-0 right-4 w-16 h-16 z-[9999] pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                style={{
                    y: smoothMobileY,
                }}
                animate={{ rotate: mobileRotation }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <BirdSVG />
            </motion.div>
        );
    }

    // Hide entirely if mouse hasn't entered the window yet on desktop
    if (!isMobile && mousePos.x === -100 && mousePos.y === -100) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-24 h-24 z-[9999] pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
            style={{
                x: birdX,
                y: birdY,
                translateX: "-50%",
                translateY: "-50%",
                rotate: rotation,
            }}
        >
            <BirdSVG />
        </motion.div>
    );
};

// Detailed white flying bird SVG (drawn facing upwards)
const BirdSVG = () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* Body / Tail */}
        <path
            d="M50 20 L40 60 L35 90 L50 80 L65 90 L60 60 Z"
            fill="#ffffff"
            stroke="#dddddd"
            strokeWidth="1"
        />

        {/* Head / Beak */}
        <path
            d="M48 25 L50 5 L52 25 Z"
            fill="#ffffff"
            stroke="#dddddd"
            strokeWidth="1"
        />

        {/* Left Wing */}
        <motion.path
            d="M40 40 Q20 30 5 15 Q15 60 40 60 Z"
            fill="#fdfdfd"
            stroke="#eeeeee"
            strokeWidth="1"
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
            fill="#fdfdfd"
            stroke="#eeeeee"
            strokeWidth="1"
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
        <path d="M45 75 L42 85 M50 78 L50 90 M55 75 L58 85" stroke="#cccccc" strokeWidth="1" />
    </svg>
);

export default BirdCursor;

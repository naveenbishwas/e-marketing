"use client";
import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import styles from "./DirectionAwareBanner.module.css";
const slides = [
  {
    id: 1,
    text: "Insight",
    image: "/images/marketing_team_banner.png",
  },
  {
    id: 2,
    text: "Execution",
    image: "/industry_furnishing_1764314743864.png",
  },
  {
    id: 3,
    text: "Impact",
    image: "/industry_pharmacy_1764314726665.png",
  },
  {
    id: 4,
    text: (
      <>
        The unnity <br />
        Way
      </>
    ),
    image: "/industry_furnishing_1764314743864.png",
  },
];
const DirectionAwareBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState("left"); // left, right, top, bottom
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const slideCount = slides.length;
    const index = Math.min(slideCount - 1, Math.floor(latest * slideCount));
    setActiveSlide(index);
  });
  const handleMouseEnter = (e) => {
    if (!stickyRef.current) return;
    const dir = getDirection(e, stickyRef.current);
    setDirection(dir);
    setIsHovered(true);
  };
  const handleMouseLeave = (e) => {
    if (!stickyRef.current) return;
    const dir = getDirection(e, stickyRef.current);
    setDirection(dir);
    setIsHovered(false);
  };
  const handleMouseMove = (e) => {
    // Calculate magnetic movement
    // Move text slightly towards cursor (e.g., 20px max)
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.05; // 5% movement
    const moveY = (clientY - window.innerHeight / 2) * 0.05;
    setMousePosition({ x: clientX, y: clientY, moveX, moveY });
  };
  // Helper to detect direction
  const getDirection = (e, item) => {
    // Width and height of the element
    const w = item.offsetWidth;
    const h = item.offsetHeight;
    // Calculate the position of the mouse relative to the center of the element
    // e.pageX/Y gives position relative to document
    // item.getBoundingClientRect() gives position relative to viewport
    const rect = item.getBoundingClientRect();
    const x = (e.clientX - rect.left - w / 2) * (w > h ? h / w : 1);
    const y = (e.clientY - rect.top - h / 2) * (h > w ? w / h : 1);
    // Calculate the angle and direction
    // 0: top, 1: right, 2: bottom, 3: left
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    switch (d) {
      case 0:
        return "top";
      case 1:
        return "right";
      case 2:
        return "bottom";
      case 3:
        return "left";
      default:
        return "left";
    }
  };
  // Framer Motion variants for the clip-path animation
  const variants = {
    initial: (dir) => {
      switch (dir) {
        case "top":
          return { clipPath: "inset(100% 0 0 0)" };
        case "bottom":
          return { clipPath: "inset(0 0 100% 0)" };
        case "left":
          return { clipPath: "inset(0 100% 0 0)" };
        case "right":
          return { clipPath: "inset(0 0 0 100%)" };
        default:
          return { clipPath: "inset(0 100% 0 0)" };
      }
    },
    animate: {
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
    exit: (dir) => {
      switch (dir) {
        case "top":
          return { clipPath: "inset(0 0 100% 0)" };
        case "bottom":
          return { clipPath: "inset(100% 0 0 0)" };
        case "left":
          return { clipPath: "inset(0 0 0 100%)" };
        case "right":
          return { clipPath: "inset(0 100% 0 0)" };
        default:
          return { clipPath: "inset(0 0 0 100%)" };
      }
    },
  };
  return (
    <section className={styles.banner} ref={containerRef}>
      <div
        className={styles.stickyContainer}
        ref={stickyRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isHovered ? "none" : "default" }}
      >
        {/* Custom Cursor */}
        <motion.div
          className={styles.customCursor}
          animate={{
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            scale: isHovered ? 4 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1,
          }}
        />
        {/* Background Video/Image Container - Scales down on hover */}
        <motion.div
          className={styles.backgroundContainer}
          initial={{ width: "100%", height: "100%", borderRadius: "0px" }}
          animate={{
            width: isHovered ? "90%" : "100%",
            height: isHovered ? "90%" : "100%",
            borderRadius: isHovered ? "30px" : "0px",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={activeSlide}
              src={slides[activeSlide].image}
              alt="Agency Team"
              className={styles.videoBackground}
              initial={{ y: "100%" }}
              animate={{
                y: 0,
                filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
              }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </AnimatePresence>
          <div className={styles.dimOverlay}></div>
        </motion.div>
        <div className={styles.container}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              className={styles.textWrapper}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: isHovered ? mousePosition.moveY : 0,
                opacity: 1,
                scale: isHovered ? 1.1 : 1,
                x: isHovered ? mousePosition.moveX : 0,
              }}
              exit={{ y: -100, opacity: 0 }}
              transition={{
                y: { type: "spring", stiffness: 400, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4, ease: "easeInOut" },
                x: { type: "spring", stiffness: 400, damping: 30 },
                default: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {slides[activeSlide].text}
              {/* The Reveal Overlay */}
              <AnimatePresence custom={direction} mode="wait">
                {isHovered && (
                  <motion.div
                    className={styles.overlay}
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {slides[activeSlide].text}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default DirectionAwareBanner;

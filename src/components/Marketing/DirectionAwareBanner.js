"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const styles = `
  .banner {
    position: relative;
    width: 100%;
    height: 400vh;
    background-color: #000;
  }

  .stickyContainer {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .backgroundContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
  }

  .videoBackground {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dimOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 10;
  }

  .textWrapper {
    position: relative;
    display: inline-block;
    font-size: 15vw;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
    font-family: sans-serif;
    user-select: none;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    -webkit-text-stroke: 0;
    background: transparent;
    z-index: 2;
    pointer-events: none;
  }

  .customCursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
  }

  .scrollIndicator {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    color: white;
    font-size: 0.875rem;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 9999px;
  }
`;

const slides = [
  {
    id: 1,
    text: "Insight",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
  },
  {
    id: 2,
    text: "Execution",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
  },
  {
    id: 3,
    text: "Impact",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
  },
  {
    id: 4,
    text: "We are Unity",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200",
  },
];

const DirectionAwareBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState("left");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    moveX: 0,
    moveY: 0,
  });
  const [activeSlide, setActiveSlide] = useState(0);

  const containerRef = useRef(null);
  const stickyRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fixed: Proper slide transitions for 4 slides
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveSlide(0);
    } else if (latest < 0.5) {
      setActiveSlide(1);
    } else if (latest < 0.75) {
      setActiveSlide(2);
    } else {
      setActiveSlide(3);
    }
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
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.05;
    const moveY = (clientY - window.innerHeight / 2) * 0.05;

    setMousePosition({ x: clientX, y: clientY, moveX, moveY });
  };

  const getDirection = (e, item) => {
    const rect = item.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    const x = (e.clientX - rect.left - w / 2) * (w > h ? h / w : 1);
    const y = (e.clientY - rect.top - h / 2) * (h > w ? w / h : 1);

    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    const directions = ["top", "right", "bottom", "left"];
    return directions[d] || "left";
  };

  const variants = {
    initial: (dir) => {
      const clips = {
        top: "inset(100% 0 0 0)",
        bottom: "inset(0 0 100% 0)",
        left: "inset(0 100% 0 0)",
        right: "inset(0 0 0 100%)",
      };
      return { clipPath: clips[dir] || clips.left };
    },
    animate: {
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
    exit: (dir) => {
      const clips = {
        top: "inset(0 0 100% 0)",
        bottom: "inset(100% 0 0 0)",
        left: "inset(0 0 0 100%)",
        right: "inset(0 100% 0 0)",
      };
      return { clipPath: clips[dir] || clips.left };
    },
  };

  return (
    <>
      <style>{styles}</style>
      <section className="banner" ref={containerRef}>
        <div
          className="stickyContainer"
          ref={stickyRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isHovered ? "none" : "default" }}
        >
          {/* Custom Cursor */}
          <motion.div
            className="customCursor"
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

          {/* Background Container */}
          <motion.div
            className="backgroundContainer"
            animate={{
              width: isHovered ? "90%" : "100%",
              height: isHovered ? "90%" : "100%",
              borderRadius: isHovered ? "30px" : "0px",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                src={slides[activeSlide].image}
                alt={slides[activeSlide].text}
                className="videoBackground"
                initial={{ y: "100%" }}
                animate={{
                  y: 0,
                  filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
            <div className="dimOverlay"></div>
          </motion.div>

          {/* Text Container */}
          <div className="container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                className="textWrapper"
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

                {/* Reveal Overlay */}
                <AnimatePresence custom={direction} mode="wait">
                  {isHovered && (
                    <motion.div
                      className="overlay"
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

      {/* Scroll Indicator */}
      <div className="scrollIndicator">
        Scroll to see slides: {activeSlide + 1} / {slides.length}
      </div>
    </>
  );
};

export default DirectionAwareBanner;

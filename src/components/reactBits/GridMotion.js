"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";

const GridMotion = ({ items = [], gradientColor = "black" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);

  const totalItems = 28;

  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`,
  );

  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    let autoX = 0;

    const updateMotion = () => {
      autoX += 0.4;

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const direction = index % 2 === 0 ? 1 : -1;

        gsap.set(row, {
          x: autoX * direction,
          force3D: true,
        });
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    return () => {
      removeAnimationLoop();
    };
  }, []);

  return (
    <div
      className="noscroll loading"
      ref={gridRef}
      style={{ position: "absolute", inset: 0 }}
    >
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];

                return (
                  <div key={itemIndex} className="row__item">
                    <div
                      className="row__item-inner"
                      style={{ backgroundColor: "#111" }}
                    >
                      {typeof content === "string" &&
                      (content.startsWith("http") ||
                        content.startsWith("/")) ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            willChange: "transform",
                            transform: "translateZ(0)",
                            backfaceVisibility: "hidden",
                          }}
                        />
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;

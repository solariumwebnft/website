"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
  buttonImages,
}: {
  content: {
    title: React.ReactNode;
    description: React.JSX.Element;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
  buttonImages: string[];
}) => {
  const [activeCard, setActiveCard] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<any>(null);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 968);
  };

  const initialPositionsDesktop = [
    { top: "-10%", left: "110%" },
    { top: "50%", left: "135%" },
    { top: "110%", left: "110%" },
  ];

  const initialPositionsMobile = [
    { top: "120%", left: "-10%" },
    { top: "150%", left: "-10%" },
    { top: "180%", left: "-10%" },
  ];

  const initialPositions = isMobile
    ? initialPositionsMobile
    : initialPositionsDesktop;

  const setIndex = (index: number) => {
    setActiveCard(index);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <motion.div
      className="flex h-[45rem] justify-center rounded-md p-10 pt-28 md:h-[50rem] lg:pr-[15rem]"
      ref={ref}
    >
      <div
        className={cn("sticky top-10 rounded-md lg:block", contentClassName)}
      >
        <motion.div
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          style={{
            position: "absolute",
            zIndex: -1,
          }}
        >
          <Image src="/circle.svg" alt="" width={500} height={500} />
        </motion.div>
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.3,
              x: 0,
            }}
            animate={{
              opacity: activeCard === index ? 1 : 0,
              scale: activeCard === index ? 1 : 0.5,
              x: activeCard === index ? 0 : -200,
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: activeCard === index ? "relative" : "absolute",
              top: isMobile ? -180 : -70,
              left: isMobile ? 0 : 40,
              width: isMobile ? "100%" : "80%",
              height: isMobile ? "100%" : "80%",
              zIndex: activeCard === index ? 10 : 10,
            }}
          >
            {item.content}
          </motion.div>
        ))}
      </div>

      <div className="absolute flex h-64 w-64 flex-col md:mt-20">
        {content.map((item, index) => {
          const isActive = activeCard === index;
          const targetPosition = initialPositions[1];

          const newPosition = isActive
            ? targetPosition
            : index === 1
              ? initialPositions[activeCard]
              : initialPositions[index];

          return (
            <motion.div
              className="absolute"
              style={{
                width: "60px",
                height: "60px",
                opacity: isActive ? 1 : 0.5,
                transform: "translate(-50%, -50%)",
              }}
              initial={{
                top: initialPositions[index].top,
                left: initialPositions[index].left,
              }}
              animate={newPosition}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              key={index}
            >
              <motion.button
                key={index}
                className={`z-10 rounded-full bg-blue-500 p-2 text-white ${isActive ? "active-neon-button" : ""}`}
                onClick={() => setIndex(index)}
                style={{
                  width: "60px",
                  height: "60px",
                  border: isActive ? "2px solid white" : "none",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  alt={`Button ${index + 1}`}
                  width={50}
                  height={50}
                  src={buttonImages[index]}
                  className="rounded-full"
                />
              </motion.button>
              {isActive && (
                <div
                  className="absolute"
                  style={{
                    top: -18,
                    left: 70,
                    width: "200px",
                  }}
                >
                  <div className="min-w-[280px] md:max-w-[200px] lg:w-[400px]">
                    <div>{item.title}</div>
                    <motion.div
                      className="neon-glow"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1 }}
                    />
                    {item.description}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

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
  const [isTablet, setIsTablet] = useState(false);
  const ref = useRef<any>(null);

  const checkDevice = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 868);
    setIsTablet(width > 868 && width <= 1124);
  };

  const initialPositionsDesktop = [
    { top: "-10%", left: "200%" },
    { top: "85%", left: "240%" },
    { top: "180%", left: "200%" },
  ];

  const initialPositionsMobile = [
    { top: "130%", left: "0%" },
    { top: "170%", left: "0%" },
    { top: "210%", left: "0%" },
  ];

  const initialPositions =
    isMobile || isTablet ? initialPositionsMobile : initialPositionsDesktop;

  const setIndex = (index: number) => {
    setActiveCard(index);
  };

  useEffect(() => {
    checkDevice();
    window.addEventListener("resize", checkDevice);
  }, []);

  return (
    <motion.div
      className="flex h-[45rem] justify-center rounded-md pt-[136px] md:h-[50rem] lg:justify-start lg:pr-[15rem]"
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
            width: isMobile ? "300px" : isTablet ? "300px" : "600px",
          }}
        >
          <Image src="/circle.svg" alt="" width={800} height={800} />
        </motion.div>
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: activeCard ? 1 : 0,
              scale: 0.3,
              x: 0,
            }}
            animate={{
              opacity: activeCard === index ? 1 : 0,
              scale: 1,
              x: activeCard === index ? 0 : -200,
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: activeCard === index ? "relative" : "absolute",
              top: isMobile || isTablet ? 0 : -30,
              left: isMobile || isTablet ? -50 : 60,
              width: isMobile || isTablet ? "60%" : "90%",
              height: isMobile || isTablet ? "60%" : "90%",
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
                width: "80px",
                height: "80px",
                opacity: isActive ? 1 : 0.5,
                transform: "translate(-50%, -50%)",
                zIndex: 20,
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
                className={`z-10 flex items-center justify-center rounded-full bg-primary p-0 text-white ${isActive ? "active-neon-button" : ""}`}
                onClick={() => setIndex(index)}
                style={{
                  width: "80px",
                  height: "80px",
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
                  width={isMobile ? 50 : 70}
                  height={isMobile ? 50 : 70}
                  src={buttonImages[index]}
                  className="rounded-full"
                />
              </motion.button>
              {isActive && (
                <div
                  className="absolute"
                  style={{
                    top: -18,
                    left: 100,
                    width: isMobile ? "80px" : "200px",
                  }}
                >
                  <div className="min-w-[200px] md:max-w-[200px] lg:w-[400px]">
                    <div className="font-barlow text-h5 md:text-[1.25rem] lg:text-[1.75rem]">
                      {item.title}
                    </div>
                    <motion.div
                      className="neon-glow"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1 }}
                    />
                    <p className="font-barlow text-p16">{item.description}</p>
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

"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-[#004C8C] to-primary px-1 pb-1 dark:from-[#041829] dark:to-[#002E52]`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};

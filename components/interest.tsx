"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { IoMdFootball } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";

export const InterestData = [
  { component: <FaCarSide />, key: "car" },
  { component: <IoMdFootball />, key: "football" },
  { component: <FaCamera />, key: "camera" },
  { component: <CgGym />, key: "gym" },
  { component: <FaHeadphonesAlt />, key: "headphones" },
] as const;

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Interest() {
  const { ref } = useSectionInView("Interest");

  return (
    <section
      id="interest"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Interest</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {InterestData.map((interest, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={interest.key}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {interest.component}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

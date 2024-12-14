"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col justify-evenly items-center p-2 shadow-md border border-gray-300 dark:border-gray-600"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.1 }} // Add hover zoom effect
            transition={{ type: "spring", stiffness: 300 }} // Smooth transition for hover
          >
            <Image
              src={skill.background}
              alt={skill.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <span className="mt-2 text-gray-800 dark:text-gray-200 ab">{skill.name}</span>
          </motion.li>
        ))}

      </ul>
    </section>
  );
}

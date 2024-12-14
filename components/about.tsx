"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[55rem] my-8  text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <p className="mb-3 text-xl text-justify">

        I am a dedicated Senior Full Stack JavaScript Developer with over 3 years of experience building innovative, scalable software solutions across industries such as
        <br />

        <br />
        🔹 IT,
        <br />
        🔹 Retail,
        <br />
        🔹Banking,
        Hospitality,
        <br />
        🔹Healthcare.
        <br />
        <br />
        🚀 What I Bring to the Table:
        <br />
        In my journey, I’ve harnessed a wide array of programming tools such as Node.js, React.js, and Nest.js to architect and develop cutting-edge features and applications. My forte lies in not just writing code, but in understanding the pulse of end-users. I excel in analyzing customer feedback to conceptualize and implement feature enhancements that truly resonate.
      </p>
    </motion.section>
  );
}

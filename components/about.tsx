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
      className="mb-28 max-w-[45rem] my-8  text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m a seasoned Senior Full Stack JavaScript Developer with over 2+ years of hands-on experience in crafting innovative software solutions across diverse industries. My passion lies in bringing ideas to life through the power of code and technology.
        <br />
        🚀 What I Bring to the Table:
        <br />
        In my journey, I’ve harnessed a wide array of programming tools such as Node.js, React.js, and Nest.js to architect and develop cutting-edge features and applications. My forte lies in not just writing code, but in understanding the pulse of end-users. I excel in analyzing customer feedback to conceptualize and implement feature enhancements that truly resonate.
        <br />
        🌐 My Project Portfolio Spans Across Industries:
        I’ve proudly delivered impactful projects in various sectors, including:
        <br />
        🔹 Information Technologies
        <br />
        🔹 Retail
        <br />
        🔹 Banking
        <br />
        🔹 Hospitality
        <br />
        🔹 Healthcare, and beyond…
        <br />
      </p>
    </motion.section>
  );
}

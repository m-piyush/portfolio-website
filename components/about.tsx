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
      className="mb-28 max-w-[45rem] my-8  text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I  completed my  <span className="font-medium">master's degree in computer applications</span>.
      For a year and a half with cloud analogy, I fully immersed myself in the world of stack development,
      where I focus on creating innovative web applications that prioritize providing an excellent user experience.
      As for my skills, I have a range of expertise that includes  <span className="font-medium">HTML5, CSS3,JavaScript,
      ReactJs ,NextJs, NodeJs. Express,  Mysql and Mssql .</span> My knowledge of Material UI, Ant Design, Stripe,
      and Tailwind CSS allows me to create apps that follow design principles and meet user expectations.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}

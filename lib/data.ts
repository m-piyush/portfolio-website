import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/management.jpg";
import eCommerce from "@/public/ecommerce.webp";
import wordanalyticsImg from "@/public/mask-delection.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },

  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Interest",
    hash: "#interest",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack developer",
    location: "Kurukshetra, India",
    description:
       " Implemented and updated application modules under the direction of Senior Software Developers. Wrote and defined clean codes to achieve functional and sustainable web applications",
    icon: React.createElement(LuGraduationCap),
    date: "Mar-2022 - July 24",
  },

] as const;

export const educationData = [
  {
    title: "Master of Business application",
    location: "Prayagraj, India",
    description:
       " Implemented and updated application modules under the direction of Senior Software Developers. Wrote and defined clean codes to achieve functional and sustainable web applications",
    icon: React.createElement(LuGraduationCap),
    date: "Jun-2022 - Aug-2024",
  },
  {
    title: "Master of Computer application",
    location: "Prayagraj, India",
    description:
       " Implemented and updated application modules under the direction of Senior Software Developers. Wrote and defined clean codes to achieve functional and sustainable web applications",
    icon: React.createElement(LuGraduationCap),
    date: "Dec-2020 - Jun-2022",
  },
  {
    title: "Barlous in Computer application",
    location: "Prayagraj, India",
    description:
       " Implemented and updated application modules under the direction of Senior Software Developers. Wrote and defined clean codes to achieve functional and sustainable web applications",
    icon: React.createElement(LuGraduationCap),
    date: "Jul-2017 - Sept-2020",
  },

] as const;

export const projectsData = [
  {
    title: "Child Support Application",
    description:
      "It eliminate child support conflict and enjoy transparency while saving time and money.",
    tags: ["React Js", "NextJS", "TypeScript", "NodeJS", "Express", "GraphQl","Hasura"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Warehouse Management",
    description:
      "Worked as Database Administrator to ensures the security of a database and integrity in the database",
    tags: [ "MS SQL", "Power BI", "Microsoft Access"],
    imageUrl: rmtdevImg,
  },
  {
    title: "E-commerce Platform",
    description:
      "Designed and implemented an e-commerce platform where users can browse various products, add them to the cart, and make purchases securely",
    tags: [ "React.js","Node.js + Express", "MySQL" , "Tailwind"],
    imageUrl: eCommerce,
  },
  {
    title: "Mask Detection",
    description:
      " This was a Group Project in which 5 people worked together. The project idea was simple that we need to develop a software which can help in detecting the mask so that later this project can be used for several purpose like Office security camera, etc..",
    tags: ["Python", "Open CV", "Database (Image database)", "Keras JS", "TensorFlow" ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { name: "HTML", background: "/html.png" },
  { name: "CSS", background: "/styleFile.png" },
  { name: "JavaScript", background: "/jss.png" },
  { name: "TypeScript", background: "/typeScript.png" },
  { name: "React", background: "/react.png" },
  { name: "Next", background: "/nextjs.png" },
  { name: "Node", background: "/node.png" },
  { name: "Express", background: "/express.png" },
  { name: "SQL", background: "/SQL.png" },     
  { name: "SQL server", background: "/SqlServer.png" },     
  { name: "MySql", background: "/MySql.png" },     
  { name: "postgresSQL", background: "/postgresSQL.png" },  
  { name: "MongoDB", background: "/mongoDB.png" },  
  { name: "Ant Design", background: "/ant-d.png" },
  { name: "Tailwind Css", background: "/tailwind.png" },
  { name: "shadcn ", background: "/shadcn.png" }, 
  { name: "Git", background: "/git.png" },
  { name: "Bitbucket", background: "/bitbucket.png" },
] as const;



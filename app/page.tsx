import About from "@/components/about";
import Interest from "@/components/interest";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Education from "@/components/education";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      {/* <SectionDivider /> */}
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Interest />
    </main>
  );
}

import { Metadata } from "next";
import { getHomeTitle } from "@/lib/seo";
import HeroSection from "@/components/sections/hero";
import ContactSection from "@/components/sections/contact";
import AboutMeSection from "@/components/sections/about-me";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experiences";
import WorkSection from "@/components/sections/work";

export const metadata: Metadata = {
  title: getHomeTitle(),
  description:
    "Portfolio of Shakhzodbek Gayratov – frontend developer specializing in React and modern web technologies.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}

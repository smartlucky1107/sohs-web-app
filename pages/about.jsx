import AboutAbout from "@/components/about-page/about";
import AboutHero from "@/components/about-page/hero";
import AboutSchedule from "@/components/about-page/schedule";
import AboutServices from "@/components/about-page/services";
import React from "react";

export default function About() {
  return (
    <section className="w-full h-auto">
      <AboutHero />
      <AboutAbout />
      <AboutServices />
      <AboutSchedule />
    </section>
  );
}

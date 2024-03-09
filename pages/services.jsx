import ServicesHero from "@/components/services-page/hero";
import ServicesContent from "@/components/services-page/content";
import ServicesInfo from "@/components/services-page/info";
import ServicesSidebar from "@/components/services-page/sidebar";
import React from "react";
import ServicesOurMotto from "@/components/services-page/our-motto";
import ServicesFAQ from "@/components/services-page/faq";

export default function About() {
  return (
    <section className="w-full h-auto">
      <ServicesHero />
      <ServicesInfo />

      <div className="w-full max-w-[1280px] py-14 flex justify-center flex-col gap-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[391px]">
            <ServicesSidebar />
          </div>

          <div className="w-full lg:w-[calc(100%_-_391px)] lg:px-0 px-4">
            <ServicesContent />
            <ServicesOurMotto />
            <ServicesFAQ />
          </div>
        </div>
      </div>
    </section>
  );
}

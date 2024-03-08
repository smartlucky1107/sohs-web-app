import ContactForm from "@/components/contact-page/form";
import ContactHero from "@/components/contact-page/hero";
import ContactInformation from "@/components/contact-page/info";
import ContactTestimonials from "@/components/contact-page/testimonials";
import HomeContact from "@/components/home-page/contact";
import React from "react";

export default function About() {
  return (
    <section className="w-full h-auto">
      <ContactHero />
      <ContactInformation />
      <ContactForm />
      <ContactTestimonials />
      <HomeContact />
    </section>
  );
}

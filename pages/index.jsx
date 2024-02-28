import HomeAbout from "@/components/home-page/about"
import HomeContact from "@/components/home-page/contact"
import HomeFaq from "@/components/home-page/faq"
import HomeHero from "@/components/home-page/hero"
import HomeMotto from "@/components/home-page/motto"
import HomeServices from "@/components/home-page/services"
import HomeTestimonials from "@/components/home-page/testimonials"
import React from "react"

export default function Home() {
    return (
        <section className="w-full h-auto">
            <HomeHero />
            <HomeAbout />
            <HomeServices />
            <HomeMotto />
            <HomeTestimonials />
            <HomeFaq />
            <HomeContact />
        </section>
    )
}
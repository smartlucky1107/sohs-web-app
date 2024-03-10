import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

export default function AboutServices() {
  const services = [
    {
      icon: "/services/service-icon-1.png",
      summary: "Hearing Conservation Programme",
    },
    {
      icon: "/services/service-icon-2.png",
      summary: "Statutory Medical Examination",
    },
    {
      icon: "/services/service-icon-3.png",
      summary: "Workplace Safety & Health Act",
    },
    {
      icon: "/services/service-icon-1.png",
      summary: "Code of Practices & Singapore Standards,",
    },
    {
      icon: "/services/service-icon-2.png",
      summary: "National Immunisation Schedule",
    },
    {
      icon: "/services/service-icon-3.png",
      summary: "MOH Healthcare Schemes & Subsidies",
    },
    {
      icon: "/services/service-icon-3.png",
      summary: "Disability  Assessment",
    },
    {
      icon: "/services/service-icon-3.png",
      summary: "Medical Services & Tele-consult",
    },
    {
      icon: "/services/service-icon-3.png",
      summary: "Workplace Risk Assessment",
    },
  ];

  return (
    <section
      className="w-full bg-white relative mt-20 bg-cover h-[880px]"
      style={{
        backgroundImage: "url(/services-bg.png)",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-[1280px] pt-20 mx-auto gap-6">
        <div className="lg:grid grid-cols-4 items-center justify-between gap-20">
          <div className="lg:col-span-3 col-span-4">
            <h1 className="text-[50px]">SELF HELP EDUCATIONAL ARTICLES</h1>
            <p className="text-lg leading-[30px] mt-2">
              At Curtis Plumbing, we understand that your plumbing and septic
              needs are unique. Our team is dedicatedproviding tailored
              solutions with a commitment
            </p>
          </div>

          <div className="lg:col-span-1 col-span-4 mt-5 lg:mt-0">
            <Link
              href="tel:+6568725020"
              className="bg-[#111111] h-[53px] rounded-[5px] px-6 flex items-center justify-center text-white tracking-[2px] uppercase font-medium"
            >
              Call Us
            </Link>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="servicesSwiper mt-16"
        >
          {services.map((service, index) => (
            <SwiperSlide key={'service-slide-'+index} className="pr-5 pb-[90px] !opacity-100">
              <div className="border border-[#111111] rounded-[5px] p-5 bg-white  shadow-[7px_7px]">
                <div className="flex items-center justify-between">
                  <div className="w-[85px] h-[85px] bg-[#E7F5FF] rounded-full flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt=""
                      width={56}
                      height={56}
                      className={index != 0 && "w-[46px]"}
                    />
                  </div>

                  <div
                    className="text-8xl tracking-[3px] font-bold text-white"
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "#666666",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                <p className="my-8 text-black text-xl font-medium h-[56px]">
                  {service.summary}
                </p>

                <Link
                  href="/"
                  className="uppercase underline text-lg font-medium block"
                >
                  Read More
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

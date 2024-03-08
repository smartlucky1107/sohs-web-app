// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import Image from "next/image";

export default function ContactTestimonials() {
  const testimonials = [
    {
      text: "Great value price! If you are sitting on the face thinking buying this theme, just do it! Every time I had a question or any issues it was answered quickly and promptly. I have only good things to say about this item. No bugs and it's fast, it simply works",
      name: "Anna Marina",
      title: "Customer",
    },
    {
      text: "Great value price! If you are sitting on the face thinking buying this theme, just do it! Every time I had a question or any issues it was answered quickly and promptly. I have only good things to say about this item. No bugs and it's fast, it simply works",
      name: "John Smith",
      title: "Customer",
    },
    {
      text: "Great value price! If you are sitting on the face thinking buying this theme, just do it! Every time I had a question or any issues it was answered quickly and promptly. I have only good things to say about this item. No bugs and it's fast, it simply works",
      name: "Michael",
      title: "Customer",
    },
  ];

  return (
    <section className="w-full my-20">
      <div className="w-full max-w-[1400px] mx-auto flex-col gap-6 py-10 px-5 lg:py-0 lg:px-0">
        <h1 className="text-5xl sm:text-3xl md:text-4xl sm:mb-10 lg:mb-4 text-center">
          Testimonials
        </h1>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="testimonialsSwiper lg:-translate-y-[40px]"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide className="lg:px-40 lg:pt-20" key={"testomonial-slide-"+index}>
              <div className="relative" >
                <Image
                  src="/icons/quote-left.svg"
                  alt=""
                  width={115}
                  height={72}
                  className="absolute -left-8 -top-5 hidden lg:block"
                />
                <Image
                  src="/icons/quote-right.svg"
                  alt=""
                  width={115}
                  height={72}
                  className="absolute -right-7 top-5 hidden lg:block"
                />

                <p className="text-xl sm:text-base text-center tracking-[1px] leading-[36px] font-light px-8">
                  “{item.text}”
                </p>

                <h5 className="text-lg text-center mt-10">{item.name}</h5>
                <p className="text-sm text-[#666666] font-light text-center mt-3">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

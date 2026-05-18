"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

import image1 from "@/assets/hero_bg_1_1.png";
import image2 from "@/assets/hero_bg_1_2.png";
import image3 from "@/assets/hero_bg_1_3.png";

const slides = [
  {
    img: image1,
    title: "Welcome to MediQueue",
    desc: "Find the best doctors and book appointments easily",
  },
  {
    img: image2,
    title: "Smart Booking System",
    desc: "Manage your healthcare schedule efficiently",
  },
  {
    img: image3,
    title: "Trusted Healthcare",
    desc: "Connect with verified professionals anytime",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[80vh]">
              <Image
                src={slide.img}
                alt="banner"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              {/* TEXT */}
              <div className="absolute inset-0 flex items-center">
                <div className="ml-10 md:ml-24 text-white max-w-lg space-y-4">

                  {/* H1 */}
                  <h1
                    className={`text-4xl md:text-6xl font-bold transition-all duration-700 ${
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: "0.2s" }}
                  >
                    {slide.title}
                  </h1>

                  {/* P */}
                  <p
                    className={`text-lg md:text-xl text-gray-200 transition-all duration-700 ${
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: "0.5s" }}
                  >
                    {slide.desc}
                  </p>

                  {/* Button */}
                  <button
                    className={`px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-700 ${
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: "0.8s" }}
                  >
                    Get Started
                  </button>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
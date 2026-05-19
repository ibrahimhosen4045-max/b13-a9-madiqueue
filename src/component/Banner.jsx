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

import image4 from "@/assets/shape_1_1.png";
import image5 from "@/assets/shape_1_2.png";
import image6 from "@/assets/shape_1_3.png";
import image7 from "@/assets/shape_1_4.png";

import hero1 from "@/assets/hero_thumb_1_1.png";
import hero2 from "@/assets/hero_thumb_1_2.png";
import hero3 from "@/assets/hero_thumb_1_3.png";
import Link from "next/link";

const slides = [
  {
    img: image1,
    thumImg: hero1,
    
    title: "Education Is Create Better Future",
    desc: "Education can be of us the transmission of the values and accumulated knowledge of a society. in this sense, it is equivalent",
  },
  {
    img: image2,
    thumImg: hero2,
    
    title: "The Worlds Best Online Education Institute",
    desc: "Education can be of us the transmission of the values and accumulated knowledge of a society. in this sense, it is equivalent",
  },
  {
    img: image3,
    thumImg: hero3,
    title: "MediQueue Leads To A Brighter Future.",
    desc: "Education can be of us the transmission of the values and accumulated knowledge of a society. in this sense, it is equivalent",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-auto lg:h-[80vh]">
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
            <div className="relative w-full min-h-screen lg:min-h-[80vh] overflow-hidden">

              {/* BG IMAGE */}
              <Image
                src={slide.img}
                alt="banner"
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-blue-600/20"></div>

              {/* SHAPES */}
              <div className=" hidden md:block">
                <Image
                  className="absolute bottom-0 -right-10 md:-right-20 lg:-right-20 xl:right-0 2xl:-right-30 z-10 w-[200px] md:w-[300px] lg:w-auto"
                  src={image4}
                  alt="shape"
                />

                <Image
                  className="absolute bottom-[50%] translate-y-[50%] -right-10 md:-right-16 lg:-right-20 z-10 pl-10 md:pl-20 float-animation w-[120px] md:w-[180px] lg:w-auto"
                  src={image5}
                  alt="shape"
                />

                <Image
                  className="absolute z-20 bottom-5 right-2 md:right-5 float-animation2 w-[70px] md:w-auto"
                  src={image6}
                  alt="shape"
                />

                
              </div>
              <Image
                  className="absolute z-20 -bottom-3 md:-bottom-5 left-0 float-animation3 w-[90px] md:w-auto"
                  src={image7}
                  alt="shape"
                />

              {/* CONTENT */}
              {/* CONTENT */}
<div className="absolute inset-0 w-11/12 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-10 pt-20 sm:pt-24 md:pt-28 lg:pt-0 pb-10 lg:pb-0">

  {/* TEXT */}
  <div className="text-white max-w-xl space-y-4 text-center lg:text-left z-50">

    <h1
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold leading-tight transition-all duration-700 ${
        activeIndex === index
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: "0.2s" }}
    >
      {slide.title}
    </h1>

    <p
      className={`text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-200 leading-relaxed transition-all duration-700 ${
        activeIndex === index
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: "0.5s" }}
    >
      {slide.desc}
    </p>

    <div
      className={`transition-all duration-700 ${
        activeIndex === index
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: "0.8s" }}
    >
      <Link href={'/tutors'}>
      <button className="px-5 sm:px-6 md:px-7 py-2.5 md:py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition cursor-pointer text-sm sm:text-base font-medium relative z-50">
        Get Tutors
      </button>
      </Link>
    </div>
  </div>

  {/* HERO IMAGE */}
  <div className="relative flex justify-center items-center w-full md:w-auto">

    {/* Mobile Image */}
    <Image
      src={slide.thumImg}
      alt="hero"
      width={300}
      height={300}
      className="relative z-40 w-[220px] sm:w-[260px] md:hidden h-auto"
    />

    {/* Tablet + Desktop Image */}
    <Image
      src={slide.thumImg}
      alt="hero"
      width={550}
      height={550}
      className="relative z-40 hidden md:block w-[340px] lg:w-[450px] 2xl:w-[550px] h-auto"
    />
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
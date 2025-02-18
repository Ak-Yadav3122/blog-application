"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  // List of images for the slider
  const images = [
    "/blog-image8.jpg",
    "/blog-image7.webp",
    "/blog-image2.avif",
    "/blog-image6.avif",
    "/blog-image5.avif",
    "/blog-image3.avif",
    "/blog-image.jpg",
    "/blog-image4.avif",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-indigo-950">
      {/* Gradient overlay */}
      <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl" />

      <div className="container relative mx-auto flex flex-col-reverse items-center justify-center px-6 py-20 text-center md:flex-row md:text-left md:py-32">
        {/* Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Explore the World Through
            <span className="bg-gradient-to-r from-violet-300 to-indigo-700 bg-clip-text text-transparent">
              {" "}
              Words
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            Discover insightful articles, thought-provoking stories, and expert
            perspectives on technology, lifestyle, and innovation.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Link href="/">
              <Button
                size="lg"
                className="w-full rounded-full px-8 py-4 text-lg sm:w-auto hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                Start Reading
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                className="w-full rounded-full px-8 py-4 text-lg sm:w-auto hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                Explore Topics
              </Button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 text-white md:max-w-md">
            <div className="space-y-2 text-center md:text-left">
              <div className="text-2xl font-bold text-primary dark:text-primary-500 ">
                1K+
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-300">
                Published Articles
              </div>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <div className="text-2xl font-bold text-primary dark:text-primary-500">
                10+
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-300">
                Expert Writers
              </div>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <div className="text-2xl font-bold text-primary dark:text-primary-500">
                10M+
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-300">
                Monthly Readers
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center">
          <div
            className={cn(
              "relative w-64 h-64 rounded-2xl overflow-hidden",
              "bg-gradient-to-br from-white/5 to-transparent",
              "border border-primary/20 backdrop-blur-lg",
              "shadow-2xl shadow-indigo-500/10"
            )}
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={false}
              className="w-full h-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

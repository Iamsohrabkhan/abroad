"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Swiper as SwiperType,
} from "swiper/modules";
import {
  ChevronRight,
  ChevronLeft,
  Bluetooth,
  Map,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type CarouselItem = {
  key: number;
  smallimage: string;
  largeimage: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonIcon: JSX.Element;
};

const FadeCarousel = () => {
  const data: CarouselItem[] = [
    {
      key: 0,
      smallimage: "crousel-images/calender-mobile.svg",
      largeimage:
        "https://static.trainlinecontent.com/content/WEB/images/home/us/assurance-caroussel/price-calendar.svg",
      heading: "The best price for your journey at a glance",
      paragraph:
        "Flexible with the dates? Get inspired by a month worth of trains.",
      buttonText: "Check calendar prices",
      buttonIcon: <Bluetooth />,
    },
    {
      key: 1,
      smallimage:
        "https://static.trainlinecontent.com/content/WEB/images/home/us/assurance-caroussel/mobile/europe-train-map.svg",
      largeimage:
        "https://static.trainlinecontent.com/content/WEB/images/home/us/assurance-caroussel/europe-train-map.svg",
      heading: "Train is the new plane",
      paragraph:
        "Planes? Passé. Trains? Really cool. Now that's sorted, use Trainline to travel with over 270 train and bus companies around Europe.",
      buttonText: "Explore train routes",
      buttonIcon: <Map />,
    },
    {
      key: 2,
      smallimage:
        "https://static.trainlinecontent.com/content/WEB/images/home/us/assurance-caroussel/mobile/app.svg",
      largeimage:
        "https://static.trainlinecontent.com/content/WEB/images/home/us/assurance-caroussel/app.svg",
      heading: "Our app's got everything you need to travel",
      paragraph:
        "Live notifications, departure and arrival platforms, and updated departure times - it's all there, baby.",
      buttonText: "Download the app",
      buttonIcon: <Smartphone />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrevious = () => swiperRef.current?.slidePrev();

  return (
    <section
      className={`md:h-screen md:max-h-[700px] md:flex md:justify-center md:items-center md:flex-col bg-[#ebf2ff] py-12 md:py-0 mt-24 ${
        activeIndex === 0
          ? "md:bg-[#192325]"
          : activeIndex === 1
          ? "md:bg-[#00a88f]"
          : "md:bg-[#2332c4]"
      }`}
    >
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={500}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="w-full md:h-screen md:w-[90%] md:mx-auto"
      >
        {data.map((item) => (
          <SwiperSlide key={item.key}>
            <div className="slide md:h-full md:grid md:grid-cols-2">
              {/* Left Text Section */}
              <div className="px-6 md:flex md:justify-center md:flex-col md:relative">
                <h3 className="headline text-white hidden md:block md:absolute md:top-12 ">
                  <span
                    className={` text-2xl ${
                      activeIndex === 0
                        ? "text-[#ff898d]  duration-300 ease-out transition-[color]"
                        : "text-white duration-[0.1ms]"
                    }`}
                  >
                    Search.
                  </span>
                  <span
                    className={`text-2xl ${
                      activeIndex === 1
                        ? "text-[#ff898d]  duration-300 ease-out transition-[color]"
                        : "text-white duration-[0.1ms]"
                    }`}
                  >
                    Travel.
                  </span>
                  <span
                    className={` text-2xl ${
                      activeIndex === 2
                        ? "text-[#ff898d]  duration-300 ease-out transition-[color]"
                        : "text-white duration-[0.1ms]"
                    }`}
                  >
                    Book.
                  </span>
                </h3>
                <h4 className="text-mint-dark text-balance mb-6 text-2xl font-semibold leading-tight md:w-2/3 md:text-white md:font-black">
                  {item.heading}
                </h4>
                <p className="mb-6 text-gray-700 leading-relaxed md:text-[16px] md:text-white">
                  {item.paragraph}
                </p>
                <button className="text-black gap-6 bg-white hidden md:flex rounded-xl p-3 md:items-center lg:w-2/3 text-pretty text-start">
                  <span>{item.buttonIcon}</span>
                  <span>{item.buttonText}</span>
                </button>
                <div className="navigation-buttons md:flex justify-center items-center gap-4 mt-24 hidden absolute bottom-12 left-0">
                  <button
                    onClick={handlePrevious}
                    className="prev-btn outline-1 outline-white flex justify-center items-center size-12 rounded-full border border-white hover:text-white  cursor-pointer"
                  >
                    <ChevronLeft className="size-5 stroke-white" />
                  </button>

                  <div className="navigations flex justify-center items-center gap-2">
                    {data.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => swiperRef.current?.slideTo(index)}
                        className={`bullet h-3 rounded-full transition-[width] duration-500 ease-out !bg-white ${
                          index === activeIndex ? "!w-24" : "w-3 "
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="next-btn outline-1 outline-white flex justify-center items-center size-12 rounded-full border border-white cursor-pointer"
                  >
                    <ChevronRight className="size-5 stroke-white" />
                  </button>
                </div>
              </div>

              <div
                className={`w-full md:h-full px-12 md:px-0 relative flex justify-center items-center overflow-hidden
                  ${
                    item.key === 0
                      ? "bg-mint-dark md:bg-transparent h-56 md:h-full"
                      : item.key === 1
                      ? "bg-mint md:bg-transparent h-64 md:h-full"
                      : "bg-blue-600 md:bg-transparent h-72 md:h-full"
                  }
                `}
              >
                <Image
                  src={item.smallimage}
                  alt="carousel image"
                  fill
                  className="size-full object-top object-contain md:hidden"
                />
                <Image
                  src={item.largeimage}
                  alt="carousel image"
                  fill
                  className="size-full object-bottom object-contain hidden md:block"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile Navigation */}
      <div className="navigation-buttons flex justify-center items-center gap-4 mt-6 md:hidden">
        <button
          onClick={handlePrevious}
          className="prev-btn outline-1  flex justify-center items-center size-12 rounded-full transition-all duration-300 cursor-pointer border-mint-dark border-2"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="navigations flex justify-center items-center gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`bullet h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-mint-dark !w-24"
                  : "bg-gray-300 w-3 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="next-btn outline-1 outline-mint-dark flex justify-center items-center size-12 rounded-full border border-mint-dark hover:bg-mint-dark hover:text-white transition-all duration-300 cursor-pointer"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <style jsx>{`
        .swiper {
          width: 100%;
          height: auto;
        }

        .swiper-slide {
          text-align: left;
          font-size: 18px;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
        }

        .swiper-fade .swiper-slide {
          pointer-events: none;
        }

        .swiper-fade .swiper-slide-active {
          pointer-events: auto;
        }

        .swiper-pagination {
          display: none !important;
        }

        .slide img {
          transition: opacity 0.7s ease-out;
        }

        .slide img[data-loaded="false"] {
          opacity: 0;
        }

        .slide img[data-loaded="true"] {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default FadeCarousel;

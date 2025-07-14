import React from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperWrapper } from "./SwiperWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";

const slidesData = [
  { id: 1, date: "Thu, July 3", price: "$13" },
  { id: 2, date: "Fri, July 4", price: "$15" },
  { id: 3, date: "Sat, July 5", price: "$18" },
  { id: 4, date: "Sun, July 6", price: "$12" },
  { id: 5, date: "Mon, July 7", price: "$17" },
  { id: 6, date: "Tue, July 8", price: "$14" },
  { id: 7, date: "Wed, July 9", price: "$20" },
  { id: 8, date: "Thu, July 10", price: "$13" },
  { id: 9, date: "Fri, July 11", price: "$16" },
  { id: 10, date: "Sat, July 12", price: "$19" },
  { id: 11, date: "Sun, July 13", price: "$11" },
  { id: 12, date: "Mon, July 14", price: "$22" },
  { id: 13, date: "Tue, July 15", price: "$13" },
  { id: 14, date: "Wed, July 16", price: "$15" },
  { id: 15, date: "Thu, July 17", price: "$18" },
];

const DateSlider = ({
  swiperActive,
  setSwiperActive,
}: {
  swiperActive: boolean;
  setSwiperActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const swiperRef = React.useRef<SwiperRef>(null);
  const [currentPill, setCurrentPill] = React.useState<number | null>(1);

  return (
    <SwiperWrapper
      swiperActive={swiperActive}
      setSwiperActive={setSwiperActive}
    >
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="swiper-button-next rounded-full absolute right-0 top-1/2 -translate-y-1/2 bg-white z-10"
      >
        <ChevronRightIcon />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="swiper-button-prev rounded-full absolute left-0 top-1/2 -translate-y-1/2 bg-white z-10"
      >
        <ChevronLeftIcon />
      </Button>

      {/* Optional inline style for Swiper classes */}
      <style>{`
        .swiper-disabled {
          display: none;
        }
      `}</style>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={2}
        breakpoints={{
          720: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 6,
          },
          1440: {
            slidesPerView: 7,
          },
          1920: {
            slidesPerView: 8,
          },
        }}
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-disabled",
          lockClass: "swiper-lock",
        }}
      >
        {slidesData.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative cursor-pointer px-2 py-4 text-center"
            onClick={() => setCurrentPill(slide.id)}
          >
            {/* Optional pill indicator */}
            {currentPill === slide.id && (
              <motion.div
                layoutId="pill"
                className="swiper-pill absolute bottom-0 right-0 left-0 bg-blue-500 h-1"
              />
            )}
            <p>{slide.date}</p>
            <p>
              From <b>{slide.price}</b>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default DateSlider;

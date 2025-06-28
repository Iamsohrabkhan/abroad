"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Utilities and data
import { renderStars } from "./renderstars";
import { CheckComponent } from "./check";
import { reviewsData } from "./reviewdata";

// Types
import type { Swiper as SwiperType } from "swiper";

type ReviewItem = {
  id: number;
  rating: number;
  invited: boolean;
  title: string;
  review: string;
  author: string;
  time: string;
};

const Review: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="relative">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          You + us = ❤️
        </h2>
        <p className="text-gray-600 mb-8">
          Don't just take it from us. Check out what our users have to say.
        </p>
      </div>

      <div className="relative">
        <div className="w-[70%] md:w-[90%] mx-auto">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={500}
            loop={false}
            grabCursor={false}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
            }}
            pagination={{
              clickable: false,
              dynamicBullets: false,
              dynamicMainBullets: 0,
            }}
            className="reviews-swiper"
          >
            {reviewsData.map((review: ReviewItem) => (
              <SwiperSlide key={review.id}>
                <div className="bg-[#f8f9fa] p-4 h-full">
                  <div className="flex  gap-8 md:gap-4  flex-nowrap items-center mb-4">
                    <div className="stars-wrapper space-x-1 inline-block text-nowrap">
                      {renderStars(review.rating)}
                    </div>
                    {review.invited && (
                      <div className="invited rounded-full inline-flex items-center gap-1">
                        <CheckComponent />
                        <label className="text-xs font-medium text-black">
                          Invited
                        </label>
                      </div>
                    )}
                  </div>

                  <h6 className="text-sm font-semibold mb-3 text-gray-900 line-clamp-1">
                    {review.title}
                  </h6>

                  <p className="text-xs text-gray-700 mb-4 leading-relaxed line-clamp-3">
                    {review.review}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-1 items-start sm:items-center mt-auto text-nowrap">
                    <h6 className="text-xs font-medium text-gray-900">
                      {review.author},
                    </h6>
                    <h6 className="time text-xs text-gray-500">
                      {review.time}
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="swiper-button-prev-custom border border-black rounded-full p-2 flex justify-center items-center absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 transition-all duration-200 z-10 shadow-lg cursor-pointer"
        >
          <ChevronLeft className="size-3 md:size-4 stroke-2" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="swiper-button-next-custom border border-black rounded-full p-2 flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 transition-all duration-200 z-10 shadow-lg cursor-pointer"
        >
          <ChevronRight className="size-3 md:size-4 stroke-2" />
        </button>
      </div>

      <style jsx global>{`
        .reviews-swiper .swiper-pagination {
          bottom: 20px !important;
        }

        .reviews-swiper .swiper-slide {
          height: auto !important;
        }

        .reviews-swiper .swiper-slide > div {
          height: 100% !important;
          display: flex !important;
          flex-direction: column !important;
        }
      `}</style>
    </section>
  );
};

export default Review;

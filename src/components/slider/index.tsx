"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiperInstance: SwiperClass) => {
    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);
  };

  const goToPrev = () => {
    swiper?.slidePrev();
  };

  const goToNext = () => {
    swiper?.slideNext();
  };

  return (
    <section className="mx-auto relative">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        loop={false}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative !aspect-video rounded-md text-white">
          <img
            src="https://images.unsplash.com/photo-1553869901-ddcac1bfe23e?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="w-full h-full object-center object-cover rounded-md"
            alt="Algeria 1"
          />
          <div className="absolute inset-0 text-white px-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Algeria</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors self-start">
              Reserver
            </button>
            <p className="text-xs mt-2 opacity-80">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative !aspect-video rounded-md">
          <img
            src="https://images.unsplash.com/photo-1607261720324-b68cd0857a8a?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="w-full h-full object-center object-cover rounded-md brightness-50"
            alt="Algeria 2"
          />
          <div className="absolute inset-0 text-white px-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Algeria</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors self-start">
              Reserver
            </button>
            <p className="text-xs mt-2 opacity-80">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative !aspect-video rounded-md text-white">
          <img
            src="https://images.unsplash.com/photo-1692093520322-f8b9250293b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="w-full h-full object-center object-cover rounded-md"
            alt="Algeria 3"
          />
          <div className="absolute inset-0 text-white px-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Algeria</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors self-start">
              Reserver
            </button>
            <p className="text-xs mt-2 opacity-80">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="relative !aspect-video rounded-md text-white">
          <img
            src="https://images.unsplash.com/photo-1603993309715-6d7a617cf8ec?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="w-full h-full object-center object-cover rounded-md"
            alt="Algeria 4"
          />
          <div className="absolute inset-0 text-white px-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Algeria</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors self-start">
              Reserver
            </button>
            <p className="text-xs mt-2 opacity-80">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className="relative !aspect-video rounded-md text-white">
          <img
            src="https://images.unsplash.com/photo-1597608074661-a9cf3abc58eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="w-full h-full object-center object-cover rounded-md"
            alt="Algeria 5"
          />
          <div className="absolute inset-0 text-white px-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Algeria</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors self-start">
              Reserver
            </button>
            <p className="text-xs mt-2 opacity-80">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Prev Button */}
      {!isBeginning && (
        <button
          onClick={goToPrev}
          className="absolute bg-white hover:bg-gray-50 z-50 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 p-1.5 lg:p-3 top-1/2 left-0 cursor-pointer group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-4 text-gray-700 group-hover:text-gray-900" />
        </button>
      )}

      {/* Next Button */}
      {!isEnd && (
        <button
          onClick={goToNext}
          className="absolute bg-white hover:bg-gray-50 z-50 -translate-y-1/2 translate-x-1/2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 p-1.5 lg:p-3 top-1/2 right-0 cursor-pointer group"
          aria-label="Next slide"
        >
          <ChevronRight className="size-4 text-gray-700 group-hover:text-gray-900" />
        </button>
      )}
    </section>
  );
};

export default Slider;

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSwipeCarousel } from "../hook/useSwipeCarousel";

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerScreen, setSlidesPerScreen] = useState(3);

  const slides = [
    {
      id: 1,
      description: "Expert De-addiction Programs",
      image: "/images/stress.png",
      href: "/deaddiction",
    },
    {
      id: 2,
      description: "Sexual Wellness Services",
      image: "/images/stress.png",
      href: "/sexual-wellness",
    },
    {
      id: 3,
      description: "Psychiatric Care",
      image: "/images/stress.png",
      href: "/psychiatric-care",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const updateSlidesPerScreen = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerScreen(3);
      } else {
        setSlidesPerScreen(1);
      }
    };

    updateSlidesPerScreen();
    window.addEventListener("resize", updateSlidesPerScreen);

    return () => window.removeEventListener("resize", updateSlidesPerScreen);
  }, []);

  const updateSlidePosition = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(totalSlides - slidesPerScreen);
    } else if (newIndex >= totalSlides) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };
  
  const handleNext = () => {
    updateSlidePosition(currentIndex + slidesPerScreen);
  };
  
  const handlePrev = () => {
    updateSlidePosition(currentIndex - slidesPerScreen);
  };
  
  const handlers = useSwipeCarousel({
    onNext: handleNext,
    onPrev: handlePrev,
  });
  return (
    <section className="container mx-auto mt-10 mb-20 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl  text-gray-800">Our Services</h2>
      </div>

      <div className="relative w-full">
        <div className="carousel overflow-hidden h-auto">
          <div
            className="carousel-body flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerScreen}%)`,
            }}
            {...handlers}
          >
            {slides.map((slide) => (
              <Link
                key={slide.id}
                to={slide.href}
                className={`carousel-slide flex-shrink-0 px-3 ${
                  slidesPerScreen === 3 ? "w-full md:w-1/2 lg:w-1/3" : "w-full"
                }`}
              >
                <div className="bg-white rounded-xl  hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col items-center p-6 text-center h-full">
                  <img
                    src={slide.image}
                    alt={`Service ${slide.id}`}
                    className="w-28 h-28 object-cover mb-5"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {slide.description}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-blue-100 text-blue-600 p-2 rounded-full shadow-lg transition duration-200"
        >
          <FaChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-blue-100 text-blue-600 p-2 rounded-full shadow-lg transition duration-200"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default OurServices;

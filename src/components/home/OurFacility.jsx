import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeCarousel } from "../hook/useSwipeCarousel";
import "./styles/flipCard.css";

const OurFacility = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerScreen, setSlidesPerScreen] = useState(3);
  const [flippedCard, setFlippedCard] = useState(null);

  const facilities = [
    {
      id: 1,
      heading: "Therapy",
      description: "Modern Therapy Rooms",
      image: "/images/facility.jpg",
    },
    {
      id: 2,
      heading: "Equipment",
      description: "State-of-the-Art Equipment",
      image: "/images/facility.jpg",
    },
    {
      id: 3,
      heading: "Lounge",
      description: "Relaxation Lounges",
      image: "/images/facility.jpg",
    },
    {
      id: 4,
      heading: "Therapy",
      description: "Modern Therapy Rooms",
      image: "/images/facility.jpg",
    },
    {
      id: 5,
      heading: "Equipment",
      description: "State-of-the-Art Equipment",
      image: "/images/facility.jpg",
    },
    {
      id: 6,
      heading: "Lounge",
      description: "Relaxation Lounges",
      image: "/images/facility.jpg",
    },
  ];

  const totalSlides = facilities.length;

  useEffect(() => {
    const updateSlidesPerScreen = () => {
      setSlidesPerScreen(window.innerWidth >= 1024 ? 3 : 1);
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

  const handleNext = () => updateSlidePosition(currentIndex + slidesPerScreen);
  const handlePrev = () => updateSlidePosition(currentIndex - slidesPerScreen);

  const handlers = useSwipeCarousel({
    onNext: handleNext,
    onPrev: handlePrev,
  });

  return (
    <section className="container mx-auto mt-10 mb-20 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-gray-800">Our Facilities</h2>
      </div>

      <div className="relative w-full">
        <div className="carousel overflow-hidden">
          <div
            className="carousel-body flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerScreen}%)`,
            }}
            {...handlers}
          >
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className={`carousel-slide flex-shrink-0 px-3 ${
                  slidesPerScreen === 3 ? "w-full md:w-1/2 lg:w-1/3" : "w-full"
                }`}
              >
                <div
                  className={`flip-card min-h-[250px] relative ${flippedCard === facility.id ? "flipped" : ""}`}
                  onMouseEnter={() => setFlippedCard(facility.id)}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  <div className="flip-card-inner">
                    {/* FRONT */}
                    <div className="flip-card-front flex flex-col items-center justify-center p-6 bg-white rounded-xl text-center h-full relative">
                      <img
                        src={facility.image}
                        alt={`Facility ${facility.id}`}
                        className="w-full h-56 object-cover rounded-xl"
                        loading="lazy"
                      />
                      {/* Rectangle box in bottom right */}
                      <div className="absolute bottom-3 right-3 bg-blue-600 text-white text-lg px-3 py-1 rounded shadow">
                        {facility.heading}
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="flip-card-back flex items-center justify-center p-6 bg-blue-100 rounded-xl text-center h-full">
                      <h3 className="text-lg font-semibold text-gray-800 max-w-[200px]">
                        {facility.description}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons at center bottom */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={handlePrev}
            className="bg-white hover:bg-blue-100 text-blue-600 p-2 rounded-full shadow-lg transition duration-200"
          >
            <FaChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-white hover:bg-blue-100 text-blue-600 p-2 rounded-full shadow-lg transition duration-200"
          >
            <FaChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurFacility;

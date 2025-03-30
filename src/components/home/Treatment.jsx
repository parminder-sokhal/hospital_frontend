import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SpecialitiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerScreen, setSlidesPerScreen] = useState(3); // Initially set to 3 for desktop

  const slides = [
    {
      id: 1,
      description: "stress and anxiety",
      image: "/images/AlcoholTreatment.png", // Updated image path
      href: "/link1",
    },
    {
      id: 2,
      description: "depression",
      image: "/images/DeAddictionTreatment.png", // Updated image path
      href: "/link2",
    },
    {
      id: 3,
      description: "bipolar affective disorder",
      image: "/images/DeAddictionTreatment.png", // Updated image path
      href: "/link3",
    },
    {
      id: 4,
      description: "obsessive compulsion disorder",
      image: "/images/DrugAddictionTreatment.png", // Updated image path
      href: "/link4",
    },
    {
      id: 5,
      description: "panic attacks",
      image: "/images/DrugAddictionTreatment.png", // Updated image path
      href: "/link5",
    },
    { id: 6, description: "phobia", image: "/images/AlcoholTreatment.png", href: "/link6" }, // Updated image path
    {
      id: 7,
      description: "generalised anxiety disorder",
      image: "/images/mental-disorder.png", // Updated image path
      href: "/link7",
    },
    {
      id: 8,
      description: "social anxiety disorder",
      image: "/images/paranoia.png", // Updated image path
      href: "/link8",
    },
    {
      id: 9,
      description: "schizophrenia",
      image: "/images/schizophrenia.png", // Updated image path
      href: "/link9",
    },
    {
      id: 10,
      description: "pseudo seizure",
      image: "/images/migraine.png", // Updated image path
      href: "/link10",
    },
    {
      id: 11,
      description: "TAT (Thematic Apperception Test)",
      image: "/images/107.jpg", // Updated image path
      href: "/link47",
    },
  ];

  const totalSlides = slides.length;

  // Update slidesPerScreen based on the window size
  useEffect(() => {
    const updateSlidesPerScreen = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerScreen(3); // Desktop (3 items per screen)
      } else if (window.innerWidth >= 768) {
        setSlidesPerScreen(2); // Tablet (2 items per screen)
      } else {
        setSlidesPerScreen(1); // Mobile (1 item per screen)
      }
    };

    updateSlidesPerScreen(); // Set initial value
    window.addEventListener("resize", updateSlidesPerScreen); // Update on resize

    return () => window.removeEventListener("resize", updateSlidesPerScreen); // Cleanup listener
  }, []);

  const updateSlidePosition = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(totalSlides - slidesPerScreen); // Jump to the last slides
    } else if (newIndex >= totalSlides) {
      setCurrentIndex(0); // Jump to the first slide
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

  return (
    <div className="container mx-auto my-10 lg:px-20 sm:px-14 md:px-18 mt-35">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-4xl font-bold">Our Treatments</h2>
      </div>
     

      {/* Carousel Component */}
      <div id="centered" className="relative w-full">
        {/* Carousel container */}
        <div className="carousel h-60 overflow-hidden">
          <div
            className="carousel-body h-60 w-full flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerScreen}%)`, // Adjusted to slide based on index
            }}
          >
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={slide.href}
                className="carousel-slide h-64 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 p-4" // 3 items per screen
              >
                <div className="flex flex-col justify-between items-center bg-white rounded-lg ">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-36 object-cover rounded-t-lg mb-4"
                  />
                  <button
                    className="lg:w-72  py-3 px-3 bg-blue-500 hover:bg-blue-900 text-white rounded-4xl "
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      window.location.href = slide.href; // Redirect on button click
                    }}
                  >
                    {slide.description}
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handlePrev}
          className="carousel-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black hover:text-blue-700 p-2 rounded-full shadow-md"
        >
          <FaChevronLeft size={24} />
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="carousel-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:text-blue-700 text-black p-2 rounded-full shadow-md"
        >
          <FaChevronRight size={24} />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SpecialitiesSlider;

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SpecialitiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerScreen, setSlidesPerScreen] = useState(3); // Initially set to 3 for desktop

  const slides = [
    { id: 1, description: "Depression", image: "/images/depression.jpg", href: "/depression" },
    { id: 2, description: "Anxiety", image: "/images/Anxiety.jpg", href: "/link2" },
    { id: 3, description: "Bipolar Disorder", image: "/images/BipolarDisorder.jpg", href: "/link3" },
    { id: 4, description: "Schizophrenia", image: "/images/depression.jpg", href: "/link4" },
    { id: 5, description: "OCD", image: "/images/depression.jpg", href: "/link5" },
    { id: 6, description: "CBT", image: "/images/depression.jpg", href: "/link6" },
    { id: 7, description: "DBT", image: "/images/depression.jpg", href: "/link7" },
    { id: 8, description: "Individual Counselling", image: "/images/depression.jpg", href: "/link8" },
    { id: 9, description: "Stress Management", image: "/images/depression.jpg", href: "/link9" },
    { id: 10, description: "Behaviour Therapy", image: "/images/depression.jpg", href: "/link10" },
    { id: 11, description: "Relaxation Therapy", image: "/images/depression.jpg", href: "/link11" },
    { id: 12, description: "Social Skills Training", image: "/images/depression.jpg", href: "/link12" },
    { id: 13, description: "ADHD", image: "/images/depression.jpg", href: "/link13" },
    { id: 14, description: "Autism", image: "/images/depression.jpg", href: "/link14" },
    { id: 15, description: "Incontinence", image: "/images/depression.jpg", href: "/link15" },
    { id: 16, description: "Behaviour Issues", image: "/images/depression.jpg", href: "/link16" },
    { id: 17, description: "Conduct Disorder", image: "/images/depression.jpg", href: "/link17" },
    { id: 18, description: "Learning Disability", image: "/images/depression.jpg", href: "/link18" },
    { id: 19, description: "Motivation Enhancement Therapy", image: "/images/depression.jpg", href: "/link19" },
    { id: 20, description: "Relapse Prevention Therapy", image: "/images/depression.jpg", href: "/link20" },
    { id: 21, description: "Individual Counselling", image: "/images/depression.jpg", href: "/link21" },
    { id: 22, description: "Motivation Enhancement by Hypnosis", image: "/images/depression.jpg", href: "/link22" },
    { id: 23, description: "Premature Ejaculation", image: "/images/depression.jpg", href: "/link23" },
    { id: 24, description: "Erectile Dysfunction", image: "/images/depression.jpg", href: "/link24" },
    { id: 25, description: "Reduced or High Libido", image: "/images/depression.jpg", href: "/link25" },
    { id: 26, description: "Anorgasmia", image: "/images/depression.jpg", href: "/link26" },
    { id: 27, description: "DHAT Syndrome", image: "/images/depression.jpg", href: "/link27" },
    { id: 28, description: "Insomnia", image: "/images/depression.jpg", href: "/link28" },
    { id: 29, description: "Disturbed Sleep", image: "/images/depression.jpg", href: "/link29" },
    { id: 30, description: "Non-refreshing Sleep", image: "/images/depression.jpg", href: "/link30" },
    { id: 31, description: "Sleep Talking", image: "/images/depression.jpg", href: "/link31" },
    { id: 32, description: "Sleep Walking", image: "/images/depression.jpg", href: "/link32" },
    { id: 33, description: "Nightmares", image: "/images/depression.jpg", href: "/link33" },
    { id: 34, description: "Migraine", image: "/images/depression.jpg", href: "/link34" },
    { id: 35, description: "Tension Headache", image: "/images/depression.jpg", href: "/link35" },
    { id: 36, description: "Seizure", image: "/images/depression.jpg", href: "/link36" },
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
    <div className="container mx-auto my-10 lg:px-40 sm:px-14 md:px-18 mt-35">
      <div className="flex justify-between items-center mb-4 px-5">
        <h2 className="text-4xl  text-black">Our Treatments</h2>
       
      </div>

      {/* Carousel Component */}
      <div id="centered" className="relative w-full transition-transform duration-500 ease-in-out">
        {/* Carousel container */}
        <div className="carousel h-80 overflow-hidden ">
          <div
            className="carousel-body h-full w-full flex "
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerScreen}%)`, // Adjusted to slide based on index
            }}
          >
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={slide.href}
                className="carousel-slide h-72 flex-shrink-0 w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 p-4" // Responsive layout: 3 items per screen on large screens
              >
                <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-50 object-cover rounded-t-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
                    loading="lazy"
                  />
                  <button
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-800 text-white text-lg font-semibold rounded-2xl transition-all duration-300 ease-in-out"
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

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          className="carousel-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-white text-blue-700 hover:bg-blue-100 p-3 rounded-full shadow-lg"
        >
          <FaChevronLeft size={24} />
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="carousel-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-blue-100 text-blue-700 p-3 rounded-full shadow-lg"
        >
          <FaChevronRight size={24} />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SpecialitiesSlider;

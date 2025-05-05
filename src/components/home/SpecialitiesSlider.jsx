import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const SpecialitiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerScreen, setSlidesPerScreen] = useState(4);

  const slides = [
    {
      id: 1,
      description: "stress and anxiety",
      image: "/images/stress.png",
      href: "",
    },
    {
      id: 2,
      description: "depression",
      image: "/images/brain2.png",
      href: "/link2",
    },
    {
      id: 3,
      description: "bipolar affective disorder",
      image: "/images/bipolar.png",
      href: "/link3",
    },
    {
      id: 4,
      description: "obsessive compulsion disorder (OCD)",
      image: "/images/obsessivecompulsivedisorder.png",
      href: "/link4",
    },
    {
      id: 5,
      description: "panic attacks",
      image: "/images/attack.png",
      href: "/link5",
    },
    { id: 6, description: "phobia", image: "/images/fear.png", href: "/link6" },
    {
      id: 7,
      description: "generalised anxiety disorder (GAD)",
      image: "/images/mental-disorder.png",
      href: "/link7",
    },
    {
      id: 8,
      description: "social anxiety disorder",
      image: "/images/paranoia.png",
      href: "/link8",
    },
    {
      id: 9,
      description: "schizophrenia",
      image: "/images/schizophrenia.png",
      href: "/link9",
    },
    {
      id: 10,
      description: "pseudo seizure",
      image: "/images/migraine.png",
      href: "/link10",
    },
    {
      id: 11,
      description: "dementia",
      image: "/images/107.jpg",
      href: "/link11",
    },
    {
      id: 12,
      description: "personality disorder",
      image: "/images/108.png",
      href: "/link12",
    },
    { id: 13, description: "ADHD", image: "/images/107.jpg", href: "/link13" },
    {
      id: 14,
      description: "conduct disorder",
      image: "/images/108.png",
      href: "/link14",
    },
    {
      id: 15,
      description: "oppositional defined disorder",
      image: "/images/107.jpg",
      href: "/link15",
    },
    {
      id: 16,
      description: "mental retardation",
      image: "/images/108.png",
      href: "/link16",
    },
    {
      id: 17,
      description: "organic brain changes and behavioural issue",
      image: "/images/107.jpg",
      href: "/link17",
    },
    {
      id: 18,
      description: "alcohol dependence",
      image: "/images/108.png",
      href: "/link18",
    },
    {
      id: 19,
      description: "smoking dependence (nicotine dependence)",
      image: "/images/107.jpg",
      href: "/link19",
    },
    {
      id: 20,
      description: "tobacco dependence",
      image: "/images/107.jpg",
      href: "/link20",
    },
    {
      id: 21,
      description: "opioid dependence",
      image: "/images/107.jpg",
      href: "/link21",
    },
    {
      id: 22,
      description: "cannabis dependence",
      image: "/images/107.jpg",
      href: "/link22",
    },
    {
      id: 23,
      description: "benzodiazepine dependence (sleeping pills)",
      image: "/images/108.png",
      href: "/link23",
    },
    {
      id: 24,
      description: "cocaine dependence",
      image: "/images/107.jpg",
      href: "/link24",
    },
    {
      id: 25,
      description: "caffeine dependence",
      image: "/images/108.png",
      href: "/link25",
    },
    {
      id: 26,
      description: "other addiction (mobile addiction & gambling)",
      image: "/images/107.jpg",
      href: "/link26",
    },
    {
      id: 27,
      description: "general counselling",
      image: "/images/108.png",
      href: "/link27",
    },
    {
      id: 28,
      description: "career counselling",
      image: "/images/107.jpg",
      href: "/link28",
    },
    {
      id: 29,
      description: "problem oriented counselling",
      image: "/images/108.png",
      href: "/link29",
    },
    {
      id: 30,
      description: "CBT (Cognitive Behavioral Therapy)",
      image: "/images/107.jpg",
      href: "/link30",
    },
    {
      id: 31,
      description: "DBT (Dialectical Behavior Therapy)",
      image: "/images/107.jpg",
      href: "/link31",
    },
    {
      id: 32,
      description: "hypnotherapy",
      image: "/images/107.jpg",
      href: "/link32",
    },
    {
      id: 33,
      description: "conflict resolution therapy",
      image: "/images/107.jpg",
      href: "/link33",
    },
    {
      id: 34,
      description: "marriage counselling",
      image: "/images/108.png",
      href: "/link34",
    },
    {
      id: 35,
      description: "family counselling",
      image: "/images/107.jpg",
      href: "/link35",
    },
    {
      id: 36,
      description: "supportive therapy",
      image: "/images/108.png",
      href: "/link36",
    },
    {
      id: 37,
      description: "relaxation technique",
      image: "/images/107.jpg",
      href: "/link37",
    },
    {
      id: 38,
      description: "MBT (Mentalization Based Therapy)",
      image: "/images/108.png",
      href: "/link38",
    },
    {
      id: 39,
      description: "motivation enhancement therapy",
      image: "/images/107.jpg",
      href: "/link39",
    },
    {
      id: 40,
      description: "relapse prevention therapy",
      image: "/images/107.jpg",
      href: "/link40",
    },
    {
      id: 41,
      description: "IQ testing",
      image: "/images/107.jpg",
      href: "/link41",
    },
    {
      id: 42,
      description: "ADHD assessment",
      image: "/images/108.png",
      href: "/link42",
    },
    {
      id: 43,
      description: "MMS and autism assessment",
      image: "/images/107.jpg",
      href: "/link43",
    },
    {
      id: 44,
      description: "Rating scales",
      image: "/images/108.png",
      href: "/link44",
    },
    {
      id: 45,
      description: "personality test",
      image: "/images/107.jpg",
      href: "/link45",
    },
    {
      id: 46,
      description: "Rorschach test",
      image: "/images/108.png",
      href: "/link46",
    },
    {
      id: 47,
      description: "TAT (Thematic Apperception Test)",
      image: "/images/107.jpg",
      href: "/link47",
    },
  ];

  const totalSlides = slides.length;

  // Update slidesPerScreen based on the window size
  useEffect(() => {
    const updateSlidesPerScreen = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerScreen(4); // Desktop
      } else if (window.innerWidth >= 768) {
        setSlidesPerScreen(3); // Tablet
      } else {
        setSlidesPerScreen(1); // Mobile
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
    <div className="container mx-auto my-16 px-16">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-4xl font-bold">Specialities</h2>
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
              <Link
                key={slide.id}
                to={slide.href}
                className="carousel-slide h-60 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
              >
                <div className="flex flex-col justify-between items-center bg-white rounded-lg hover:bg-blue-200 p-4">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-36 h-36 object-fit rounded-t-lg mb-4 "
                    loading="lazy"
                  />
                  <span className="text-md text-black font-bold">
                    {slide.description}
                  </span>
                </div>
              </Link>
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

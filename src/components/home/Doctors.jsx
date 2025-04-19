import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Doctors = () => {
  // Sample data
  const data = [
    {
      img: "/images/doctor1.jpeg",
      name: "Dr. John Doe",
      info: "Cardiologist at XYZ Hospital",
    },
    {
      img: "/images/doctor1.jpeg",
      name: "Dr. Jane Smith",
      info: "Dentist at ABC Clinic",
    },
    {
      img: "/images/doctor1.jpeg",
      name: "Dr. Michael Lee",
      info: "Orthopedic Surgeon at LMN Hospital",
    },
    {
      img: "/images/doctor1.jpeg",
      name: "Dr. John Doe",
      info: "Cardiologist at XYZ Hospital",
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerScreen, setSlidesPerScreen] = useState(4); // Default to 4 for desktop

  const totalSlides = data.length;

  // Update slidesPerScreen based on window size
  useEffect(() => {
    const updateSlidesPerScreen = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerScreen(4); // Desktop: 4 items per screen
      } else if (window.innerWidth >= 768) {
        setSlidesPerScreen(1); // md & Tablet: 1 item per screen
      } else {
        setSlidesPerScreen(1); // Mobile: 1 item per screen
      }
    };

    updateSlidesPerScreen(); // Set initial value
    window.addEventListener("resize", updateSlidesPerScreen); // Update on resize

    return () => window.removeEventListener("resize", updateSlidesPerScreen); // Cleanup listener
  }, []);

  // Handle slide position changes (prev/next)
  const updateSlidePosition = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(totalSlides - slidesPerScreen); // Loop to last slide
    } else if (newIndex >= totalSlides) {
      setCurrentIndex(0); // Loop to first slide
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
    <div className="container mx-auto my-20 lg:px-20 sm:px-14 md:px-18 ">
      <div className="flex justify-between items-center mb-4 px-5">
        <h2 className="text-3xl ">Our Team of Experts</h2>
        <a href="/doctors">
        <h3 className="hover:underline underline-offset-10 hover:text-blue-600 decoration-2 decoration-yellow-600"> View all</h3>
        </a>
      </div>

      {/* Carousel Component */}
      <div id="centered" className="relative w-full">
        {/* Carousel container */}
        <div className="carousel h-[400px] overflow-hidden">
          <div
            className="carousel-body flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerScreen}%)`, // Adjust to slide based on index
            }}
          >
            {data.map((doctor, index) => (
              <div
                key={index}
                className="carousel-slide flex-shrink-0 px-4"
                style={{
                  width: `${100 / slidesPerScreen}%`, // Adjust width to screen size
                }}
              >
                <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-md">
                  <div className="overflow-hidden w-full h-72 rounded-t-lg">
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start px-2">
                    <p className="font-semibold text-lg text-left">{doctor.name}</p>
                    <p className="text-sm text-black text-left">{doctor.info}</p>
                  </div>
                  <div className="flex w-full space-x-2 mt-2">
                    <a
                      href="#"
                      className="flex-grow text-sm text-center py-2 bg-blue-500 text-white rounded-sm"
                    >
                      View Full Profile
                    </a>
                    <a
                      href="#"
                      className="flex-grow text-sm text-center py-2 bg-green-500 text-white rounded-sm"
                    >
                      Book an Appointment
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
      </div>
      <div className="relative w-full flex justify-center gap-4 mt-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="bg-white text-black hover:text-blue-700 p-2 rounded-full shadow-md"
        >
          <FaChevronLeft size={24} />
          <span className="sr-only">Previous</span>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-white text-black hover:text-blue-700 p-2 rounded-full shadow-md"
        >
          <FaChevronRight size={24} />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Doctors;

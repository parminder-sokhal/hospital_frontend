import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Doctors = () => {
  // Sample data
  const data = [
    {
      img: "/images/doctor1.jpg",
      name: "Dr. John Doe",
      info: "1Cardiologist at XYZ Hospital",
    },
    {
      img: "/images/doctor2.jpg",
      name: "Dr. Jane Smith",
      info: "2Dentist at ABC Clinic",
    },
    {
      img: "/images/doctor3.jpg",
      name: "Dr. Michael Lee",
      info: "3Orthopedic Surgeon at LMN Hospital",
    },
    {
      img: "/images/doctor1.jpg",
      name: "Dr. John Doe",
      info: "4Cardiologist at XYZ Hospital",
    },
    {
      img: "/images/doctor2.jpg",
      name: "Dr. Jane Smith",
      info: "5Dentist at ABC Clinic",
    },
    {
      img: "/images/doctor3.jpg",
      name: "Dr. Michael Lee",
      info: "6Orthopedic Surgeon at LMN Hospital",
    },
    {
      img: "/images/doctor1.jpg",
      name: "Dr. John Doe",
      info: "7Cardiologist at XYZ Hospital",
    },
    {
      img: "/images/doctor2.jpg",
      name: "Dr. Jane Smith",
      info: "8Dentist at ABC Clinic",
    },
    {
      img: "/images/doctor3.jpg",
      name: "Dr. Michael Lee",
      info: "9Orthopedic Surgeon at LMN Hospital",
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
        setSlidesPerScreen(2); // Tablet: 2 items per screen
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
    <div className="container mx-auto my-10 lg:px-20 sm:px-14 md:px-18 mt-35">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-4xl font-bold">Our Doctors</h2>
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
                className="carousel-slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 p-4"
              >
                <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-md w-72 h-92">
                  <div className="overflow-hidden w-full h-72 rounded-t-lg">
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                  <div className=" flex flex-col items-center justify-start">
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

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeCarousel } from "../hook/useSwipeCarousel";

const patientStories = [
  {
    id: 1,
    name: "XYZ CBA",
    date: "May 30, 2024",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4", // or replace with image URL
    heading:
      "Lumbar Spine Surgery | Transforaminal Lumbar Interbody Fusion (TLIF)",
    description:
      "Lakshmi Pai entrusted us with her journey, and for that, we are immensely grateful. Under the meticulous care of Dr. Gayatri Kamath at Fortis Hospitals, her medical experience was profoundly guided.",
    treatedBy: "Dr. Gayatri Kamath",
    hospital: "Loona Hospital, Panchkula",
  },
  {
    id: 2,
    name: "John Doe",
    date: "April 20, 2024",
    video: "", // an image fallback
    heading: "Knee Replacement Surgery",
    description:
      "John's journey to recovery was made smoother thanks to our attentive care team. His resilience and positive attitude helped him heal faster.",
    treatedBy: "Dr. Asha Mehta",
    hospital: "Loona Hospital, Panchkula",
  },
  {
    id: 3,
    name: "XYZ 1",
    date: "May 30, 2024",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4", // or replace with image URL
    heading:
      "Lumbar Spine Surgery | Transforaminal Lumbar Interbody Fusion (TLIF)",
    description:
      "Lakshmi Pai entrusted us with her journey, and for that, we are immensely grateful. Under the meticulous care of Dr. Gayatri Kamath at Fortis Hospitals, her medical experience was profoundly guided.",
    treatedBy: "Dr. Gayatri Kamath",
    hospital: "Loona Hospital, Panchkula",
  },
  {
    id: 4,
    name: "John Doe",
    date: "April 20, 2024",
    video: "/images/doctor1.jpeg", // an image fallback
    heading: "Knee Replacement Surgery",
    description:
      "John's journey to recovery was made smoother thanks to our attentive care team. His resilience and positive attitude helped him heal faster.",
    treatedBy: "Dr. Asha Mehta",
    hospital: "Loona Hospital, Panchkula",
  },
];

const PatientReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerScreen, setCardsPerScreen] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerScreen(2);
      } else {
        setCardsPerScreen(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => updateSlide(currentIndex + 1);
  const handlePrev = () => updateSlide(currentIndex - 1);
  const handlers = useSwipeCarousel({
    onNext: handleNext,
    onPrev: handlePrev,
  });

  const updateSlide = (newIndex) => {
    const maxIndex = patientStories.length - cardsPerScreen;
    const clampedIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url(/images/bgour.jpg)]">
      <div className="flex flex-col lg:flex-row container mx-auto py-20 px-4 lg:px-30 ">
        {/* Left static section */}
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-4">Our Patient Stories</h2>
          <h3 className="text-2xl text-black mb-2">What People Say About Us</h3>
        </div>

        {/* Right sliding section */}
        <div className="w-full lg:w-2/3 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / patientStories.length)}%)`,
              width: `${(patientStories.length * 100) / cardsPerScreen}%`,
            }}
            {...handlers}
          >
            {patientStories.map((story) => (
              <div
                key={story.id}
                className="p-4 flex-shrink-0"
                style={{ width: `${100 / patientStories.length}%` }}
              >
                <div className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden h-full">
                  {/* Left section */}
                  <div className="w-1/3 flex flex-col items-center justify-start py-10">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-blue-500">
                      {story.video.includes("youtube") ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={story.video}
                          title="Patient Video"
                          frameBorder="0"
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={story.video}
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="text-center text-sm">
                      <p className="font-bold">{story.name}</p>
                      <p className="text-gray-500">{story.date}</p>
                    </div>
                  </div>

                  {/* Right section */}
                  <div className="w-2/3 p-4 flex flex-col justify-evenly">
                    <h3 className="text-md lg:text-lg font-bold mb-2">
                      {story.heading}
                    </h3>
                    <p className="text-gray-600 mb-2 text-sm">
                      {story.description}
                    </p>
                    <p className="text-sm text-gray-700 font-medium">
                      Treated by: {story.treatedBy} <br />
                      {story.hospital}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={handlePrev}
              className="bg-white text-black hover:text-blue-700 p-2 rounded-full shadow"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-black hover:text-blue-700 p-2 rounded-full shadow"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReview;

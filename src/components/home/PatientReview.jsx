import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeCarousel } from "../hook/useSwipeCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../../redux/actions/linksAction"; // adjust path if needed

const PatientReview = () => {
  const dispatch = useDispatch();
  const { links } = useSelector((state) => state.links);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerScreen, setCardsPerScreen] = useState(2);
  const [patientStories, setPatientStories] = useState([]);

  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);

  useEffect(() => {
    // Filter only homestories category
    const filtered = links?.filter((link) => link.category === "homestories");
    setPatientStories(filtered || []);
  }, [links]);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerScreen(window.innerWidth >= 1024 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => updateSlide(currentIndex + 1);
  const handlePrev = () => updateSlide(currentIndex - 1);
  const handlers = useSwipeCarousel({ onNext: handleNext, onPrev: handlePrev });

  const updateSlide = (newIndex) => {
    const maxIndex = patientStories.length - cardsPerScreen;
    const clampedIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  if (!patientStories.length) return null; // Or show a fallback UI if no stories

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url(/pictures/bgour.jpg)]">
      <div className="flex flex-col lg:flex-row container mx-auto py-20 px-4 lg:px-20">
        <div className="w-full lg:w-2/5 mb-10 lg:mb-0 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-4">Our Patient Stories</h2>
          <h3 className="text-2xl text-black mb-2">What People Say About Us</h3>
        </div>

        <div className="relative overflow-hidden w-full lg:w-3/5">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / patientStories.length)}%)`,
              width: `${(patientStories.length * 100) / cardsPerScreen}%`,
            }}
            {...handlers}
          >
            {patientStories.map((story, index) => (
              <div
                key={story._id}
                className="p-3 flex-shrink-0"
                style={{ width: `${100 / patientStories.length}%` }}
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                  <iframe
                    className="w-full aspect-video"
                    src={story.url}
                    title={`Patient Video ${index + 1}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
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

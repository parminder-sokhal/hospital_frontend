import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"; // Importing react-icons
import { useSwipeCarousel } from "../hook/useSwipeCarousel";

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Corrected URLs for Google Drive
  const photos = [
    "/pictures/gallery.jpeg",
    "/pictures/gallery2.jpeg",
    "/pictures/gallery6.jpeg",
    "/pictures/gallery8.jpeg",
    "/pictures/gallery10.jpeg",
    "/pictures/gallery14.jpeg",
    "/pictures/Playground.jpeg",
    "/pictures/Garden.jpeg",
  ];

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlers = useSwipeCarousel({
    onNext: handleNext,
    onPrev: handlePrev,
  });
  return (
    <div className="bg-fixed bg-cover bg-[url(/pictures/Background.jpeg)]">
      <div className="container mx-auto lg:px-20 px-15 py-20 " {...handlers}>
        <div className="text-center flex flex-col justify-between mb-8">
          <h1 className="text-4xl justify-start flex text-black">
            Loona Hospital
          </h1>
          <h2 className="text-2xl justify-start flex text-gray-800">
            Image Gallery
          </h2>
        </div>

        {/* Image Grid (Responsive: 2 columns for sm/md, 4 columns for lg) */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="w-full h-auto cursor-pointer rounded-lg overflow-hidden"
              onClick={() => handleOpen(index)}
            >
              <img
                src={photo}
                alt={`Photo ${index}`}
                className="w-full h-72 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 backdrop-blur-xs bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <div
              className="relative "
              style={{ width: "90vw", height: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[currentIndex]}
                alt="Fullscreen"
                className="w-full h-full object-contain rounded-lg"
              />
              {/* Close Button (X icon) */}
              <button
                className="absolute top-0 right-0 text-white transform -translate-y-1/2 bg-gray-800 p-2 rounded-full  text-md lg:text-xl"
                onClick={handleClose}
              >
                <FaTimes />
              </button>

              {/* Image Count */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
                {currentIndex + 1}/{photos.length}
              </div>

              {/* Left Navigation Button */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </button>

              {/* Right Navigation Button */}
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full"
                onClick={handleNext}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;

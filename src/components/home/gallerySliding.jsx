import React, { useState, useEffect } from "react";
import { useSwipeCarousel } from "../hook/useSwipeCarousel";

const GallerySliding = () => {
  const images = [
    "https://cdn.eka.care/clinics/62972d13d21e52001e294710/162200699512413/exterior/7e159a9421f0e50185219d390fbf971fc414fbf5d8454e051e00eb0811d17a22.jpeg",
    "https://cdn.eka.care/clinics/62972d13d21e52001e294710/162200699512413/exterior/d9211f7a455259908d1d93501fdd528d88c94c536148675e89357dbf2305a76f.jpeg",
    "https://cdn.eka.care/clinics/62972d13d21e52001e294710/162200699512413/interior/64f2700c0fa58953cf6d376bfe049cbfd74dde0c45c2dc7089482ef0a78af6e7.jpeg",
    "https://cdn.eka.care/clinics/62972d13d21e52001e294710/162200699512413/interior/8fe461eed45e8ff1052306c3ad3014d262884c6fa980b682e32196772f17203c.jpeg",
    "https://cdn.eka.care/clinics/62972d13d21e52001e294710/162200699512413/with_patients/82e89efc8ef343587ec4923d9caf55722ff304e4ff42214de1d55471882408cc.jpeg",
    "https://images.jdmagicbox.com/comp/chandigarh/e3/0172px172.x172.120211201601.i4e3/catalogue/loona-neuropsychiatry-and-de-addiction-centre-panchkula-sector-12a-panchkula-de-addiction-centres-ghbjej4hrp-250.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Move to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlers = useSwipeCarousel({
    onNext: goToNext,
    onPrev: goToPrevious,
  });

  useEffect(() => {
    const interval = setInterval(goToNext, 6200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full mt-30"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-72 sm:h-[450px] md:h-[500px] overflow-hidden "  {...handlers}
>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            data-carousel-item
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`carousel-item-${index}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default GallerySliding;

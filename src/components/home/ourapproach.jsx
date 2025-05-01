import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Importing phone icon

const OurApproach = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "Game Therapy",
      description:
        "Game therapy helps individuals overcome personal and emotional challenges using gaming techniques.",
      image: "/images/gametherapy.jpg",
    },
    {
      title: "Yoga & Meditation",
      description:
        "Yoga and meditation are holistic approaches for relaxation and stress management.",
      image: "/images/yoga.jpg",
    },
    {
      title: "Hypnotherapy",
      description:
        "Hypnotherapy uses hypnosis to promote healing and personal growth.",
      image: "/images/hypnotherapy.jpg",
    },
    {
      title: "Autogenic Training",
      description:
        "Autogenic training is a relaxation technique to control the body's stress responses.",
      image: "/images/autogenic.jpg",
    },
    {
      title: "Game Therapy",
      description:
        "Game therapy helps individuals overcome personal and emotional challenges using gaming techniques.",
      image: "/images/gametherapy.jpg",
    },
    {
      title: "Yoga & Meditation",
      description:
        "Yoga and meditation are holistic approaches for relaxation and stress management.",
      image: "/images/yoga.jpg",
    },
    {
      title: "Hypnotherapy",
      description:
        "Hypnotherapy uses hypnosis to promote healing and personal growth.",
      image: "/images/hypnotherapy.jpg",
    },
    {
      title: "Autogenic Training",
      description:
        "Autogenic training is a relaxation technique to control the body's stress responses.",
      image: "/images/autogenic.jpg",
    },
  ];

  const itemsPerPage = 2;
  const pagesCount = Math.ceil(data.length / itemsPerPage);

  const getItemsToShow = () => {
    const startIndex = currentIndex * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage); // Slice the array to show only two items
  };

  const handlePagination = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="py-15 px-4 bg-gray-50"
      style={{
        backgroundImage: "url('/images/Treatmentbg.jpg')", // Replace with your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section - Centered vertically */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-start space-y-4 mb-8 md:mb-0 sm:px-10 px-4">
          <h2 className="text-3xl text-black">Our Approach</h2>
          <p className="text-lg text-black text-start flex items-center ">
            Our approach is based on a holistic view of individual well-being,
            combining therapy, yoga, hypnotherapy, and self-regulation
            techniques. We aim to help you achieve balance in both mind and
            body.
          </p>
          <div className="flex items-center flex-row space-x-2">
           
            <a href="tel:+1234567890" className="flex items-center space-x-2">
            <div className="flex items-center "> <FaPhoneAlt size={30} className="text-red-700 hover:text-blue-800"  /></div>
            <div href="tel:+1234567890" >
              <span className="text-md text-black hover:text-blue-900 ">
                For more information, call
              </span>
              <span
                className="text-lg text-black flex  hover:text-blue-900 transition-colors "
              >
                +91 234 567 890
              </span>
            </div>
            </a>
          </div>
        </div>

        <div className="w-full md:w-3/5 flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row ">
            {getItemsToShow().map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 p-4"
                style={{
                  minHeight: "400px", 
                }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  <div
                    className="h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})`,loading:(`lazy`) }}
                    loading="lazy"
                  ></div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            {[...Array(pagesCount)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePagination(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-yellow-500" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;

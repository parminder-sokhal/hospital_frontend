import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Importing phone icon
import { Link } from "react-router-dom";


const OurApproach = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "Game Therapy",
      description:
        "Game therapy utilizes interactive video games and play-based activities to enhance mental health, improve emotional regulation, and foster social skills in a fun and engaging way.",
      image: "/images/gametherapy.jpg",
    },
    {
      title: "Yoga & Meditation",
      description:"Yoga and meditation therapy combines physical postures, breath control, and mindfulness practices to promote relaxation, reduce stress, and enhance overall mental well-being.",
      image: "/images/yoga.jpg",
    },
    {
      title: "Gym ",
      description:
        "Gym therapy involves structured physical exercise in a gym setting to improve mental health, boost mood, and enhance overall well-being through physical activity and social interaction.",
      image: "/images/hypnotherapy.jpg",
    },
    {
      title: "Recreational activities",
      description:
        "Recreational activities engage individuals in enjoyable pastimes to promote relaxation, social interaction, and mental well-being while reducing stress and enhancing overall life satisfaction.",
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

    
      
      <div className="bg-fixed py-15 px-4 bg-[url(/images/Treatmentbg.png)]">
    
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section - Centered vertically */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-start space-y-4 mb-8 md:mb-0 sm:px-10 px-4">
          <h2 className="text-3xl text-black">Our Approach</h2>
          <p className="text-lg text-black text-start flex items-center ">
            Transform Your Life Today!
            <br /> Are you or a loved one struggling with mental health issues,
            addiction, or sexual wellness challenges? Our specialized hospital
            is here to help you reclaim your life and achieve lasting
            well-being.
          </p>
          <div className="flex items-center flex-row space-x-2">
            <Link to="tel:+1234567890" className="flex items-center space-x-2">
              <div className="flex items-center ">
                {" "}
                <FaPhoneAlt
                  size={30}
                  className="text-red-700 hover:text-blue-800"
                />
              </div>
              <div to="tel:+1234567890">
                <span className="text-md text-black hover:text-blue-900 ">
                  For more information, call
                </span>
                <span className="text-lg text-black flex  hover:text-blue-900 transition-colors ">
                  +91 234 567 890
                </span>
              </div>
            </Link>
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
                    style={{
                      backgroundImage: `url(${item.image})`,
                      loading: `lazy`,
                    }}
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

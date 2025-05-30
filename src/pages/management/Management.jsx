import React from "react";
const managementData = [
  {
    name: "Mr. Madhav Singh - Founder of Loona Hospital",
    description: `Founder of ROAR, is involved full time with the therapeutic and facility management of this treatment facility. For the last 14 years he has been working tirelessly with Alcoholics and Addicts as the Founder Director of Roar Addiction and Rehabilitation Centre, Asola, New Delhi and as a result helped innumerable people to recover and live Alcohol/ Drug free, productive lives.`,
    image: "/images/doctor2.jpeg",
  },
  {
    name: "Dr. Rina Kapoor - Chief Psychiatrist",
    description: `With over 20 years of experience in psychiatry, Dr. Rina is dedicated to improving lives through personalized mental health care. She specializes in adolescent and adult mental wellness.`,
    image: "/images/doctor3.jpeg",
  },
];

const Management = () => {
  return (
    <>
      <div className="flex justify-center  w-full mt-34 sm:h-92 h-52 bg-cover bg-no-repeat bg-center bg-[url('/images/Treatmentbg.png')]">
        <span className="flex justify-center items-center sm:text-8xl text-4xl font-semibold text-white">
          Meet Our Team
        </span>
      </div>
      <div className="bg-white px-6 sm:px-8 md:px-12 py-5 flex flex-col items-center justify-center">
        <h2 className="sm:text-5xl text-3xl font-bold text-gray-800 sm:my-10 ">
          Our Team of Experts
        </h2>
        <div className="max-w-6xl mx-auto py-10">
          {managementData.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start bg-white  overflow-hidden mb-10"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/5 flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-auto rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-4/5 p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Management;

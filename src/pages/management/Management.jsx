import React from "react";

const managementData = [
  {
    name: "Mr. xyz xyzxyz - Founder of Loona Hospital",
    description: `Founder of ROAR, Mr. Madhav Singh is fully dedicated to the therapeutic and facility management at Loona Hospital. With over 14 years of experience helping individuals recover from addiction, he has changed countless lives through the Roar Addiction and Rehabilitation Centre, Asola, New Delhi.`,
    image: "/images/doctor2.jpeg",
  },
  {
    name: "Dr. Rina Kapoor - Chief Psychiatrist",
    description: `With 20+ years of experience in psychiatry, Dr. Rina Kapoor is committed to personalized mental health care. She specializes in both adolescent and adult mental wellness, and leads the psychiatric team at Loona Hospital.`,
    image: "/images/doctor3.jpeg",
  },
  {
    name: "Mr. xyz xyzxyz - Founder of Loona Hospital",
    description: `Founder of ROAR, Mr. Madhav Singh is fully dedicated to the therapeutic and facility management at Loona Hospital. With over 14 years of experience helping individuals recover from addiction, he has changed countless lives through the Roar Addiction and Rehabilitation Centre, Asola, New Delhi.`,
    image: "/images/doctor2.jpeg",
  },
  {
    name: "Dr. Rina Kapoor - Chief Psychiatrist",
    description: `With 20+ years of experience in psychiatry, Dr. Rina Kapoor is committed to personalized mental health care. She specializes in both adolescent and adult mental wellness, and leads the psychiatric team at Loona Hospital.`,
    image: "/images/doctor3.jpeg",
  },
];

const Management = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex justify-center items-center mt-34 w-full h-60 sm:h-80 bg-cover bg-no-repeat bg-center bg-[url('/images/Treatmentbg.png')]">
        <h1 className="text-white text-4xl sm:text-6xl font-bold tracking-wide drop-shadow-md">
          Meet Our Team
        </h1>
      </div>

      {/* Team Section */}
      <div className="container mx-auto bg-white px-6 sm:px-12 lg:px-40 py-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-16">
          Our Team of Experts
        </h2>

        <div className="space-y-20">
            {managementData.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover object-top rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-2/3 text-left">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
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

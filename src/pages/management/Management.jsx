import React from "react";

const managementData = [
  {
    name: "Dr. Neeraj Loona | MBBS, MD Psychiatry - Director & Head, Loona Hospital",
    description: `Dr. Neeraj Loona is a distinguished psychiatrist with extensive experience in the field of mental health. As the Director and Head of Loona Hospital, he leads a dedicated team of professionals committed to providing comprehensive psychiatric care.`,
    image: "/pictures/Neeraj1.JPG",
  },
  {
    name: "Ms. Jaya Choudhary | Project Manager ",
    description: `Ms. Jaya Choudhary is a skilled Project Manager with 4 years of experience in the field of Drug De-addiction. Holding a bachelor’s degree in medical sciences, she effectively bridges clinical understanding with project execution. Her expertise lies in program coordination, stakeholder engagement, and outcome-focused rehabilitation, ensuring smooth operations and impactful results.`,
    image: "/pictures/Jiya.JPG",
  },
  {
    name: "Mrs. Neha | Hospital Manager",
    description: `Mrs.Neha  is an experienced Hospital Manager with 3 years of proven leadership in healthcare administration. She specializes in streamlining hospital operations, enhancing patient services, and maintaining compliance with healthcare standards. Her proactive management style ensures efficient workflows and high-quality patient care.`,
    image: "/pictures/Neha.JPG",
  },
];

const Management = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex justify-center items-center mt-34 w-full h-60 sm:h-110 bg-cover bg-no-repeat bg-center bg-[url('/pictures/loona.jpg')]">
        <h2 className="text-3xl sm:text-8xl font-bold text-white text-center mb-16">
          Management Team
        </h2>
      </div>

      {/* Team Section */}
      <div className="container mx-auto bg-white px-6 sm:px-12 lg:px-40 py-16">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-20">
          Meet Our Management Team
        </h1>

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

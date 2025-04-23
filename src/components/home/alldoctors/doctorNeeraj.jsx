import React, { useState } from "react";
import {
  BsFacebook,
  BsTwitterX,
  BsLinkedin,
  BsWhatsapp,
  BsShareFill,
} from "react-icons/bs";
import {
  FaGraduationCap,
  FaAward,
  FaUserMd,
} from "react-icons/fa";

const doctor = {
  img: "/images/doctor1.jpeg",
  name: "Dr. Neeraj Gupta",
  info: "Neurologist at BrainCare Hospital",
  specialistinfo: "Neuro & Spine Specialist",
  experience: "20 yrs",
  fees: "$300",
  about:
    "Dr. Neeraj Gupta is a leading neurologist with over 20 years of experience treating patients with complex neurological disorders. He is known for his patient-friendly approach, clinical excellence, and deep involvement in research and education.",
  education:
    "MBBS - AIIMS Delhi | MD Neurology - PGIMER Chandigarh | Fellowship - Harvard Medical School",
  awards:
    "Best Neurologist of the Year (2019), Global Medical Excellence Award (2021), Lifetime Achievement in Neurosciences (2023)",
};

const DoctorNeeraj = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showAwards, setShowAwards] = useState(false);
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="container mx-auto my-10 px-4 sm:px-10 md:px-20 lg:px-40 mt-35">
      {/* Top Section */}
      <div className="bg-white  py-6 flex flex-col md:flex-row items-start md:items-center border-b border-gray-300 ">
        {/* Image */}
        <div className="w-50 h-42 rounded-full overflow-hidden border-2 border-blue-400 shadow-md">
          <img
            src={doctor.img}
            alt={doctor.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info & Details */}
        <div className="flex flex-col md:flex-row justify-start items-start w-full gap-4">
          {/* Name & Info */}
          <div className="flex flex-col px-10">
            <h2 className="text-xl sm:text-4xl font-bold text-blue-700">
              {doctor.name}
            </h2>
            <p className="text-md  text-gray-600 mt-1">{doctor.info}</p>
            <p className="text-md  text-gray-800 mt-1 font-medium">
              {doctor.specialistinfo}
            </p>
          </div>

          {/* Experience & Fees */}
          <div className="flex flex-col justify-center py-2">
            <div className="w-70 text-md font-semibold bg-gray-200 text-gray-800 border border-gray-400 px-4 py-1 ">
              <p>{doctor.experience}</p>
              <span className="text-gray-500 ">Experience</span>
            </div>
            <div className="w-70 text-md font-semibold bg-gray-200 text-gray-800 border px-5 py-1 border-gray-400">
              <p>{doctor.fees}</p>
              <span className="text-gray-500">Fees</span>
            </div>
          </div>

          {/* Share */}
          <div className="relative flex items-center justify-center py-2 px-4">
            <button
              onClick={() => setShowShare(!showShare)}
              className="text-blue-500 hover:text-white hover:bg-blue-500 p-2 rounded-full border border-blue-700 transition-all duration-300"
            >
              <BsShareFill size={20} />
            </button>
            {showShare && (
              <div
                className="absolute right-0 mt-3 w-44 bg-white border shadow-md rounded-md flex flex-col p-2 gap-2 z-20"
              >
                <a href="#" className="flex items-center gap-2 hover:text-blue-700">
                  <BsFacebook /> Facebook
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-blue-700">
                  <BsTwitterX /> Twitter
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-blue-700">
                  <BsLinkedin /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-blue-700">
                  <BsWhatsapp /> WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row mt-10 gap-6">
        {/* Left Div */}
        <div className="lg:w-2/3 space-y-6">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-700">
              <FaUserMd /> <h3 className="text-xl font-semibold">About</h3>
            </div>
            <p className="text-gray-700 text-sm">
              {showAbout ? doctor.about : `${doctor.about.slice(0, 150)}...`}
            </p>
            <button
              className="text-blue-700 text-sm mt-2 hover:underline"
              onClick={() => setShowAbout(!showAbout)}
            >
              {showAbout ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-700">
              <FaGraduationCap /> <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-700 text-sm">{doctor.education}</p>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-700">
              <FaAward /> <h3 className="text-xl font-semibold">Awards</h3>
            </div>
            <p className="text-gray-700 text-sm">
              {showAwards ? doctor.awards : `${doctor.awards.slice(0, 100)}...`}
            </p>
            <button
              className="text-blue-700 text-sm mt-2 hover:underline"
              onClick={() => setShowAwards(!showAwards)}
            >
              {showAwards ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Right Div */}
        <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-4">
            Schedule Appointment
          </h2>
          <div className="space-y-3">
            <div className="text-sm font-semibold text-gray-700">Select Date:</div>
            <input
              type="date"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            <div className="text-sm font-semibold text-gray-700 mt-4">
              Available Time Slots:
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"].map((time, i) => (
                <button
                  key={i}
                  className="px-3 py-1 border border-blue-700 rounded-md text-sm text-blue-700 hover:bg-blue-700 hover:text-white transition"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorNeeraj;

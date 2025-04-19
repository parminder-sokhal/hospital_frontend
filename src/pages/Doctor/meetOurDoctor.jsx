import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
// Sample doctor data
const data = [
  {
    img: "/images/doctor1.jpg",
    name: "Dr. John Doe",
    info: "Cardiologist at XYZ Hospital",
  },
  {
    img: "/images/doctor2.jpg",
    name: "Dr. Jane Smith",
    info: "Dentist at ABC Clinic",
  },
  {
    img: "/images/doctor3.jpg",
    name: "Dr. Michael Lee",
    info: "Orthopedic Surgeon at LMN Hospital",
  },
  {
    img: "/images/doctor1.jpg",
    name: "Dr. John Doe",
    info: "Cardiologist at XYZ Hospital",
  },
  {
    img: "/images/doctor2.jpg",
    name: "Dr. Jane Smith",
    info: "Dentist at ABC Clinic",
  },
  {
    img: "/images/doctor3.jpg",
    name: "Dr. Michael Lee",
    info: "Orthopedic Surgeon at LMN Hospital",
  },
  {
    img: "/images/doctor1.jpg",
    name: "Dr. John Doe",
    info: "Cardiologist at XYZ Hospital",
  },
];

const MeetOutDoctors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered doctor data based on search term
  const filteredDoctors = data.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto my-10 lg:px-20 sm:px-14 md:px-18 px-10 mt-40">
      
      <div className="relative mt-4 w-60 md:w-72 ">
        <input
          type="text"
          placeholder="Search for doctors..."
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {filteredDoctors.map((doctor, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="overflow-hidden w-full h-72">
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center justify-start px-4 py-4">
              <p className="font-semibold text-lg text-center">{doctor.name}</p>
              <p className="text-sm text-black text-center">{doctor.info}</p>
            </div>
            <div className="flex w-full space-x-2 mt-2 px-4 pb-4">
              <a
                href="#"
                className="flex-grow text-sm text-center py-2 bg-blue-500 text-white rounded-sm"
              >
                View Full Profile
              </a>
              <a
                href="#"
                className="flex-grow text-sm text-center py-2 bg-green-500 text-white rounded-sm"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOutDoctors;

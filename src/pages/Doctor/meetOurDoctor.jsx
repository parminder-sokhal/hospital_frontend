import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

// Updated doctor data
const data = [
  {
    img: "/images/doctor1.jpeg",
    name: "Dr. John Doe",
    info: "Cardiologist at XYZ Hospital",
    specialistinfo: "Heart & Vascular Specialist",
    experience: "15 yrs",
    fees: "$200",
  },
  {
    img: "/images/doctor2.jpeg",
    name: "Dr. Jane Smith",
    info: "Dentist at ABC Clinic",
    specialistinfo: "Cosmetic Dentistry",
    experience: "10 yrs",
    fees: "$120",
  },
  {
    img: "/images/doctor3.jpeg",
    name: "Dr. Michael Lee",
    info: "Orthopedic Surgeon at LMN Hospital",
    specialistinfo: "Joint Replacement",
    experience: "18 yrs",
    fees: "$250",
  },
  {
    img: "/images/doctor1.jpeg",
    name: "Dr. John Doe",
    info: "Cardiologist at XYZ Hospital",
    specialistinfo: "Heart & Vascular Specialist",
    experience: "15 yrs",
    fees: "$200",
  },
  {
    img: "/images/doctor2.jpeg",
    name: "Dr. Jane Smith",
    info: "Dentist at ABC Clinic",
    specialistinfo: "Cosmetic Dentistry",
    experience: "10 yrs",
    fees: "$120",
  },
  {
    img: "/images/doctor3.jpeg",
    name: "Dr. Michael Lee",
    info: "Orthopedic Surgeon at LMN Hospital",
    specialistinfo: "Joint Replacement",
    experience: "18 yrs",
    fees: "$250",
  },
  {
    img: "/images/doctor1.jpeg",
    name: "Dr. John Doe",
    info: "Cardiologist at XYZ Hospital",
    specialistinfo: "Heart & Vascular Specialist",
    experience: "15 yrs",
    fees: "$200",
  },
];

const MeetOutDoctors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = data.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (doctor.info.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialistinfo.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto my-10 lg:px-40 sm:px-14 md:px-18 px-10 mt-40">
      <div className="relative mt-4 w-62 md:w-82 ">
        <input
          type="text"
          placeholder="Name, Speacialities"
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 ">
        {filteredDoctors.map((doctor, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* New Layout Start */}
            <div className="flex px-5 py-6 sm:gap-5 items-start space-x-4 w-full">
              {/* Left: Circular Image */}
              <div className="w-25 h-25 rounded-full overflow-hidden justify-start flex-shrink-0">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>

              {/* Right: Info */}
              <div className="flex flex-col flex-grow w-full">
                <p className="font-semibold text-xl">{doctor.name}</p>
                <p className="text-sm text-gray-600">{doctor.info}</p>
                <p className="text-md text-black">{doctor.specialistinfo}</p>
                <div className="flex justify-start gap-4 text-sm mt-2">
                  <span className="text-black font-bold flex flex-col">
                    {doctor.experience}
                    <span className="text-gray-600"> Experience</span>
                  </span>
                  <span className="text-black font-bold flex flex-col">
                    {doctor.fees}
                    <span className="text-gray-600"> Fees</span>
                  </span>
                </div>
              </div>
            </div>
            {/* New Layout End */}

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

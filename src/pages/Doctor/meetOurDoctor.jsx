import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableDoctors } from "../../redux/actions/doctorAction";
import { useNavigate } from "react-router-dom";

const MeetOutDoctors = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const { availableDoctors, loading, error } = useSelector(
    (state) => state.doctor
  );

  useEffect(() => {
    dispatch(getAvailableDoctors());
  }, [dispatch]);

  const filteredDoctors = availableDoctors
    ?.filter((doc) => !doc.isdeleted && doc.isActive)
    ?.filter((doctor) => {
      const term = searchTerm.toLowerCase();
      return (
        doctor.name.toLowerCase().includes(term) ||
        doctor.hospital.toLowerCase().includes(term) ||
        doctor.specialization.toLowerCase().includes(term)
      );
    });

  return (
    <div className="container mx-auto my-10 lg:px-30 sm:px-14 md:px-18 px-10 mt-40">
      <div className="relative mt-4 w-62 md:w-82 ">
        <input
          type="text"
          placeholder="Name, Specialist"
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
      </div>

      {loading ? (
        <p className="text-center mt-8">Loading doctors...</p>
      ) : error ? (
        <p className="text-center mt-8 text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 place-items-center">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={doctor._id || index}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden w-full justify-between mx-auto"
            >
              <div className="flex px-5 py-6 sm:gap-5 items-start space-x-4 w-full">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={doctor.image?.url || "/images/doctor1.jpeg"}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>

                <div className="flex flex-col flex-grow w-full">
                  <p className="font-semibold text-xl truncate">
                    {doctor.name}
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {doctor.hospital}
                  </p>
                  <p className="text-md text-black truncate">
                    {doctor.specialization}
                  </p>

                  <div className="flex justify-start gap-4 text-sm mt-2">
                    <span className="text-black font-bold flex flex-col">
                      <span className="flex gap-1">
                        {doctor.experience}
                        <span>Years</span>
                      </span>
                      <span className="text-gray-600">Experience</span>
                    </span>
                    <span className="text-black font-bold flex flex-col">
                      ₹ {doctor?.fees}
                      <span className="text-gray-700">Fees</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex w-full space-x-2 mt-2 px-4 pb-4">
                <button
                  onClick={() => navigate(`/doctor/${doctor._id}`)}
                  className="flex-grow text-sm text-center py-2 bg-blue-500 text-white rounded-sm"
                >
                  View Full Profile
                </button>
                <button
                  onClick={() => navigate(`/doctor/${doctor._id}`)}
                  className="flex-grow text-sm text-center py-2 bg-green-500 text-white rounded-sm"
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeetOutDoctors;

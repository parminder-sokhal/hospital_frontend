import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorById } from "../../redux/actions/doctorAction";
import { FaGraduationCap, FaAward, FaUserMd } from "react-icons/fa";

const DoctorProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { doctor, loading, error } = useSelector((state) => state.doctor);

  const [showAbout, setShowAbout] = useState(false);
  const [showAwards, setShowAwards] = useState(false);

  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  useEffect(() => {
    dispatch(getDoctorById(id));
  }, [dispatch, id]);

  const handleBookNow = () => {
    if (!selectedDate || !selectedTimeSlot) {
      alert("Please select a date and a time slot.");
      return;
    }

    const doctorData = {
      _id: doctor?._id,
      image: doctor?.image?.url || "/images/doctor1.jpeg",
      name: doctor?.name,
      hospital: doctor?.hospital,
      specialists: doctor?.specialization,
      visitType: "hospital visit",
      availableDate: selectedDate,
      availableTimeSlot: selectedTimeSlot,
    };

    navigate("/appointment", {
      state: {
        doctor: doctorData,
      },
    });
  };

  if (loading) return <p className="text-center mt-10">Loading doctor info...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="container mx-auto my-10 px-4 sm:px-10 md:px-20 lg:px-40">
      {/* Top Section */}
      <div className="bg-white py-6 border-b border-gray-300 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="w-35 h-32 sm:w-45 sm:h-40 rounded-full overflow-hidden border-2 border-blue-400 shadow-md">
          <img
            src={doctor?.image?.url || "/images/doctor1.jpeg"}
            alt={doctor?.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-start w-full gap-10 items-center">
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">{doctor?.name}</h2>
            <p className="text-sm sm:text-base text-gray-600">{doctor?.hospital}</p>
            <p className="text-sm sm:text-base text-gray-800 font-medium">{doctor?.specialization}</p>
          </div>

          <div className="flex flex-row gap-1">
            <div className="text-md font-semibold bg-gray-100 text-gray-800 border border-gray-300 px-4 py-2 rounded-md text-start">
              <p>{doctor?.experience}</p>
              <span className="text-gray-500 block text-lg">Experience</span>
            </div>
            <div className="text-md font-semibold bg-gray-100 text-gray-800 border border-gray-300 px-4 py-2 rounded-md text-start">
              <p>${doctor?.fees}</p>
              <span className="text-gray-500 block text-lg">Fees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Details & Booking Section */}
      <div className="flex flex-col lg:flex-row mt-10 gap-6">
        {/* Doctor Details */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-700">
              <FaUserMd /> <h3 className="text-2xl font-semibold">About</h3>
            </div>
            <p className="text-gray-700 text-md">
              {showAbout ? doctor?.about : `${doctor?.about?.slice(0, 150)}...`}
            </p>
            <button
              className="text-blue-700 text-md mt-2 hover:underline"
              onClick={() => setShowAbout(!showAbout)}
            >
              {showAbout ? "Read Less" : "Read More"}
            </button>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-700">
              <FaGraduationCap />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-700 text-md">{doctor?.qualification}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-700">
              <FaAward /> <h3 className="text-2xl font-semibold">Awards</h3>
            </div>
            <p className="text-gray-700 text-md">
              {showAwards ? doctor?.awards : `${doctor?.awards?.slice(0, 100)}...`}
            </p>
            <button
              className="text-blue-700 text-sm mt-2 hover:underline"
              onClick={() => setShowAwards(!showAwards)}
            >
              {showAwards ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Schedule Appointment</h2>
          <div className="space-y-4">
            <div className="text-sm font-semibold text-gray-700">Select Date:</div>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />

            <div className="text-sm font-semibold text-gray-700 mt-4">Available Time Slots:</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {doctor?.slots?.map((time, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTimeSlot(time)}
                  className={`px-3 py-1 border ${
                    selectedTimeSlot === time
                      ? "bg-blue-700 text-white"
                      : "text-blue-700 hover:bg-blue-700 hover:text-white"
                  } border-blue-700 rounded-md text-sm transition`}
                >
                  {time}
                </button>
              ))}
            </div>

            <button
              onClick={handleBookNow}
              disabled={!selectedTimeSlot}
              className={`mt-4 w-full ${
                selectedTimeSlot ? "bg-blue-700 hover:bg-blue-800" : "bg-gray-400 cursor-not-allowed"
              } text-white py-2 rounded-md transition`}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

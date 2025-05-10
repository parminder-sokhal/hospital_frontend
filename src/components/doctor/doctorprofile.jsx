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
  const [visitType, setVisitType] = useState("hospital visit");

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
      image: { url: doctor?.image?.url }, // make sure this exists!
      name: doctor?.name,
      hospital: doctor?.hospital,
      specialists: doctor?.specialization,
      visitType, // <- dynamically selected
      availableDate: selectedDate,
      availableTimeSlot: selectedTimeSlot,
    };

    navigate("/appointment", {
      state: {
        doctor: doctorData,
      },
    });
  };

  if (loading)
    return <p className="text-center mt-10">Loading doctor info...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="container mt-34 mx-auto my-10 px-4 sm:px-10 md:px-20 lg:px-40">
      {/* Top Section */}
      <div className="bg-white py-8 px-4 sm:px-10 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-15">
          {/* Left - Doctor Image */}
          <div className="w-60  rounded-3xl overflow-hidden border-2 border-blue-500 shadow-md">
            <img
              src={doctor?.image?.url || "/images/doctor1.jpeg"}
              alt={doctor?.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right - Details */}
          <div className="flex flex-col w-full">
            {/* Name, Hospital, Specialization */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">
                {doctor?.name}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 font-semibold">
                {doctor?.specialization}
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                {doctor?.hospital}
              </p>
            </div>

            {/* Experience & Fees Badges */}
            <div className="flex gap-4 mt-4 flex-wrap">
              <div className="bg-blue-50 border border-blue-200 px-5 py-3 rounded-md shadow-sm flex flex-col items-center w-40 text-center">
                <span className="text-xl flex font-semibold text-blue-700">
                  {doctor?.experience}
                  <span className="text-md items-center justify-center flex text-blue-700 ml-1">
                    Years
                  </span>
                </span>
                <span className="text-sm text-gray-600">Experience</span>
              </div>
              <div className="bg-green-50 border border-green-200 px-5 py-3 rounded-md shadow-sm flex flex-col items-center w-40 text-center">
                <span className="text-xl font-semibold text-green-700">
                  ₹ {doctor?.fees}
                </span>
                <span className="text-sm text-gray-600">Consultation Fee</span>
              </div>
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
              <FaAward /> <h3 className="text-2xl font-semibold">Member Of</h3>
            </div>
            <p className="text-gray-700 text-md">
              {showAwards
                ? doctor?.awards
                : `${doctor?.awards?.slice(0, 100)}...`}
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
          <h2 className="text-xl font-bold text-blue-700 mb-4">
            Schedule Appointment
          </h2>
          <div className="space-y-4">
            <div className="text-sm font-semibold text-gray-700">
              Select Date:
            </div>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />

            <div className="text-sm font-semibold text-gray-700 mt-4">
              Available Time Slots:
            </div>

            {/* Slot Type Toggle Buttons */}
            <div className="flex mb-4 gap-2">
              <button
                onClick={() => {
                  setSelectedTimeSlot("");
                  setVisitType("hospital visit");
                }}
                className={`w-1/2 py-2 rounded-md border ${
                  visitType === "hospital visit"
                    ? "bg-blue-700 text-white"
                    : "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                }`}
              >
                Hospital Visit
              </button>
              <button
                onClick={() => {
                  setSelectedTimeSlot("");
                  setVisitType("video consultancy");
                }}
                className={`w-1/2 py-2 rounded-md border ${
                  visitType === "video consultancy"
                    ? "bg-blue-700 text-white"
                    : "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                }`}
              >
                Video Consultancy
              </button>
            </div>

            {/* Time Slots Based on Selected Type */}
            <div className="flex flex-wrap gap-2">
              {(visitType === "hospital visit"
                ? doctor?.hospitalSlots
                : doctor?.videoSlots
              )?.map((time, i) => (
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
                selectedTimeSlot
                  ? "bg-blue-700 hover:bg-blue-800"
                  : "bg-gray-400 cursor-not-allowed"
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

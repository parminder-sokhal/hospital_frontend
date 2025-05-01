import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors, createDoctor } from "../../../redux/actions/doctorAction";
import { FaPlusCircle } from "react-icons/fa";
import Select from "react-select";
import { FaUserMd } from "react-icons/fa";

const AddDoctor = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctor);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    hospital: "",
    about: "",
    qualification: "",
    awards: "",
    experience: "",
    fees: "",
    phone: "",
    email: "",
    hospitalSlots: [],
    videoSlots: [],
  });

  const timeSlotOptions = [
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "10:30 AM", label: "10:30 AM" },
    { value: "11:00 AM", label: "11:00 AM" },
    { value: "11:30 AM", label: "11:30 AM" },
    { value: "12:00 PM", label: "12:00 PM" },
  ];
  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("specialization", formData.specialization);
    data.append("hospital", formData.hospital);
    data.append("about", formData.about);
    data.append("qualification", formData.qualification);
    data.append("awards", formData.awards);
    data.append("experience", `${parseInt(formData.experience)} yrs`);
    data.append("fees", formData.fees);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("image", formData.image);
    formData.hospitalSlots.forEach((slot) =>
      data.append("hospitalSlots[]", slot)
    );
    formData.videoSlots.forEach((slot) => data.append("videoSlots[]", slot));

    dispatch(createDoctor(data));
    // clear/reset...
  };
  const [showAbout, setShowAbout] = useState(false);
  const [showAwards, setShowAwards] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  return (
    <div className="px-10 container mx-auto my-10 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Doctors List</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <FaPlusCircle />
          <span>Add Doctor</span>
        </button>
      </div>

      {doctors?.map((doctor) => {
        return (
          <div
            key={doctor._id}
            className="bg-white shadow-lg rounded-lg px-2 w-60 flex flex-col space-y-4"
          >
            <img
              src={doctor.image.url}
              alt={doctor.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="text-gray-500">{doctor.hospital}</p>
            <p className="text-gray-500">
              {doctor.experience} years experience
            </p>
            <p className="text-gray-500">₹{doctor.fees} consultation fee</p>
            <p className="text-gray-500">Availability: {doctor.availability}</p>
            <div className="flex flex-wrap gap-2">
              {(doctor.hospitalSlots || []).map((slot, idx) => (
                <span
                  key={`h${idx}`}
                  className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm"
                >
                  Hospital: {slot}
                </span>
              ))}
              {(doctor.videoSlots || []).map((slot, idx) => (
                <span
                  key={`v${idx}`}
                  className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm"
                >
                  Video: {slot}
                </span>
              ))}
            </div>

            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-blue-700">
                <FaUserMd /> <h3 className="text-xl font-semibold">About</h3>
              </div>
              <p className="text-gray-700 text-md">
                {showAbout
                  ? doctor?.about
                  : `${doctor?.about?.slice(0, 150)}...`}
              </p>
              {doctor.about?.length > 150 && (
                <button
                  className="text-blue-700 text-md mt-1 hover:underline"
                  onClick={() => setShowAbout(!showAbout)}
                >
                  {showAbout ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            {/* Experience */}
            <div>
              <p className="text-gray-500">
                {showExperience
                  ? doctor.experience
                  : `${doctor.experience?.slice(0, 15)}...`}
              </p>
              {doctor.experience?.length > 15 && (
                <button
                  className="text-blue-700 text-md mt-1 hover:underline"
                  onClick={() => setShowExperience(!showExperience)}
                >
                  {showExperience ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            {/* Awards */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-yellow-700 font-semibold">
                🏆 Awards
              </div>
              <p className="text-gray-700 text-md">
                {showAwards
                  ? doctor?.awards
                  : `${doctor?.awards?.slice(0, 100)}...`}
              </p>
              {doctor.awards?.length > 100 && (
                <button
                  className="text-blue-700 text-md mt-1 hover:underline"
                  onClick={() => setShowAwards(!showAwards)}
                >
                  {showAwards ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        );
      })}

      {/* Add Doctor Form */}
      {isFormVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold mb-4">Add New Doctor</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="specialization"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Specialization
                  </label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="hospital"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Hospital
                  </label>
                  <input
                    type="text"
                    id="hospital"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Experience (Years)
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fees"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Consultation Fees (₹)
                  </label>
                  <input
                    type="number"
                    id="fees"
                    name="fees"
                    value={formData.fees}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Hospital Slots
                  </label>
                  <Select
                    isMulti
                    name="hospitalSlots"
                    options={timeSlotOptions}
                    className="mt-1"
                    classNamePrefix="select"
                    value={timeSlotOptions.filter((slot) =>
                      formData.hospitalSlots.includes(slot.value)
                    )}
                    onChange={(selectedOptions) => {
                      const selectedValues = selectedOptions.map(
                        (opt) => opt.value
                      );
                      setFormData((prev) => ({
                        ...prev,
                        hospitalSlots: selectedValues,
                      }));
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Video Slots
                  </label>
                  <Select
                    isMulti
                    name="videoSlots"
                    options={timeSlotOptions}
                    className="mt-1"
                    classNamePrefix="select"
                    value={timeSlotOptions.filter((slot) =>
                      formData.videoSlots.includes(slot.value)
                    )}
                    onChange={(selectedOptions) => {
                      const selectedValues = selectedOptions.map(
                        (opt) => opt.value
                      );
                      setFormData((prev) => ({
                        ...prev,
                        videoSlots: selectedValues,
                      }));
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        image: e.target.files[0],
                      }))
                    }
                    className="mt-1 block w-full text-sm text-gray-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  About Doctor
                </label>
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                />
              </div>

              <div>
                <label
                  htmlFor="qualification"
                  className="block text-sm font-medium text-gray-700"
                >
                  Qualification
                </label>
                <textarea
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                />
              </div>

              <div>
                <label
                  htmlFor="awards"
                  className="block text-sm font-medium text-gray-700"
                >
                  Awards
                </label>
                <textarea
                  id="awards"
                  name="awards"
                  value={formData.awards}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDoctor;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors, createDoctor } from "../../../redux/actions/doctorAction";
import { FaPlusCircle } from "react-icons/fa";
import { LineClamp } from "react-line-clamp";
import Select from "react-select";

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
    slots: [],
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
  
    const formattedData = {
      ...formData,
      experience: `${parseInt(formData.experience)} yrs`, // force format like "20 yrs"
    };
  
    console.log("Submitting Doctor Data:", formattedData);
    dispatch(createDoctor(formattedData));
  
    setFormData({
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
      slots: [],
    });
  
    setIsFormVisible(false);
  };
  
  
  

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Doctors List</h2>
      </div>

      {/* Doctors List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors?.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white shadow-lg rounded-lg p-4 space-y-4"
          >
            <img
              src="/images/doctor1.jpeg"
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
            <div className="flex space-x-2">
              {doctor.slots.map((slot, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm"
                >
                  {slot}
                </span>
              ))}
            </div>

            {/* About, Qualification, Awards with Read More */}
            <div className="space-y-2">
              <p className="text-gray-500 line-clamp-3">{doctor.about}</p>
              <p className="text-gray-500 line-clamp-3">
                {doctor.qualification}
              </p>
              <p className="text-gray-500 line-clamp-3">{doctor.awards}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsFormVisible((prev) => !prev)}
        className="flex items-center space-x-2 text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
      >
        <FaPlusCircle />
        <span>{isFormVisible ? "Close Form" : "Add Doctor"}</span>
      </button>

      {/* Add Doctor Form */}
      {isFormVisible && (
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
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
                  Available Slots
                </label>
                <Select
                  isMulti
                  name="slots"
                  options={timeSlotOptions}
                  className="mt-1"
                  classNamePrefix="select"
                  value={timeSlotOptions.filter((slot) =>
                    formData.slots.includes(slot.value)
                  )}
                  onChange={(selectedOptions) => {
                    const selectedValues = selectedOptions.map(
                      (opt) => opt.value
                    );
                    setFormData({ ...formData, slots: selectedValues });
                  }}
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
      )}
    </div>
  );
};

export default AddDoctor;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaPhone, FaCalendarAlt, FaHospital } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createAppointment } from "../../redux/actions/appointmentActions";
import {
  createPaymentOrder,
  verifyPayment,
} from "../../redux/actions/paymentActions";

import Select from "react-select";

const DoctorAppointment = () => {
  const location = useLocation();
  const doctor = location.state?.doctor;
  

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [patient, setPatient] = useState(null);

  const [notification, setNotification] = useState({
    message: "",
    type: "", // "success" or "error"
  });

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
  });
  

  const resetForm = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      bloodGroup: "",
      symptoms: "",
    });
    setPatient(null);
    setErrors({});
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData((prev) => ({ ...prev, [name]: selectedOption.value }));
  };

  const handleAddPatient = () => {
    // Basic validation
    const validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.age || isNaN(formData.age) || formData.age <= 0)
      validationErrors.age = "Valid age is required";
    if (!formData.gender) validationErrors.gender = "Gender is required";
    if (!formData.phone || formData.phone.length !== 10)
      validationErrors.phone = "Phone number must be 10 digits";
    if (!formData.address) validationErrors.address = "Address is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setPatient(formData);
    setShowModal(false);
  };

  const handlePayNow = async () => {
    if (!patient) {
      setNotification({
        message: "Please add patient details.",
        type: "error",
      });
      return;
    }

    const normalizeVisitType = (type) => {
      if (!type) return "Hospital Visit";
      const formatted = type.trim().toLowerCase();
      return formatted.includes("video") ? "Video Call" : "Hospital Visit";
    };
    
    const appointmentData = {
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      phone: patient.phone,
      email: patient.email,
      address: patient.address,
      consultationMode: normalizeVisitType(doctor?.visitType),
      date: doctor?.availableDate,
      timeSlot: doctor?.availableTimeSlot,
    };
    try {
      // Step 1: Create Appointment
      const appointmentRes = await dispatch(
        createAppointment(doctor?._id, appointmentData)
      );
      const appointmentId = appointmentRes?.appointment?._id;

      if (!appointmentId) throw new Error("Appointment ID not returned");

      // Step 2: Create Razorpay Order via Redux
      const paymentRes = await dispatch(createPaymentOrder(appointmentId));
      if (!paymentRes?.order) {
        throw new Error("Payment order not created");
      }
      const { order, key_id } = paymentRes;

      // Step 3: Configure Razorpay
      const options = {
        key: key_id,
        amount: order.amount,
        currency: order.currency,
        name: "Hospital Appointment",
        description: "Appointment Fee",
        order_id: order.id,
        handler: async function (response) {
          try {
            // Step 4: Verify Payment via Redux
            const verifyData = await dispatch(
              verifyPayment({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              })
            );

            if (verifyData?.success) {
              setNotification({
                message: "Payment successful!",
                type: "success",
              });
              resetForm();
            } else {
              setNotification({
                message: "Payment verification failed!",
                type: "error",
              });
            }
          } catch (verifyError) {
            console.error("Verification error:", verifyError);
            setNotification({
              message: "Payment verification error",
              type: "error",
            });
          }
        },
        prefill: {
          name: patient.name,
          email: patient.email,
          contact: patient.phone,
        },
        theme: { color: "#2b6cb0" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      setNotification({
        message: "Something went wrong during payment.",
        type: "error",
      });
    }
  };

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const bloodGroupOptions = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
  ];

  useEffect(() => {
    if (notification.message) {
      const timeout = setTimeout(
        () => setNotification({ message: "", type: "" }),
        5000
      );
      return () => clearTimeout(timeout);
    }
  }, [notification]);

  return (
    <div className="container flex flex-col mt-34 lg:flex-row px-4 sm:px-10 mx-auto py-10  ">
      {/* Left Section - Doctor Details */}
      <div className="bg-white  rounded-lg p-6 w-full lg:w-1/2 space-y-4 h-1/2">
        <h2 className="text-2xl font-bold text-gray-800">
          Doctor Appointment Details
        </h2>
        <div className="flex gap-6 items-start">
          <img
            src={doctor?.image?.url || "/images/doctor1.jpeg"}
            alt="Doctor"
            className="w-28 h-auto max-h-32 rounded object-cover border"
          />
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-900">
              {doctor?.name}
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <FaHospital className="text-blue-600" />
              {doctor?.hospital}
            </p>
            <p className="text-sm text-purple-800 bg-purple-100 px-3 py-1 inline-block rounded">
              {doctor?.specialists}
            </p>
          </div>
        </div>

        <div className="border-t pt-4 mt-4 text-gray-700 space-y-2">
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-600" />
            <span>
              {doctor?.visitType}, {doctor?.availableDate},{" "}
              {doctor?.availableTimeSlot}
            </span>
          </p>
        </div>
      </div>

      {/* Right Section - Add Patient */}
      <div className="w-full lg:w-1/2 flex  flex-col gap-10 bg-white rounded-lg p-6 shadow-md">
        {/* Add Patient Button */}
        <div className="bg-white rounded-md ">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {patient ? "Edit Patient Details" : "Add New Patient"}{" "}
          </button>
        </div>
        {/* Notification Box */}
        {notification.message && (
          <div
            className={`mt-4 p-4 rounded text-sm font-medium ${
              notification.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {notification.message}
          </div>
        )}

        {/* Patient Info Display */}
        {patient && (
          <div className="bg-white rounded-md shadow-neutral-50">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Patient Info
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-base">
              {Object.entries(patient).map(([key, value]) => (
                <p key={key}>
                  <strong className="capitalize">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </strong>{" "}
                  {value}
                </p>
              ))}
            </div>
            <button
              onClick={handlePayNow}
              className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>

      {/* Modal for Patient Form */}
      {showModal && (
        <div className="fixed inset-0 flex items-center backdrop-blur-sm justify-center bg-blur bg-opacity-40 z-50 px-4">
          <div className="bg-white px-10 py-5 rounded-lg shadow-xl w-full max-w-2xl relative">
            <div className="flex justify-between items-start pb-4">
              <h3 className="text-xl flex font-semibold mb-4 text-blue-700">
                Add Patient Details
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-black   hover:text-red-500 text-4xl font-bold"
              >
                &times;
              </button>
            </div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium capitalize mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`border px-3 py-2 rounded outline-blue-300 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>

              {/* Age Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium capitalize mb-1">
                  Age:
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`border px-3 py-2 rounded outline-blue-300 ${
                    errors.age ? "border-red-500" : ""
                  }`}
                />
                {errors.age && (
                  <p className="text-red-500 text-xs">{errors.age}</p>
                )}
              </div>

              {/* Gender Field */}
              <div className="flex flex-col ">
                <label className="text-sm font-medium capitalize mb-1">
                  Gender:
                </label>
                <Select
                  options={genderOptions}
                  value={genderOptions.find(
                    (option) => option.value === formData.gender
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "gender")
                  }
                  className={`${errors.gender ? "border-red-500" : ""}`}
                />
                {errors.gender && (
                  <p className="text-red-500 text-xs">{errors.gender}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium capitalize mb-1">
                  Phone:
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  className={`border px-3 py-2 rounded outline-blue-300 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>
              {/* Email Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium capitalize mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded outline-blue-300"
                />
              </div>
              {/* Address Field */}
              <div className="flex flex-col col-span-full ">
                <label className="text-sm font-medium capitalize mb-1">
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`border px-3 py-2 rounded outline-blue-300 ${
                    errors.address ? "border-red-500" : ""
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs">{errors.address}</p>
                )}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleAddPatient}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Add Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointment;

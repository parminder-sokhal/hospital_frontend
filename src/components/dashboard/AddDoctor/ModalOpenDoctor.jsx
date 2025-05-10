import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import {
  createDoctor,
  updateDoctor,
} from "../../../redux/actions/doctorAction";
import { FaTimes } from "react-icons/fa";

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
];

function ModalOpenDoctor({ open, onClose, doctor, isEditing }) {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    hospital: "",
    about: "",
    qualification: "",
    awards: "",
    experience: "",
    availability: "available",
    fees: "",
    phone: "",
    email: "",
    hospitalSlots: [],
    videoSlots: [],
    file: null,
  });

  const [errors, setErrors] = useState({
    fees: "",
    phone: "",
    experience: "",
    email: "",
  });

  useEffect(() => {
    if (doctor && isEditing) {
      setFormData({
        name: doctor.name || "",
        specialization: doctor.specialization || "",
        hospital: doctor.hospital || "",
        about: doctor.about || "",
        qualification: doctor.qualification || "",
        awards: doctor.awards || "",
        experience: doctor.experience?.replace(/[^0-9]/g, "") || "",
        fees: doctor.fees || "",
        availability: doctor.isAvailable ? "available" : "unavailable",
        phone: doctor.contact?.phone || "",
        email: doctor.contact?.email || "",
        hospitalSlots: doctor.hospitalSlots || [],
        videoSlots: doctor.videoSlots || [],
        file: null,
      });
    }
  }, [doctor, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        setFormData({ ...formData, [name]: file });
        setPreviewImage(URL.createObjectURL(file)); // Set preview image
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (name, selectedOptions) => {
    setFormData({
      ...formData,
      [name]: selectedOptions.map((option) => option.value),
    });
  };

  const validateFields = () => {
    let newErrors = {};

    // Phone validation (10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    } else {
      newErrors.phone = "";
    }

    // Fees validation (numbers only)
    if (!/^\d+$/.test(formData.fees)) {
      newErrors.fees = "Fees must be a number.";
    } else {
      newErrors.fees = "";
    }

    // Experience validation (numbers only)
    if (!/^\d+$/.test(formData.experience)) {
      newErrors.experience = "Experience must be a number.";
    } else {
      newErrors.experience = "";
    }

    // Email validation (basic email format)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Email format is not correct (e.g., abc@gmail.com).";
    } else {
      newErrors.email = "";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    const data = new FormData();

    if (isEditing) {
      // Indexed array fields for PUT
      formData.hospitalSlots.forEach((slot, index) => {
        data.append(`hospitalSlots[${index}]`, slot);
      });
      formData.videoSlots.forEach((slot, index) => {
        data.append(`videoSlots[${index}]`, slot);
      });
    } else {
      // JSON stringified arrays for POST
      data.append("hospitalSlots", JSON.stringify(formData.hospitalSlots));
      data.append("videoSlots", JSON.stringify(formData.videoSlots));
    }

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && key !== "hospitalSlots" && key !== "videoSlots") {
        if (key === "file") {
          data.append(key, value);
        } else {
          data.append(key, String(value));
        }
      }
    });

    if (isEditing) {
      dispatch(updateDoctor(doctor._id, data)).then(onClose);
    } else {
      dispatch(createDoctor(data)).then(onClose);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-opacity-30 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative">
        <div className="sticky top-0 z-10 bg-white p-4 border-b">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
          >
            <FaTimes />
          </button>
          <h2 className="text-xl font-bold">
            {isEditing ? "Edit Doctor" : "Add Doctor"}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="hospital"
            placeholder="Hospital or 1st description"
            value={formData.hospital}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="experience"
            placeholder="Experience in Years (only Numbers)"
            value={formData.experience}
            onChange={handleChange}
            required
            pattern="\d+" // Only allow numbers
            className={`border p-2 rounded ${errors.experience ? "border-red-500" : ""}`}
          />
          {errors.experience && (
            <span className="text-red-500 text-sm">{errors.experience}</span>
          )}

          <input
            type="text"
            name="fees"
            placeholder="Fees ₹ (only numbers)"
            value={formData.fees}
            onChange={handleChange}
            required
            pattern="\d+" // Only allow numbers
            className={`border p-2 rounded ${errors.fees ? "border-red-500" : ""}`}
          />
          {errors.fees && (
            <span className="text-red-500 text-sm">{errors.fees}</span>
          )}

          <input
            type="text"
            name="phone"
            placeholder="Phone (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="\d{10}" // Only allow 10-digit phone numbers
            maxLength={10}
            className={`border p-2 rounded ${errors.phone ? "border-red-500" : ""}`}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}

          <input
            type="email"
            name="email"
            placeholder="YourEmail@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={`border p-2 rounded ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}

          <div className="md:col-span-1">
            <label className="block mb-1 font-medium">Upload Image</label>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-blue-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {previewImage && (
              <div className="relative mt-2 w-32 h-32">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreviewImage(null);
                    setFormData({ ...formData, file: null });
                  }}
                  className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 hover:bg-red-700"
                >
                  &times;
                </button>
              </div>
            )}
          </div>
          <div className="md:col-span-1">
            <label className="block mb-1 font-medium">Hospital Slots</label>
            <Select
              isMulti
              options={timeSlots.map((time) => ({ value: time, label: time }))}
              value={formData.hospitalSlots.map((s) => ({
                value: s,
                label: s,
              }))}
              onChange={(selected) =>
                handleSelectChange("hospitalSlots", selected)
              }
            />
          </div>

          <div className="md:col-span-1">
            <label className="block mb-1 font-medium">Video Slots</label>
            <Select
              isMulti
              options={timeSlots.map((time) => ({ value: time, label: time }))}
              value={formData.videoSlots.map((s) => ({ value: s, label: s }))}
              onChange={(selected) =>
                handleSelectChange("videoSlots", selected)
              }
            />
          </div>

          {/* Textareas at the bottom */}
          <div className="md:col-span-2">
            <textarea
              name="about"
              placeholder="About"
              value={formData.about}
              onChange={handleChange}
              rows="3"
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="md:col-span-2">
            <textarea
              name="qualification"
              placeholder="Qualification"
              value={formData.qualification}
              onChange={handleChange}
              rows="2"
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="md:col-span-2">
            <textarea
              name="awards"
              placeholder="Member of (Awards)"
              value={formData.awards}
              onChange={handleChange}
              rows="2"
              required
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              {isEditing ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalOpenDoctor;

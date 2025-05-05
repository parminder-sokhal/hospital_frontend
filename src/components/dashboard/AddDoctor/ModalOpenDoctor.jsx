import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createDoctor,
  updateDoctor,
} from "../../../redux/actions/doctorAction";
import { FaTimes } from "react-icons/fa";

function ModalOpenDoctor({ open, onClose, doctor, isEditing }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    hospital: "",
    about: "",
    qualification: "",
    awards: "",
    experience: "",
    fees: "",
    availability: "available",
    phone: "",
    email: "",
    hospitalSlots: "",
    videoSlots: "",
    file: null,
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
        experience: doctor.experience || "",
        fees: doctor.fees || "",
        availability: doctor.isAvailable ? "available" : "unavailable",
        phone: doctor.contact?.phone || "",
        email: doctor.contact?.email || "",
        hospitalSlots: doctor.hospitalSlots?.join(", ") || "",
        videoSlots: doctor.videoSlots?.join(", ") || "",
        file: null, // Don't pre-fill file
      });
    }
  }, [doctor, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        if (key === "hospitalSlots" || key === "videoSlots") {
          // Convert comma-separated string to JSON string array
          const arr = value.split(",").map((s) => s.trim());
          data.append(key, JSON.stringify(arr));
        } else {
          data.append(key, value);
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
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
        >
          <FaTimes />
        </button>

        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit Doctor" : "Add Doctor"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="hospital"
            placeholder="Hospital"
            value={formData.hospital}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="awards"
            placeholder="Awards"
            value={formData.awards}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="fees"
            placeholder="Fees"
            value={formData.fees}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="availability"
            placeholder="Availability"
            value={formData.availability}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="hospitalSlots"
            placeholder="Hospital Slots (comma separated)"
            value={formData.hospitalSlots}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="videoSlots"
            placeholder="Video Slots (comma separated)"
            value={formData.videoSlots}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <textarea
            name="about"
            placeholder="About"
            value={formData.about}
            onChange={handleChange}
            rows="3"
            className="border p-2 rounded col-span-1 md:col-span-2"
          />
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1">Upload Image</label>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-end">
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

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { createDoctor, updateDoctor } from "../../../redux/actions/doctorAction";
import { FaTimes } from "react-icons/fa";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  "06:00 PM", "06:30 PM"
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
    fees: "",
    availability: "available",
    phone: "",
    email: "",
    hospitalSlots: [],
    videoSlots: [],
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
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (name, selectedOptions) => {
    setFormData({
      ...formData,
      [name]: selectedOptions.map(option => option.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        if (key === "experience") {
          data.append(key, `${value} yrs`);
        } else if (key === "hospitalSlots" || key === "videoSlots") {
          data.append(key, JSON.stringify(value));
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
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-opacity-30 flex justify-center items-center p-4">
  <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative">
    <div className="sticky top-0 z-10 bg-white p-4 border-b">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
      >
        <FaTimes />
      </button>
      <h2 className="text-xl font-bold">{isEditing ? "Edit Doctor" : "Add Doctor"}</h2>
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
            placeholder="Hospital"
            value={formData.hospital}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="experience"
            placeholder="Experience (Years)"
            value={formData.experience}
            onChange={handleChange}
            required
            min={0}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="fees"
            placeholder="Fees"
            value={formData.fees}
            onChange={handleChange}
            required
            min={0}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="\d{10}"
            maxLength={10}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <div className="md:col-span-1">
            <label className="block mb-1 font-medium">Availability</label>
            <Select
              options={[
                { value: "available", label: "Available" },
                { value: "unavailable", label: "Unavailable" },
              ]}
              value={{ value: formData.availability, label: formData.availability }}
              onChange={(selected) =>
                setFormData({ ...formData, availability: selected.value })
              }
            />
          </div>

          <div className="md:col-span-1">
            <label className="block mb-1 font-medium">Hospital Slots</label>
            <Select
              isMulti
              options={timeSlots.map(time => ({ value: time, label: time }))}
              value={formData.hospitalSlots.map(s => ({ value: s, label: s }))}
              onChange={(selected) => handleSelectChange("hospitalSlots", selected)}
            />
          </div>

          <div className="md:col-span-1">
            <label className="block mb-1 font-medium">Video Slots</label>
            <Select
              isMulti
              options={timeSlots.map(time => ({ value: time, label: time }))}
              value={formData.videoSlots.map(s => ({ value: s, label: s }))}
              onChange={(selected) => handleSelectChange("videoSlots", selected)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Upload Image</label>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-blue-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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
              placeholder="Awards"
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

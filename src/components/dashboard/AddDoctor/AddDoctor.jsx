// src/pages/doctor/AddDoctor.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDoctors,
  changeDoctorAvailability,
  deleteDoctor,
} from "../../../redux/actions/doctorAction.js";
import { FaEdit } from "react-icons/fa";
import ModalOpenDoctor from "./ModalOpenDoctor.jsx";

import {
  FaSearch,
  FaUserPlus,
  FaTrash,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function AddDoctor() {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctor);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);

  const [search, setSearch] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [expandedDoctorId, setExpandedDoctorId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  useEffect(() => {
    if (doctors) {
      setFilteredDoctors(
        doctors.filter((doc) =>
          doc.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, doctors]);

  const handleToggleAvailability = (doctor) => {
    const current = doctor.availability?.toLowerCase(); // ensure it's lowercase
    const newAvailability =
      current === "available" ? "unavailable" : "available";

    dispatch(
      changeDoctorAvailability(doctor._id, { availability: newAvailability })
    );
  };

  const handleDelete = (id) => {
    dispatch(deleteDoctor(id)).then(() => {
      dispatch(getDoctors());
      setConfirmDeleteId(null);
    });
  };

  const toggleExpand = (id) => {
    setExpandedDoctorId(expandedDoctorId === id ? null : id);
  };
  const openAddDoctorModal = () => {
    setEditingDoctor(null); // new doctor
    setIsModalOpen(true);
  };

  const openEditDoctorModal = (doctor) => {
    setEditingDoctor(doctor); // editing doctor
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingDoctor(null);
    dispatch(getDoctors()); // refresh after save
  };

  return (
    <div className="p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Doctor List</h1>
          <p className="text-gray-500 text-sm">Manage hospital doctors</p>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
          onClick={openAddDoctorModal}
        >
          <FaUserPlus /> Add Doctor
        </button>
      </div>

      <div className="mb-4 w-full md:w-1/3 relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name"
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Specialization</th>
              <th className="p-2">Hospital</th>
              <th className="p-2">Experience</th>
              <th className="p-2">Fees</th>
              <th className="p-2">Availability</th>
              <th className="p-2">Details</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <React.Fragment key={doctor._id}>
                  <tr className="border-t border-gray-300">
                    <td className="p-2">
                      <img
                        src={doctor.image?.url || "/default.jpg"}
                        alt={doctor.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="p-2">{doctor.name}</td>
                    <td className="p-2">
                      <p>{doctor.contact?.email}</p>
                      <p>{doctor.contact?.phone}</p>
                    </td>
                    <td className="p-2">{doctor.specialization}</td>
                    <td className="p-2">{doctor.hospital}</td>
                    <td className="p-2">{doctor.experience}</td>
                    <td className="p-2">₹{doctor.fees}</td>
                    <td className="p-2">
                      <span
                        onClick={() => handleToggleAvailability(doctor)}
                        className={`cursor-pointer inline-block px-3 py-1 text-xs font-semibold rounded-full border transition duration-300 ${
                          doctor.availability === "available"
                            ? "bg-green-800 text-white border-green-700 hover:bg-green-700"
                            : "bg-red-600 text-white border-red-500 hover:bg-red-500"
                        }`}
                      >
                        {doctor.availability === "available"
                          ? "Available"
                          : "Unavailable"}
                      </span>
                    </td>

                    <td className="p-2">
                      <button
                        onClick={() => toggleExpand(doctor._id)}
                        className="text-blue-500 "
                      >
                        {expandedDoctorId === doctor._id ? "Hide" : "View"}
                      </button>
                    </td>
                    <td className="p-2 flex gap-2 items-center">
                      <button
                        onClick={() => openEditDoctorModal(doctor)}
                        className="text-blue-600 hover:text-blue-800 transition"
                        title="Edit"
                      >
                        <MdEdit size={20} />
                      </button>
                      <button
                        onClick={() => setConfirmDeleteId(doctor._id)}
                        className="text-red-600 hover:text-red-800 transition"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>

                  {expandedDoctorId === doctor._id && (
                    <tr>
                      <td
                        colSpan="10"
                        className="p-4 bg-gray-100 text-sm leading-relaxed space-y-1"
                      >
                        <p>
                          <strong>About:</strong> {doctor.about}
                        </p>
                        <p>
                          <strong>Qualification:</strong> {doctor.qualification}
                        </p>
                        <p>
                          <strong>Member of:</strong> {doctor.awards}
                        </p>
                        <p>
                          <strong>Hospital Slots:</strong>{" "}
                          {doctor.hospitalSlots?.join(", ")}
                        </p>
                        <p>
                          <strong>Video Slots:</strong>{" "}
                          {doctor.videoSlots?.join(", ")}
                        </p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="p-4 text-center text-gray-500">
                  No doctors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <ModalOpenDoctor
          open={isModalOpen}
          onClose={handleCloseModal}
          doctor={editingDoctor}
          isEditing={!!editingDoctor}
        />
      )}

      {confirmDeleteId && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="font-bold text-lg mb-2">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this doctor?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleDelete(confirmDeleteId)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddDoctor;

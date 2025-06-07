import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHospitalVisitAppointments } from "../../../redux/actions/appointmentActions";
import moment from "moment";

function GetAllOfflinePayments() {
  const dispatch = useDispatch();
  const { hospitalVisitAppointments, loading } = useSelector(
    (state) => state.appointment
  );

  // Add filters state like the payments component
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    doctor: "",
    consultationMode: "",
    gender: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [expandedPatientId, setExpandedPatientId] = useState(null);
  // const [expandedDoctorId, setExpandedDoctorId] = useState(null);

  useEffect(() => {
    dispatch(getHospitalVisitAppointments());
  }, [dispatch]);

  const togglePatientDetails = (id) => {
    setExpandedPatientId((prevId) => (prevId === id ? null : id));
  };

  // const toggleDoctorDetails = (id) => {
  //   setExpandedDoctorId((prevId) => (prevId === id ? null : id));
  // };

  // Filtering logic including search and filters
  const filteredAppointments = hospitalVisitAppointments.filter((a) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      a._id.toLowerCase().includes(search) ||
      a.patient?.name?.toLowerCase().includes(search) ||
      a.patient?.contact?.phone?.includes(search) ||
      a.patient?.contact?.email?.toLowerCase().includes(search) ||
      a.doctor?.name?.toLowerCase().includes(search) ||
      a.status?.toLowerCase().includes(search) ||
      a.consultationMode?.toLowerCase().includes(search);

    const matchesStatus = !filters.status || a.status === filters.status;
    const matchesDoctor = !filters.doctor || a.doctor?.name === filters.doctor;
    const matchesMode =
      !filters.consultationMode ||
      a.consultationMode === filters.consultationMode;
    const matchesGender =
      !filters.gender || a.patient?.gender === filters.gender;
    const matchesDate =
      !selectedDate || moment(a.date).isSame(selectedDate, "day");
    return (
      matchesSearch &&
      matchesStatus &&
      matchesDoctor &&
      matchesMode &&
      matchesGender &&
      matchesDate
    );
  });

  // Get unique values for filter dropdowns dynamically from the data
  const uniqueDoctors = [
    ...new Set(
      hospitalVisitAppointments.map((a) => a.doctor?.name).filter(Boolean)
    ),
  ];
  const uniqueStatuses = [
    ...new Set(hospitalVisitAppointments.map((a) => a.status).filter(Boolean)),
  ];
  // const uniqueConsultationModes = [
  //   ...new Set(
  //     hospitalVisitAppointments.map((a) => a.consultationMode).filter(Boolean)
  //   ),
  // ];

  return (
    <div className="p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">
        Offline Hospital Visit Appointments
      </h1>

      {/* Search and Filters */}
      <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
        {/* Left side - search and other filters */}
        <div className="flex flex-wrap gap-2 flex-grow max-w-full sm:max-w-[80%]">
          <input
            type="text"
            placeholder="Search by patient, doctor, status..."
            className="border px-3 py-2 rounded-md shadow-sm w-full sm:w-72"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Status filter */}
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="border rounded-md px-2 py-2 text-sm"
          >
            <option value="">All Statuses</option>
            {uniqueStatuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>

          {/* Doctor filter */}
          <select
            value={filters.doctor}
            onChange={(e) => setFilters({ ...filters, doctor: e.target.value })}
            className="border rounded-md px-2 py-2 text-sm"
          >
            <option value="">All Doctors</option>
            {uniqueDoctors.map((doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            ))}
          </select>

          {/* Gender filter */}
          <select
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
            className="border rounded-md px-2 py-2 text-sm"
          >
            <option value="">All Genders</option>
            {[
              ...new Set(
                hospitalVisitAppointments
                  .map((a) => a.patient?.gender)
                  .filter(Boolean)
              ),
            ].map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-shrink-0">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-md px-2 py-3 text-sm"
          />
        </div>
      </div>
      {/* Table */}
      {loading ? (
        <p>Loading appointments...</p>
      ) : filteredAppointments.length === 0 ? (
        <p>No offline appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Reference Number</th>
                <th className="p-2">Date</th>
                <th className="p-2">Patient</th>
                <th className="p-2">Doctor</th>
                <th className="p-2">Time</th>
                <th className="p-2">Fees</th>
                <th className="p-2">Mode</th>
                <th className="p-2">Status</th>
                <th className="p-2">Created At</th>
                <th className="p-2">Patient</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((item) => (
                <React.Fragment key={item._id}>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="p-2">{item._id}</td>
                    <td className="p-2">
                      {moment(item.date).format("DD-MM-YYYY")}
                    </td>
                    <td className="p-2">
                      <div className="flex flex-col">
                        <span>
                          <strong>{item.patient?.name}</strong>
                        </span>
                        <span>{item.patient.contact?.phone}</span>
                        <span>{item.patient.contact?.email}</span>
                      </div>
                    </td>
                    <td className="p-2">{item.doctor?.name}</td>
                    <td className="p-2">{item.timeSlot}</td>
                    <td className="p-2">₹{item.doctor.fees}</td>
                    <td className="p-2">{item.consultationMode}</td>
                    <td className="p-2">
                      <span
                        className={`inline-block px-2 py-1 rounded ${
                          item.status === "Scheduled"
                            ? "bg-green-500 text-white"
                            : "bg-gray-300 text-black"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-2">
                      {moment(item.createdAt).format("DD-MM-YYYY")}
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => togglePatientDetails(item.patient._id)}
                        className="text-blue-600 hover:underline"
                      >
                        {expandedPatientId === item.patient._id
                          ? "Hide"
                          : "View"}
                      </button>
                    </td>
                  </tr>

                  {/* Patient Details */}
                  {expandedPatientId === item.patient._id && (
                    <tr className="bg-gray-50">
                      <td colSpan="9" className="p-4 text-sm space-y-1">
                        <p>
                          <strong>Name:</strong> {item.patient.name}
                        </p>
                        <p>
                          <strong>Age:</strong> {item.patient.age}
                        </p>
                        <p>
                          <strong>Gender:</strong> {item.patient.gender}
                        </p>
                        <p>
                          <strong>Phone:</strong> {item.patient.contact?.phone}
                        </p>
                        <p>
                          <strong>Email:</strong> {item.patient.contact?.email}
                        </p>
                        <p>
                          <strong>Address:</strong>{" "}
                          {item.patient.contact?.address}
                        </p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default GetAllOfflinePayments;

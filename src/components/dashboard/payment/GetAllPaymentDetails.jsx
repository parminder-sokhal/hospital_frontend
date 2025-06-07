import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPaymentDetails } from "../../../redux/actions/paymentActions";
import moment from "moment";

function GetAllPaymentDetails() {
  const dispatch = useDispatch();
  const { payments, loading } = useSelector((state) => state.payment);

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
    dispatch(getAllPaymentDetails());
  }, [dispatch]);

  const togglePatientDetails = (id) => {
    setExpandedPatientId((prevId) => (prevId === id ? null : id));
  };

  // const toggleDoctorDetails = (id) => {
  //   setExpandedDoctorId((prevId) => (prevId === id ? null : id));
  // };

  // Sort payments by createdAt descending
  const sortedPayments = [...payments].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const filteredPayments = sortedPayments.filter((p) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch = Object.values(p)
      .concat(Object.values(p.doctor || {}))
      .concat(Object.values(p.patient || {}))
      .concat(Object.values(p.appointment || {}))
      .some((val) => String(val).toLowerCase().includes(search));

    const matchesStatus = !filters.status || p.status === filters.status;
    const matchesDoctor = !filters.doctor || p.doctor?.name === filters.doctor;
    const matchesMode =
      !filters.consultationMode ||
      p.appointment?.consultationMode === filters.consultationMode;
    const matchesGender =
      !filters.gender || p.patient?.gender === filters.gender;

    // Date filter: if selectedDate is empty, pass all, else compare appointment date
    const matchesDate =
      !selectedDate || moment(p.appointment?.date).isSame(selectedDate, "day");

    return (
      matchesSearch &&
      matchesStatus &&
      matchesDoctor &&
      matchesMode &&
      matchesGender &&
      matchesDate
    );
  });

  return (
    <div className="p-4 mt-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">All Payments</h1>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
        {/* Left side - search and other filters */}
        <div className="flex flex-wrap gap-2 flex-grow max-w-full sm:max-w-[80%]">
          <input
            type="text"
            placeholder="Search payments..."
            className="border px-3 py-2 rounded-md shadow-sm w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Status Filter */}
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="">All Statuses</option>
            {[...new Set(payments.map((p) => p.status).filter(Boolean))].map(
              (status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              )
            )}
          </select>

          {/* Doctor Filter */}
          <select
            value={filters.doctor}
            onChange={(e) => setFilters({ ...filters, doctor: e.target.value })}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="">All Doctors</option>
            {[
              ...new Set(payments.map((p) => p.doctor?.name).filter(Boolean)),
            ].map((doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            ))}
          </select>

          {/* Consultation Mode Filter */}
          <select
            value={filters.consultationMode}
            onChange={(e) =>
              setFilters({ ...filters, consultationMode: e.target.value })
            }
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="">All Modes</option>
            {[
              ...new Set(
                payments
                  .map((p) => p.appointment?.consultationMode)
                  .filter(Boolean)
              ),
            ].map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>

          {/* Gender Filter */}
          <select
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="">All Genders</option>
            {[
              ...new Set(
                payments.map((p) => p.patient?.gender).filter(Boolean)
              ),
            ].map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>

        {/* Right side - date picker */}
        <div className="flex-shrink-0">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <p>Loading payments...</p>
      ) : filteredPayments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Date</th>
                <th className="p-2">Payment ID</th>
                <th className="p-2">Patient Details</th>
                <th className="p-2">Doctor</th>
                <th className="p-2">Time</th>
                <th className="p-2">Mode</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
                <th className="p-2">Created At</th>
                <th className="p-2">Patient</th>
              </tr>
            </thead>

            <tbody>
              {filteredPayments.map((payment) => (
                <React.Fragment key={payment._id}>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="p-2">
                      {moment(payment.appointment?.date).format("DD-MM-YYYY")}
                    </td>
                    <td className="p-3">
                      <div className="flex flex-col">
                        <span>
                          <strong>payment id-</strong>
                          <br />
                          {payment._id}
                        </span>
                        <span>
                          <strong>razorpay order id-</strong>
                          <br />
                          {payment.razorpay_order_id}
                        </span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-col">
                        <span>
                          <strong>{payment.patient.name}</strong>
                        </span>
                        <span>{payment.patient.phone}</span>
                        <span>{payment.patient.email}</span>
                      </div>
                    </td>
                    <td className="p-2">{payment.doctor?.name}</td>
                    <td className="p-2">{payment.appointment?.timeSlot}</td>
                    <td className="p-2">
                      {payment.appointment?.consultationMode || "N/A"}
                    </td>
                    <td className="p-2">₹{payment.amount}</td>
                    <td className="p-2 capitalize">
                      <span
                        className={`inline-block px-2 py-1 rounded 
              ${
                payment.status === "completed"
                  ? "bg-green-500 text-white"
                  : payment.status === "created"
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-black"
              }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="p-2">
                      {moment(payment.createdAt).format("YYYY-MM-DD HH:mm")}
                    </td>

                    <td className="p-2">
                      {payment.patient ? (
                        <button
                          onClick={() =>
                            togglePatientDetails(payment.patient._id)
                          }
                          className="text-blue-600 hover:underline"
                        >
                          {expandedPatientId === payment.patient._id
                            ? "Hide"
                            : "View"}
                        </button>
                      ) : (
                        "N/A"
                      )}
                    </td>

                    
                  </tr>

                  {/* Patient Details Row */}
                  {payment.patient &&
                    expandedPatientId === payment.patient._id && (
                      <tr className="bg-gray-50">
                        <td colSpan="11" className="p-4 space-y-1 text-sm">
                          <p>
                            <strong>Name:</strong> {payment.patient.name}
                          </p>
                          <p>
                            <strong>Age:</strong> {payment.patient.age}
                          </p>
                          <p>
                            <strong>Gender:</strong> {payment.patient.gender}
                          </p>
                          <p>
                            <strong>Phone:</strong> {payment.patient.phone}
                          </p>
                          <p>
                            <strong>Email:</strong> {payment.patient.email}
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

export default GetAllPaymentDetails;

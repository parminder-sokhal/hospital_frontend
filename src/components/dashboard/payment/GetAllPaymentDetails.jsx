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
  const [expandedPatientId, setExpandedPatientId] = useState(null);
  const [expandedDoctorId, setExpandedDoctorId] = useState(null);

  useEffect(() => {
    dispatch(getAllPaymentDetails());
  }, [dispatch]);

  const togglePatientDetails = (id) => {
    setExpandedPatientId((prevId) => (prevId === id ? null : id));
  };

  const toggleDoctorDetails = (id) => {
    setExpandedDoctorId((prevId) => (prevId === id ? null : id));
  };

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

    return (
      matchesSearch &&
      matchesStatus &&
      matchesDoctor &&
      matchesMode &&
      matchesGender
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Payments</h1>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          placeholder="Search payments..."
          className="border px-3 py-2 rounded-md shadow-sm w-full sm:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="">All Statuses</option>
          <option value="created">Created</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={filters.doctor}
          onChange={(e) => setFilters({ ...filters, doctor: e.target.value })}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="">All Doctors</option>
          {[...new Set(payments.map((p) => p.doctor?.name).filter(Boolean))].map(
            (doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            )
          )}
        </select>

        <select
          value={filters.consultationMode}
          onChange={(e) =>
            setFilters({ ...filters, consultationMode: e.target.value })
          }
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="">All Modes</option>
          {[...new Set(
            payments
              .map((p) => p.appointment?.consultationMode)
              .filter(Boolean)
          )].map((mode) => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>

        <select
          value={filters.gender}
          onChange={(e) =>
            setFilters({ ...filters, gender: e.target.value })
          }
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
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
                <th className="p-2">Doctor</th>
              </tr>
            </thead>

            <tbody>
              {filteredPayments.map((payment) => (
                <React.Fragment key={payment._id}>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="p-2">
                      {moment(payment.appointment?.date).format("YYYY-MM-DD")}
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

                    <td className="p-2">
                      {payment.doctor ? (
                        <button
                          onClick={() =>
                            toggleDoctorDetails(payment.doctor._id)
                          }
                          className="text-blue-600 hover:underline"
                        >
                          {expandedDoctorId === payment.doctor._id
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

                  {/* Doctor Details Row */}
                  {payment.doctor &&
                    expandedDoctorId === payment.doctor._id && (
                      <tr className="bg-gray-100">
                        <td colSpan="11" className="p-4 space-y-1 text-sm">
                          <p>
                            <strong>Name:</strong> {payment.doctor.name}
                          </p>
                          <p>
                            <strong>Specialization:</strong>{" "}
                            {payment.doctor.specialization}
                          </p>
                          <p>
                            <strong>Hospital:</strong> {payment.doctor.hospital}
                          </p>
                          <p>
                            <strong>Availability:</strong>{" "}
                            {payment.doctor.availability}
                          </p>
                          <p>
                            <strong>Fees:</strong> ₹{payment.doctor.fees}
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

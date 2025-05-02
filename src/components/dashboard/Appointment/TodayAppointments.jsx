import React, { useState, useEffect } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiChevronUpDown } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentByDate } from "../../../redux/actions/appointmentActions";

// Define table headers and mapping keys
const TABLE_HEAD = [
  "Patient Info",
  "Address",
  "Age",
  "Gender",
  "Doctor",
  "Appointment On",
  "Time Slot",
  "Mode",
  "CreatedAt",
];

const sortKeyMap = {
  "Patient Info": "name",
  Address: "address",
  Age: "age",
  Gender: "gender",
  Doctor: "doctor",
  "Appointment On": "date",
  "Time Slot": "timeSlot",
  Mode: "mode",
  CreatedAt: "createdAt",
};

const TodayAppointments = () => {
  const [tableRows, setTableRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ gender: "", doctor: "", mode: "" });
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  const dispatch = useDispatch();
  const { appointmentsByDate } = useSelector((state) => state.appointment);

  // Format today's date as YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    dispatch(getAppointmentByDate(today));
  }, [dispatch, today]);

  useEffect(() => {
    if (appointmentsByDate?.length > 0) {
      const mapped = appointmentsByDate.map((apt) => ({
        id: apt._id,
        name: apt.patient?.name || "N/A",
        email: apt.patient?.contact?.email || "N/A",
        phone: apt.patient?.contact?.phone || "N/A",
        address: apt.patient?.contact?.address || "N/A",
        age: apt.patient?.age || "N/A",
        gender: apt.patient?.gender || "N/A",
        doctor: apt.doctor?.name || "N/A",
        date: apt.date ? new Date(apt.date).toLocaleDateString() : "N/A",
        createdAt: apt.createdAt ? new Date(apt.createdAt).toLocaleString() : "N/A",
        timeSlot: apt.timeSlot || "N/A",
        mode: apt.consultationMode || "N/A",
      }));
      setTableRows(mapped);
    }
  }, [appointmentsByDate]);

  const filteredRows = tableRows.filter((row) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = Object.values(row).some((value) =>
      String(value).toLowerCase().includes(term)
    );

    const matchesFilters =
      (filters.gender ? row.gender === filters.gender : true) &&
      (filters.doctor ? row.doctor === filters.doctor : true) &&
      (filters.mode ? row.mode === filters.mode : true);

    return matchesSearch && matchesFilters;
  });

  const sortedRows = [...filteredRows].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (sortConfig.key === "date" || sortConfig.key === "createdAt") {
      return sortConfig.direction === "asc"
        ? new Date(aValue) - new Date(bValue)
        : new Date(bValue) - new Date(aValue);
    }

    return sortConfig.direction === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const currentRows = sortedRows.slice(indexOfLastRow - rowsPerPage, indexOfLastRow);
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  const handleSort = (column) => {
    const key = sortKeyMap[column];
    const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full p-4 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Today's Appointments ({today})</h2>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search appointments"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <RxMagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            value={filters.doctor}
            onChange={(e) => setFilters({ ...filters, doctor: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">All Doctors</option>
            {[...new Set(tableRows.map((row) => row.doctor))].map((doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            ))}
          </select>

          <select
            value={filters.mode}
            onChange={(e) => setFilters({ ...filters, mode: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">All Modes</option>
            {[...new Set(tableRows.map((row) => row.mode))].map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        {tableRows.length === 0 ? (
          <div className="text-center p-4">No Appointments Found</div>
        ) : (
          <table className="min-w-[900px] table-auto">
            <thead>
              <tr className="bg-gray-100 text-sm">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="p-2 text-left font-medium cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSort(head)}
                  >
                    <div className="flex items-center gap-1">
                      {head}
                      <HiChevronUpDown className="h-4 w-4" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {currentRows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="p-2 w-52 whitespace-nowrap">
                    <strong>{row.name}</strong>
                    <br />
                    <span className="text-xs text-gray-500">{row.email}</span>
                    <br />
                    <span className="text-xs text-gray-400">{row.phone}</span>
                  </td>
                  <td className="p-2 w-60">{row.address}</td>
                  <td className="p-2 w-20">{row.age}</td>
                  <td className="p-2 w-24">{row.gender}</td>
                  <td className="p-2 w-48">{row.doctor}</td>
                  <td className="p-2 w-28">{row.date}</td>
                  <td className="p-2 w-28">{row.timeSlot}</td>
                  <td className="p-2 w-32">{row.mode}</td>
                  <td className="p-2 w-32">{row.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-2">
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 border rounded-md hover:bg-gray-200 text-sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 border rounded-md hover:bg-gray-200 text-sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodayAppointments;

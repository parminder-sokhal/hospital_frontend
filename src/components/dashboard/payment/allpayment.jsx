import React, { useState, useEffect } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { HiChevronUpDown } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAllPayments } from "../../../redux/actions/paymentActions";

const TABLE_HEAD = [
  "Payment ID",
  "Amount",
  "Patient Info",
  "Phone",
  "Email",
  "Doctor",
  "Date",
  "Time Slot",
  "Status",
];

const sortKeyMap = {
  "Payment ID": "paymentId",
  Amount: "amount",
  "Patient Info": "patient.name",
  Phone: "patient.phone",
  Email: "patient.email",
  Doctor: "appointment.doctor.name",
  Date: "appointment.date",
  "Time Slot": "appointment.timeSlot",
  Status: "status",
};

function AllPayments() {
  const [tableRows, setTableRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [doctorFilter, setDoctorFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: "paymentId", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const dispatch = useDispatch();
  const { payments } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getAllPayments());
  }, [dispatch]);

  useEffect(() => {
    if (payments?.length > 0) {
      setTableRows(
        payments.map((payment) => ({
          id: payment.paymentId,
          paymentId: payment.paymentId,
          amount: payment.amount,
          patientName: payment.patient?.name || "N/A",
          phone: payment.patient?.phone || "N/A",
          email: payment.patient?.email || "N/A",
          doctor: payment.appointment?.doctor?.name || "N/A",
          date: payment.appointment?.date ? new Date(payment.appointment?.date).toLocaleDateString() : "N/A",
          timeSlot: payment.appointment?.timeSlot || "N/A",
          status: payment.status || "N/A",
        }))
      );
    }
  }, [payments]);

  // Filter rows based on search, status, and doctor filter
  const filteredRows = tableRows.filter((row) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = Object.values(row).some((value) =>
      String(value).toLowerCase().includes(term)
    );
    const matchesStatus = statusFilter === "all" || row.status.toLowerCase() === statusFilter;
    const matchesDoctor = doctorFilter === "all" || row.doctor.toLowerCase().includes(doctorFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesDoctor;
  });

  // Sort the filtered rows
  const sortedRows = [...filteredRows].sort((a, b) => {
    const getNestedValue = (obj, key) =>
      key.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);

    const aValue = getNestedValue(a, sortConfig.key);
    const bValue = getNestedValue(b, sortConfig.key);

    if (sortConfig.key === "date") {
      return sortConfig.direction === "asc"
        ? new Date(aValue) - new Date(bValue)
        : new Date(bValue) - new Date(aValue);
    }

    return sortConfig.direction === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  // Paginate the sorted rows
  const indexOfLastRow = currentPage * rowsPerPage;
  const currentRows = sortedRows.slice(indexOfLastRow - rowsPerPage, indexOfLastRow);
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  const handleSort = (column) => {
    const key = sortKeyMap[column];
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full p-4 border border-gray-200">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-4">All Payments</h2>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 mb-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search payments"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <RxMagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 border hover:bg-gray-100 border-gray-400 rounded-md px-4 py-2 cursor-pointer">
          <p className="text-gray-500 text-sm">Status</p>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-gray-500 text-sm border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="created">Created</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Doctor Filter */}
        <div className="flex items-center gap-2 border hover:bg-gray-100 border-gray-400 rounded-md px-4 py-2 cursor-pointer">
          <p className="text-gray-500 text-sm">Doctor</p>
          <input
            type="text"
            placeholder="Filter by doctor"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={doctorFilter}
            onChange={(e) => setDoctorFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        {tableRows.length === 0 ? (
          <div className="text-center p-4">No Payments Found</div>
        ) : (
          <table className="min-w-[900px] table-auto">
            <thead>
              <tr className="bg-gray-100 text-sm">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="p-2 text-left font-medium whitespace-nowrap cursor-pointer hover:bg-gray-200"
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
                  <td className="p-2 w-28 whitespace-nowrap">{row.paymentId}</td>
                  <td className="p-2 w-28">{row.amount}</td>
                  <td className="p-2 w-52">{row.patientName}</td>
                  <td className="p-2 w-32">{row.phone}</td>
                  <td className="p-2 w-52">{row.email}</td>
                  <td className="p-2 w-48">{row.doctor}</td>
                  <td className="p-2 w-28">{row.date}</td>
                  <td className="p-2 w-32">{row.timeSlot}</td>
                  <td className="p-2 w-32">{row.status}</td>
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
}

export default AllPayments;

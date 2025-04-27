import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaBars,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaWpforms,
  FaMapMarkedAlt,
  FaBook,
  FaQuestionCircle,
  FaComments,
  FaUserFriends,
  FaTimes,
} from "react-icons/fa";

export default function Dashboard() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar - Desktop and Mobile */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-white border-r border-gray-300 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 w-64`}
      >
        <nav className="h-full flex flex-col">
          {/* Logo and Close Icon */}
          <div className="p-4 flex items-center justify-between border-b">
            <img className="w-32" src="/logo/loonalogo.png" alt="logo" />
            <button className="sm:hidden text-xl" onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
          <ul className="flex-1 px-2 overflow-y-auto">
            <SidebarItem icon={<FaUserGraduate />} text="AddDoctor" to="/dashboard/AddDoctor" active={location.pathname === "/dashboard/AddDoctor"} />
            <SidebarItem icon={<FaChalkboardTeacher />} text="logout" to="/" active={location.pathname === "/"} />
           
          </ul>
        </nav>
      </aside>

      {/* Hamburger Button */}
      <button
        className="sm:hidden fixed top-4 left-4  text-2xl bg-white p-2 rounded-md shadow-md"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Main Content */}
      <main className="flex-1 sm:ml-64 p-4 overflow-y-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}

function SidebarItem({ icon, text, to, active }) {
  return (
    <li className="my-1">
      <Link
        to={to}
        className={`flex items-center p-2 rounded-md text-sm font-medium transition-colors ${
          active ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
        }`}
      >
        {icon}
        <span className="ml-3">{text}</span>
      </Link>
    </li>
  );
}

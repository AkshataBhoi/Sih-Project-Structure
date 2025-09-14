import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaEye,
  FaEdit,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { address } from "framer-motion/client";

const issuesData = [
  {
    id: 1,
    name: "Water Leakage in Main Road",
    dept: "Water Supply",
    date: "2025-09-05",
    detail: "Severe water leakage causing road damage near Station Road.",
    status: "In Progress",
    location: {
      address: "Station Road, Sector 5",
      city: "Pune",
      lat: 18.5204,
      lng: 73.8567,
    },
    photo: "https://source.unsplash.com/600x400/?water,leakage,road",
  },
  {
    id: 2,
    name: "Streetlight Not Working",
    dept: "Electrical",
    date: "2025-09-07",
    detail: "Several streetlights not working in Sector 8.",
    status: "Pending",
    location: {
      address: "Sector 8, Near Community Hall",
      city: "Delhi",
      lat: 28.7041,
      lng: 77.1025,
    },
    photo: "https://source.unsplash.com/600x400/?streetlight,night",
  },
  {
    id: 3,
    name: "Garbage Not Collected",
    dept: "Sanitation",
    date: "2025-09-03",
    detail: "Garbage bins overflowing in Market Area for 3 days.",
    status: "Resolved",
    location: {
      address: "Main Market Area",
      city: "Mumbai",
      lat: 19.076,
      lng: 72.8777,
    },
    photo: "https://source.unsplash.com/600x400/?garbage,trash",
  },
  {
    id: 4,
    name: "Broken Footpath",
    dept: "Public Works",
    date: "2025-09-02",
    detail: "Cracks and uneven tiles on footpath near school.",
    status: "In Progress",
    location: {
      address: "Near City School, Sector 12",
      city: "Jaipur",
      lat: 26.9124,
      lng: 75.7873,
    },
    photo: "https://source.unsplash.com/600x400/?footpath,broken",
  },
  {
    id: 5,
    name: "Park Benches Damaged",
    dept: "Parks",
    date: "2025-09-06",
    detail: "Several benches in Central Park are broken and unsafe.",
    status: "Pending",
    location: {
      address: "Central Park, Sector 9",
      city: "Indore",
      lat: 22.7196,
      lng: 75.8577,
    },
    photo: "https://source.unsplash.com/600x400/?park,bench",
  },
  {
    id: 6,
    name: "Potholes on Main Road",
    dept: "Public Works",
    date: "2025-09-08",
    detail: "Large potholes reported on City Center Road, slowing traffic.",
    status: "In Progress",
    location: {
      address: "City Center Road",
      city: "Ahmedabad",
      lat: 23.0225,
      lng: 72.5714,
    },
    photo: "https://source.unsplash.com/600x400/?pothole,road",
  },
  {
    id: 7,
    name: "Overflowing Drainage",
    dept: "Sanitation",
    date: "2025-09-04",
    detail: "Drainage overflowing near Market Street causing foul smell.",
    status: "Pending",
    location: {
      address: "Market Street, Sector 3",
      city: "Surat",
      lat: 21.1702,
      lng: 72.8311,
    },
    photo: "https://source.unsplash.com/600x400/?drainage,sewage",
  },
  // {
  //   id: 8,
  //   name: "Transformer Spark",
  //   dept: "Electrical",
  //   date: "2025-09-09",
  //   detail: "Residents reported sparks from transformer near Sector 12.",
  //   status: "Resolved",
  //   location: {
  //     address: "Sector 12, Near Transformer",
  //     city: "Gurugram",
  //     lat: 28.4595,
  //     lng: 77.0266,
  //   },
  //   photo: "https://source.unsplash.com/600x400/?transformer,electric",
  // },
];

function IssuesReport() {
  const [issues, setIssues] = useState(issuesData);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isViewModal, setIsViewModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [hoveredIssueId, setHoveredIssueId] = useState(null);

  // Location filter
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const statusStyles = {
    Resolved: "bg-green-100 text-green-700 border border-green-300",
    "In Progress": "bg-yellow-100 text-yellow-700 border border-yellow-300",
    Pending: "bg-red-100 text-red-700 border border-red-300",
  };

  const statusIcons = {
    Resolved: <FaCheckCircle className="inline mr-1 text-green-600" />,
    "In Progress": <FaClock className="inline mr-1 text-yellow-600" />,
    Pending: <FaExclamationTriangle className="inline mr-1 text-red-600" />,
  };

  const updateStatus = (id, newStatus) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
    setIsEditModal(false);
  };
  const filteredIssues = issues
    .filter((issue) =>
      issue.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((issue) =>
      deptFilter === "All" ? true : issue.dept === deptFilter
    )
    .filter((issue) =>
      statusFilter === "All" ? true : issue.status === statusFilter
    )
    .filter(
      (issue) =>
        (selectedDept === "" || issue.dept === selectedDept) &&
        (selectedStatus === "" || issue.status === selectedStatus) &&
        (selectedCity === "" || issue.location.city === selectedCity) // ✅ fixed
    )
    .sort((a, b) =>
      sortOrder === "Newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  //  filteredLocation
  const filteredLocation = (
    selectedCity
      ? issuesData.filter((issue) => issue.location.city === selectedCity)
      : issuesData
  ).sort((a, b) => a.location.city.localeCompare(b.location.city));

  return (
    <div className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen max-w-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-800 flex items-center gap-1 ">
          📋
          {/* <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/report-card.png"
            alt="report-card"
          /> */}
          Issue Reports
        </h2>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center items-center bg-white p-4 rounded-xl shadow mb-6 border-2 max-w-270 mx-auto">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search issues..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2"
        />

        {/* Department */}
        <select
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="All">All Departments</option>
          <option value="Water Supply">Water Supply</option>
          <option value="Electrical">Electrical</option>
          <option value="Sanitation">Sanitation</option>
          <option value="Public Works">Public Works</option>
          <option value="Parks">Parks</option>
        </select>

        {/* Status */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="">All Locations</option>
          {[...new Set(issuesData.map((issue) => issue.location.city))]
            .sort((a, b) => a.localeCompare(b)) // alphabetical sort
            .map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>

        {/* Sort */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
      {/* Table */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden  border mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <table className="w-full text-left">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <tr>
              <th className="px-4 py-3">Issue ID</th>
              <th className="px-4 py-3">Details</th>
              <th className="px-4 py-3">Department</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredIssues.length > 0 ? (
              filteredIssues.map((issue) => (
                <tr key={issue.id} className="hover:bg-purple-50 transition">
                  <td className="px-4 py-3 font-semibold text-gray-700">
                    ISS-{issue.id.toString().padStart(3, "0")}
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-800">{issue.name}</p>
                    <p className="text-sm text-gray-500">{issue.detail}</p>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{issue.dept}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusStyles[issue.status]
                      }`}
                    >
                      {statusIcons[issue.status]} {issue.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 flex items-center gap-1">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/stickers/100/calendar.png"
                      alt="calendar"
                    />
                    {issue.date}
                  </td>
                  <td className="px-4 py-3">{issue.location.city}</td>
                  <td className="px-4 py-3 text-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedIssue(issue);
                        setIsViewModal(true);
                      }}
                      className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedIssue(issue);
                        setIsEditModal(true);
                      }}
                      className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600"
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-6 text-center text-gray-500">
                  No issues found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>
      {/* View Modal */}
      {isViewModal && selectedIssue && (
        <div className="fixed inset-0 backdrop-fliter backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[650px] shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                {selectedIssue.name}
              </h3>
              <button
                className="text-white hover:text-gray-200"
                onClick={() => setIsViewModal(false)}
              >
                ✖
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700">
                <strong>Description:</strong> {selectedIssue.detail}
              </p>
              <p>
                <strong>Department:</strong> {selectedIssue.dept}
              </p>
              <p>
                <strong>Reported Date:</strong>{" "}
                <FaCalendarAlt className="inline text-gray-500 mr-1" />
                {selectedIssue.date}
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="text-red-500 mr-2" />
                <span>
                  {selectedIssue.location.address} -{" "}
                  {selectedIssue.location.city} <br />
                  {selectedIssue.location.lat}, {selectedIssue.location.lng}
                </span>
              </p>
              {/* <div>
                <strong>📷 Evidence:</strong>
                <img
                  src={selectedIssue.photo}
                  alt="evidence"
                  className="w-full h-48 object-cover mt-2 rounded-lg"
                />
              </div> */}
              <div className="flex justify-end space-x-3 pt-4">
                {/* Always show Close */}
                <button
                  onClick={() => setIsViewModal(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Close
                </button>

                {/* Conditional buttons */}
                {selectedIssue.status === "Pending" && (
                  <>
                    <button
                      onClick={() =>
                        updateStatus(selectedIssue.id, "In Progress")
                      }
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                    >
                      Mark In Progress
                    </button>
                    <button
                      onClick={() => updateStatus(selectedIssue.id, "Resolved")}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Mark Resolved
                    </button>
                  </>
                )}

                {selectedIssue.status === "In Progress" && (
                  <button
                    onClick={() => updateStatus(selectedIssue.id, "Resolved")}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Mark Resolved
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Edit Modal */}
      {isEditModal && selectedIssue && (
        <div className="relative inline-block">
          <button
            onMouseEnter={() => setHoveredIssueId(selectedIssue.id)}
            onMouseLeave={() => setHoveredIssueId(null)}
            className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600"
          >
            <FaEdit />
          </button>

          {/* Hover Dropdown */}
          {hoveredIssueId === selectedIssue.id && (
            <div
              className="absolute left-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-10"
              onMouseEnter={() => setHoveredIssueId(selectedIssue.id)}
              onMouseLeave={() => setHoveredIssueId(null)}
            >
              {["Pending", "In Progress", "Resolved"].map((state) => (
                <button
                  key={state}
                  onClick={() => updateStatus(selectedIssue.id, state)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default IssuesReport;

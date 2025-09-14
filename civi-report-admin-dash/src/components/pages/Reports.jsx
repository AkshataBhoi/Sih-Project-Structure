import React from "react";
import { motion } from "framer-motion";

function Reports() {
  const issues = [
    {
      id: 1,
      name: "Water Leakage in Main Road",
      dept: "Water Supply",
      date: "2025-09-05",
      detail: "Severe water leakage causing road damage near Station Road.",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Streetlight Not Working",
      dept: "Electrical",
      date: "2025-09-07",
      detail: "Several streetlights not working in Sector 8.",
      status: "Pending",
    },
    {
      id: 3,
      name: "Garbage Not Collected",
      dept: "Sanitation",
      date: "2025-09-03",
      detail: "Garbage bins overflowing in Market Area for 3 days.",
      status: "Resolved",
    },
    {
      id: 4,
      name: "Broken Footpath",
      dept: "Public Works",
      date: "2025-09-02",
      detail: "Cracks and uneven tiles on footpath near school.",
      status: "In Progress",
    },
    {
      id: 5,
      name: "Park Benches Damaged",
      dept: "Parks",
      date: "2025-09-06",
      detail: "Several benches in Central Park are broken and unsafe.",
      status: "Pending",
    },
    {
      id: 6,
      name: "Potholes on Main Road",
      dept: "Public Works",
      date: "2025-09-08",
      detail: "Large potholes reported on City Center Road, slowing traffic.",
      status: "In Progress",
    },
    {
      id: 7,
      name: "Overflowing Drainage",
      dept: "Sanitation",
      date: "2025-09-04",
      detail: "Drainage overflowing near Market Street causing foul smell.",
      status: "Pending",
    },
    {
      id: 8,
      name: "Transformer Spark",
      dept: "Electrical",
      date: "2025-09-09",
      detail: "Residents reported sparks from transformer near Sector 12.",
      status: "Resolved",
    },
  ];

  const statusColors = {
    Pending: "bg-yellow-200 text-yellow-800",
    "In Progress": "bg-purple-200 text-purple-800",
    Resolved: "bg-green-200 text-green-800",
  };

  const departments = [
    {
      name: "Water Supply",
      head: "Mr. Sharma",
      contact: "9876543210",
      email: "watersupply.sharma@gov.in",
    },
    {
      name: "Electrical",
      head: "Ms. Rao",
      contact: "9876512345",
      email: "electrical.rao@gov.in",
    },
    {
      name: "Sanitation",
      head: "Mr. Khan",
      contact: "9876523456",
      email: "sanitation.khan@gov.in",
    },
    {
      name: "Public Works",
      head: "Mr. Patel",
      contact: "9876534567",
      email: "publicworks.patel@gov.in",
    },
    {
      name: "Parks & Recreation",
      head: "Ms. Mehta",
      contact: "9876547890",
      email: "parks.mehta@gov.in",
    },
    {
      name: "Drainage Department",
      head: "Mr. Verma",
      contact: "9876554321",
      email: "drainage.verma@gov.in",
    },
  ];

  return (
    <div className="flex flex-col-2 justify-center h-auto gap-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 rounded-2xl border max-w-screen">
      {/* Issues Section - 80% */}
      <div className=" bg-white rounded-2xl shadow-lg p-4 overflow-y-auto border border-violet-600 w-[800px]">
        {/* flex-[2] */}

        <h2 className="text-3xl font-bold mb-6 text-purple-700 flex items-center gap-2">
          📝 Government Issues Report
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {issues.map((issue) => (
            <motion.div
              key={issue.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-violet-100 to-purple-100 p-3 rounded-xl shadow-md hover:shadow-lg border-2 border-violet-400 hover:bg-purple-300 transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-gray-800">
                  {issue.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    statusColors[issue.status]
                  }`}
                >
                  {issue.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{issue.detail}</p>
              <div className="flex justify-between text-sm text-gray-500  p-2 rounded-lg">
                <span className="flex items-center gap-1">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/stickers/100/calendar.png"
                    alt="calendar"
                  />
                  {issue.date}
                </span>
                <span className="font-medium text-purple-600">
                  {issue.dept}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Department Section - 20% */}
      <div className=" bg-white rounded-2xl shadow-lg p-4 border border-gray-200 w-100">
        {/* flex-1 */}
        <h2 className="text-3xl font-bold mb-6 text-purple-700 flex items-center gap-2">
          <img
            width="54"
            height="54"
            src="https://img.icons8.com/plasticine/100/department.png"
            alt="department"
          />
          Departments
        </h2>
        <motion.ul
          className="space-y-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {departments.map((dept, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="p-4 mb-4 rounded-lg bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-400 hover:bg-purple-300 transition"
            >
              <h3 className="font-semibold text-purple-700">
                {dept.name} - {dept.head}
              </h3>
              {/* <p className="text-sm text-gray-600">Head: {dept.head}</p> */}
              <p className="text-sm text-gray-600"> {dept.email}</p>
              <p className="text-sm text-gray-600">📞 {dept.contact}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Reports;

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
  ];

  const statusColors = {
    Pending: "bg-yellow-200 text-yellow-800",
    "In Progress": "bg-purple-200 text-purple-800",
    Resolved: "bg-green-200 text-green-800",
  };

  const departments = [
    { name: "Water Supply", head: "Mr. Sharma", contact: "9876543210" },
    { name: "Electrical", head: "Ms. Rao", contact: "9876512345" },
    { name: "Sanitation", head: "Mr. Khan", contact: "9876523456" },
    { name: "Public Works", head: "Mr. Patel", contact: "9876534567" },
  ];

  return (
    <div className="flex h-full gap-6">
      {/* Issues Section - 80% */}
      <div className="flex-[4] bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">
          Government Issues Report
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
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-gray-800">{issue.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    statusColors[issue.status]
                  }`}
                >
                  {issue.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{issue.detail}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>📅 {issue.date}</span>
                <span className="font-medium text-purple-600">{issue.dept}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Department Section - 20% */}
      <div className="flex-1 bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Departments</h2>
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
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-purple-50 border border-purple-100 hover:bg-purple-100 transition"
            >
              <h3 className="font-semibold text-purple-700">{dept.name}</h3>
              <p className="text-sm text-gray-600">Head: {dept.head}</p>
              <p className="text-sm text-gray-600">📞 {dept.contact}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Reports;

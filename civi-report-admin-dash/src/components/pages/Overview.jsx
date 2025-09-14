import { motion } from "framer-motion";
import {
  FaTasks,
  FaHourglassHalf,
  FaSpinner,
  FaCheckCircle,
  FaBuilding,
  FaChartPie,
} from "react-icons/fa";
import StatCard from "../StatCard";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
// import { Sidebar } from "./Sidebar";

import Piecard from "../Piecard";
// import { Sidebar } from "../Sidebar";
import Reports from "./Reports";

// Dummy data for charts
const deptPriorityData = [
  { name: "Water Supply", High: 5, Medium: 7, Low: 3 },
  { name: "Roads", High: 3, Medium: 4, Low: 2 },
  { name: "Sanitation", High: 6, Medium: 5, Low: 4 },
  { name: "Parks", High: 2, Medium: 3, Low: 2 },
  { name: "Electricity", High: 4, Medium: 5, Low: 2 },
  { name: "Housing", High: 1, Medium: 2, Low: 2 },
];

const statusData = [
  { name: "Pending", value: 4, color: "#facc15" },
  { name: "In Progress", value: 7, color: "#a855f7" },
  { name: "Resolved", value: 10, color: "#22c55e" },
];

// Priority distribution
const priorityData = [
  { name: "High", value: 12, color: "#ef4444" }, // red
  { name: "Medium", value: 18, color: "#f59e0b" }, // amber
  { name: "Low", value: 9, color: "#10b981" }, // green
];

// Resolved by department
const resolvedDeptData = [
  { name: "Water Supply", value: 8, color: "#3b82f6" }, // blue
  { name: "Roads", value: 5, color: "#f43f5e" }, // red
  { name: "Sanitation", value: 10, color: "#10b981" }, // green
  { name: "Electricity", value: 6, color: "#a855f7" }, // purple
  { name: "Parks", value: 4, color: "#f59e0b" }, // amber
];

// Reports by category
const categoryData = [
  { name: "Water", value: 15, color: "#3b82f6" },
  { name: "Sanitation", value: 12, color: "#22c55e" },
  { name: "Roads", value: 9, color: "#f43f5e" },
  { name: "Electricity", value: 7, color: "#a855f7" },
  { name: "Parks", value: 5, color: "#f59e0b" },
];

function Overview() {
  return (
    <>
      {/* <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm p-5 space-y-3">
        <h2 className="font-bold text-2xl "> Admin Dashboard</h2>
        {/* <div className="mt-3 h-px bg-gray-300" /> }
      </div> */}
      {/* <div className="flex min-h-screen"> */}
      {/* Sidebar - fixed width, full height */}
      {/* <Sidebar onMenuClick={(e) => handleMenuClick(e.target.innerText)} /> */}

      <div className="p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen max-w-screen ">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold mb-2 text-purple-900 flex items-center gap-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <FaBuilding className="text-purple-700" />
          Dashboard Overview
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-2  text-lg "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Real-time insights into{" "}
          <span className="font-semibold">municipal operations</span> and{" "}
          <span className="font-semibold">citizen reports</span>
        </motion.p>

        {/* Top stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-5 mt-4 ">
          <motion.div whileHover={{ scale: 1.05 }}>
            <StatCard
              title="Total Issues"
              value="48"
              icon={<FaTasks size={20} />}
              color="bg-gradient-to-r from-blue-400 to-indigo-500"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <StatCard
              title="Pending"
              value="4"
              icon={<FaHourglassHalf size={20} />}
              color="bg-gradient-to-r from-amber-400 to-orange-500"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <StatCard
              title="In Progress"
              value="7"
              icon={<FaSpinner size={20} className="animate-spin" />}
              color="bg-gradient-to-r from-violet-400 to-rose-500"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <StatCard
              title="Resolved"
              value="10"
              icon={<FaCheckCircle size={20} />}
              color="bg-gradient-to-r from-green-400 to-emerald-600"
            />
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="flex flex-wrap gap-6">
          {/* BarChart - 40% */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl flex-1 min-w-[40%] max-w-[45%]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
              <FaTasks className="text-indigo-600" /> Issues by Department &
              Priority
            </h3>
            <ResponsiveContainer width="100%" height={380}>
              <BarChart data={deptPriorityData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="High"
                  stackId="a"
                  fill="#e64747"
                  radius={[6, 6, 0, 0]}
                />
                <Bar dataKey="Medium" stackId="a" fill="#f5c20b" />
                <Bar dataKey="Low" stackId="a" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Status Pie - 30% */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl flex-1 min-w-[28%] max-w-[32%] h-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
              <FaChartPie className="text-pink-600" /> Status Overview
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Reports Pie - 30% */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl flex-1 min-w-[28%] max-w-[32%] h-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
              <FaBuilding className="text-blue-600" /> Reports by Category
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
          <Reports />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Overview;

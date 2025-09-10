import { FaTasks, FaHourglassHalf, FaSpinner, FaCheckCircle } from "react-icons/fa";
import StatCard from "../StatCard";
import IssuesByDeptChart from "../IssuesByDeptChart";
import StatusPieChart from "../StatusPieChart";

function Overview() {
  return (
    <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-2 text-purple-800">
        Dashboard Overview
      </h2>
      <p className="text-gray-700 mb-8 text-lg">
        Real-time insights into municipal operations and citizen reports
      </p>

      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Issues" 
          value="6" 
          icon={<FaTasks size={24} />} 
          color="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg hover:scale-105 transition-transform duration-300" 
        />
        <StatCard 
          title="Pending" 
          value="0" 
          icon={<FaHourglassHalf size={24} />}
          color="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg hover:scale-105 transition-transform duration-300" 
        />
        <StatCard 
          title="In Progress" 
          value="3" 
          icon={<FaSpinner size={24} className="animate-spin" />}
          color="bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform duration-300" 
        />
        <StatCard 
          title="Resolved" 
          value="1" 
          icon={<FaCheckCircle size={24} />}
          color="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg hover:scale-105 transition-transform duration-300" 
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
            <FaTasks /> Issues by Department
          </h3>
          <IssuesByDeptChart />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
            <FaCheckCircle /> Status Overview
          </h3>
          <StatusPieChart />
        </div>
      </div>
    </div>
  );
}

export default Overview;

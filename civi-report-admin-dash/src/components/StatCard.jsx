import React from "react";

function StatCard({ title, value, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
    purple: "bg-purple-100 text-purple-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center hover:shadow-lg transition">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${colors[color]}`}
      >
        <span className="text-lg font-bold">{value}</span>
      </div>
      <h3 className="mt-3 text-gray-700 font-semibold">{title}</h3>
    </div>
  );
}

export default StatCard;

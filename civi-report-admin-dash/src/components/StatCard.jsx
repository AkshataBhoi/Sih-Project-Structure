import React from "react";

function StatCard({ title, value, icon, color, border }) {
  return (
    <div
      className={`relative rounded-2xl p-6 shadow-lg text-white overflow-hidden transition-transform duration-300 hover:scale-105 ${color}`}
    >
      {/* Background overlay effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>

      {/* Content */}
      <div className="relative flex flex-row items-center gap-2">{border}
        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 mb-4 shadow-md">
          {icon}
        </div>

        {/* Value */}
        <h2 className="text-3xl font-bold drop-shadow-md">{value}</h2>

        {/* Title */}
        <p className="mt-2 text-lg font-medium tracking-wide">{title}</p>
      </div>
    </div>
  );
}

export default StatCard;

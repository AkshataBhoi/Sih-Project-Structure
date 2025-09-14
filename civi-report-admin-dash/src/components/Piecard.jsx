import React from "react";
import { motion } from "framer-motion";
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

function Piecard({ title, icon, data }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-xl border-2 border-black-200 hover:shadow-2xl w-80"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
        {icon} {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default Piecard;

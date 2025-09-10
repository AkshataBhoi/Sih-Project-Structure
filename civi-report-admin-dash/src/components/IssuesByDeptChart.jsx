import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Water Management", issues: 4 },
  { name: "Roads & Infra", issues: 2 },
];

function IssuesByDeptChart() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="font-semibold mb-2">Issues by Department</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="issues" fill="#8884d8" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IssuesByDeptChart;

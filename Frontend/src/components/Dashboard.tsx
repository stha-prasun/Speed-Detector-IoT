import type { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Sidebar from "./shared/Sidebar";

const data = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 15000 },
  { month: "Mar", amount: 18000 },
  { month: "Apr", amount: 22000 },
  { month: "May", amount: 26000 },
  { month: "Jun", amount: 31000 },
  { month: "Jul", amount: 37000 },
];

const Dashboard: FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl shadow border border-slate-700">
            <h2 className="text-slate-400">Total Fines</h2>
            <p className="text-3xl font-bold text-indigo-300">Rs. 37,000</p>
          </div>
          <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl shadow border border-slate-700">
            <h2 className="text-slate-400">Overspeed Cases</h2>
            <p className="text-3xl font-bold text-indigo-300">143</p>
          </div>
          <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl shadow border border-slate-700">
            <h2 className="text-slate-400">Average Speed</h2>
            <p className="text-3xl font-bold text-indigo-300">62 km/h</p>
          </div>
        </div>

        {/* Graph */}
        <div className="bg-slate-800/60 backdrop-blur p-6 rounded-xl shadow border border-slate-700">
          <h2 className="text-xl font-semibold text-indigo-300 mb-4">
            Fines Collected (Monthly)
          </h2>

          <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="month" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    borderColor: "#334155",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#818cf8"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#a5b4fc" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", purchases: 2800000, sales: 2450000, profit: 350000 },
  { month: "Feb", purchases: 3200000, sales: 2800000, profit: 400000 },
  { month: "Mar", purchases: 3500000, sales: 3100000, profit: 400000 },
  { month: "Apr", purchases: 3800000, sales: 3450000, profit: 350000 },
  { month: "May", purchases: 4200000, sales: 3950000, profit: 250000 },
  { month: "Jun", purchases: 4500000, sales: 4250000, profit: 250000 },
  { month: "Jul", purchases: 4800000, sales: 4500000, profit: 300000 },
  { month: "Aug", purchases: 5200000, sales: 4850000, profit: 350000 },
];

function formatCurrencyValue(value: unknown) {
  const num = typeof value === "number" ? value : Number(value ?? 0);
  return `₹${(num / 1000000).toFixed(2)} Cr`;
}

export function MonthlyPurchaseVsSales() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4">Monthly Purchase vs Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#fff" }}
            formatter={(value) => formatCurrencyValue(value)}
          />
          <Legend />
          <Bar dataKey="purchases" fill="#f97316" radius={[8, 8, 0, 0]} />
          <Bar dataKey="sales" fill="#22c55e" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ProfitTrendChart() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4">Profit Trend Analysis</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#fff" }}
            formatter={(value) => formatCurrencyValue(value)}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#fbbf24"
            strokeWidth={3}
            dot={{ fill: "#fbbf24" }}
            name="Profit"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

"use client";

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { categoryWiseSales } from "@/data/metallurgy-dashboard";

const COLORS = ["#f97316", "#ef4444", "#eab308", "#22c55e", "#06b6d4", "#8b5cf6", "#ec4899"];

export function CategoryWiseDistribution() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4">Category-wise Sales Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={categoryWiseSales}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ payload }) => `${(payload as (typeof categoryWiseSales)[number]).percentage}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="sales"
          >
            {categoryWiseSales.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#fff" }}
            formatter={(value) => {
              const num = typeof value === "number" ? value : Number(value ?? 0);
              return `₹${(num / 1000000).toFixed(2)} Cr`;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        {categoryWiseSales.map((cat) => (
          <div key={cat.category} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[categoryWiseSales.indexOf(cat) % COLORS.length] }}
            ></div>
            <span className="text-slate-300">{cat.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

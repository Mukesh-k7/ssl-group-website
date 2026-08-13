"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { stockAgeingData } from "@/data/admin-dashboard";

export function StockAgeingChart() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-gunmetal/85 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
      <h3 className="text-lg font-semibold text-white">Stock Ageing</h3>
      <p className="mt-1 text-sm text-metallic/70">Inventory age distribution</p>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stockAgeingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="ageGroup" stroke="#a0a0a0" />
            <YAxis stroke="#a0a0a0" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar dataKey="quantity" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid gap-2">
        {stockAgeingData.map((item) => (
          <div key={item.ageGroup} className="flex items-center justify-between rounded-lg bg-charcoal/50 px-3 py-2">
            <span className="text-sm text-metallic/80">{item.ageGroup}</span>
            <div className="flex gap-3">
              <span className="text-sm font-semibold text-white">{item.quantity} MT</span>
              <span className="text-sm text-metallic/70">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

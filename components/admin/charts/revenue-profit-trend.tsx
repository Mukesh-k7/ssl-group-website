"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { revenueAndProfitTrendData } from "@/data/admin-dashboard";

export function RevenueAndProfitTrendChart() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-gunmetal/85 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
      <h3 className="text-lg font-semibold text-white">Revenue & Profit Trend</h3>
      <p className="mt-1 text-sm text-metallic/70">Monthly revenue and profit performance</p>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueAndProfitTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis stroke="#a0a0a0" />
            <YAxis stroke="#a0a0a0" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ fill: "#f59e0b" }}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: "#10b981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

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
import { inventoryByAlloyData } from "@/data/admin-dashboard";

export function InventoryByAlloyChart() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-gunmetal/85 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
      <h3 className="text-lg font-semibold text-white">Inventory by Alloy/Grade</h3>
      <p className="mt-1 text-sm text-metallic/70">Stock distribution across material types</p>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={inventoryByAlloyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="name" stroke="#a0a0a0" angle={-45} textAnchor="end" height={100} />
            <YAxis stroke="#a0a0a0" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

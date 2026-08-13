"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { receivablesAndPayablesData } from "@/data/admin-dashboard";

export function ReceivablesAndPayablesChart() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-gunmetal/85 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
      <h3 className="text-lg font-semibold text-white">Receivables & Payables</h3>
      <p className="mt-1 text-sm text-metallic/70">Cash flow management overview</p>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={receivablesAndPayablesData}>
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
            <Area type="monotone" dataKey="receivables" stackId="1" stroke="#f59e0b" fill="#f59e0b30" />
            <Area type="monotone" dataKey="payables" stackId="2" stroke="#ef4444" fill="#ef444430" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

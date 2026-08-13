"use client";

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { shipmentStatusData } from "@/data/admin-dashboard";

export function ShipmentStatusChart() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-gunmetal/85 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
      <h3 className="text-lg font-semibold text-white">Shipment Status</h3>
      <p className="mt-1 text-sm text-metallic/70">Current shipment distribution</p>
      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={shipmentStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.percent}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
              >
                {shipmentStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-center gap-3">
          {shipmentStatusData.map((item) => (
            <div key={item.status} className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <div>
                <p className="text-sm font-semibold text-white">{item.status}</p>
                <p className="text-xs text-metallic/70">
                  {item.count} shipments ({item.percentage}%)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subvalue?: string;
  change?: string;
  period?: string;
  status?: "up" | "down" | "neutral" | "warning";
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function MetricCard({
  title,
  value,
  subvalue,
  change,
  period,
  status = "neutral",
  icon,
  onClick,
}: MetricCardProps) {
  const isPositive = change?.startsWith("+");
  const isNegative = change?.startsWith("-");

  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-5 hover:border-orange-500/30 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-bold text-white mt-2">{value}</p>
          {subvalue && <p className="text-xs text-slate-500 mt-1">{subvalue}</p>}
        </div>
        {icon && <div className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">{icon}</div>}
      </div>

      {change && (
        <div className="flex items-center gap-2 pt-3 border-t border-slate-700">
          {isPositive ? (
            <div className="flex items-center gap-1">
              <TrendingUp size={16} className="text-emerald-500" />
              <span className="text-xs font-semibold text-emerald-400">{change}</span>
            </div>
          ) : isNegative && status === "warning" ? (
            <div className="flex items-center gap-1">
              <AlertCircle size={16} className="text-red-500" />
              <span className="text-xs font-semibold text-red-400">{change}</span>
            </div>
          ) : isNegative ? (
            <div className="flex items-center gap-1">
              <TrendingDown size={16} className="text-red-500" />
              <span className="text-xs font-semibold text-red-400">{change}</span>
            </div>
          ) : (
            <span className="text-xs text-slate-500">{change}</span>
          )}
          <span className="text-xs text-slate-600">{period}</span>
        </div>
      )}
    </div>
  );
}

import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  label: string;
  value: number | string;
  unit?: string;
  change?: string;
  icon?: ReactNode;
  status?: "up" | "down" | "neutral";
}

export function KPICard({ label, value, unit = "", change, status = "neutral" }: KPICardProps) {
  const isPositive = change?.startsWith("+");
  const isNegative = change?.startsWith("-");

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-gunmetal/80 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)] hover:border-white/20 transition-all">
      <p className="text-sm uppercase tracking-[0.28em] text-metallic/70">{label}</p>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-white">
            {value}
            {unit && <span className="ml-1 text-lg">{unit}</span>}
          </p>
        </div>
      </div>
      {change && (
        <div className="mt-4 flex items-center gap-2">
          {isPositive ? (
            <div className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400">{change}</span>
            </div>
          ) : isNegative ? (
            <div className="flex items-center gap-1 rounded-full bg-red-500/15 px-2.5 py-1">
              <TrendingDown className="h-4 w-4 text-red-400" />
              <span className="text-xs font-semibold text-red-400">{change}</span>
            </div>
          ) : (
            <span className="text-xs text-metallic/70">{change}</span>
          )}
          <span className="text-xs text-metallic/70">vs last period</span>
        </div>
      )}
    </div>
  );
}

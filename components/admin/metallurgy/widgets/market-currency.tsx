"use client";

import { stockMarketData, currencies } from "@/data/metallurgy-dashboard";
import { TrendingUp, TrendingDown, Globe } from "lucide-react";
import { useState } from "react";

export function StockMarketWidget() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <TrendingUp size={20} className="text-orange-500" />
        Market Indices
      </h3>
      <div className="space-y-3">
        {stockMarketData.map((market) => (
          <div key={market.symbol} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-orange-500/30 transition-all">
            <div>
              <p className="font-semibold text-slate-200">{market.name}</p>
              <p className="text-2xl font-bold text-white">{market.price.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <div className={`flex items-center justify-end gap-1 text-sm font-bold ${market.changePercent > 0 ? "text-emerald-400" : "text-red-400"}`}>
                {market.changePercent > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {market.changePercent > 0 ? "+" : ""}{market.changePercent}%
              </div>
              <p className="text-xs text-slate-500">Vol: {market.volume}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CurrencyWidget() {
  const [baseCurrency, setBaseCurrency] = useState("INR");
  const [amount, setAmount] = useState("1");
  const baseRate = currencies[baseCurrency as keyof typeof currencies]?.toINR || 1;

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <Globe size={20} className="text-orange-500" />
        Currency Converter
      </h3>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-slate-400 uppercase">From</label>
          <div className="flex gap-2 mt-2">
            <select
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 font-semibold"
            >
              {Object.keys(currencies).map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-24 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 text-right font-semibold"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {Object.entries(currencies).map(([code, data]) => (
            <div key={code} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
              <p className="text-xs text-slate-500 font-semibold">{code}</p>
              <p className="text-lg font-bold text-slate-200 mt-1">
                {data.symbol}
                {(parseFloat(amount || "1") * (baseRate / data.toINR)).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-xs text-slate-500 text-center border-t border-slate-700 pt-3">
          Exchange Rates: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

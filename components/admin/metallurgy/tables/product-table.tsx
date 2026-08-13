"use client";

import { products } from "@/data/metallurgy-dashboard";
import { AlertCircle, TrendingUp, Package } from "lucide-react";

export function ProductTable() {
  const displayProducts = products.slice(0, 1);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      case "Low Stock":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "Critical":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border border-slate-500/30";
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Package size={20} className="text-orange-500" />
          Product Inventory Overview
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-900/50">
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Product</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Category</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-300">Quantity (MT)</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-300">Buy Rate</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-300">Sell Rate</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Margin %</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Warehouse</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-slate-200">{product.name}</p>
                    <p className="text-xs text-slate-500">{product.grade}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-400">{product.category}</td>
                <td className="px-6 py-4 text-right font-medium text-slate-200">{product.qty}</td>
                <td className="px-6 py-4 text-right text-slate-400">₹{product.buyRate.toLocaleString()}</td>
                <td className="px-6 py-4 text-right text-emerald-400 font-medium">₹{product.sellRate.toLocaleString()}</td>
                <td className="px-6 py-4 text-center font-semibold text-orange-400">{product.margin}%</td>
                <td className="px-6 py-4 text-center text-slate-400">{product.warehouse}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-slate-700 text-right">
        <button className="text-sm font-semibold text-orange-400 hover:text-orange-300">View All Products →</button>
      </div>
    </div>
  );
}

"use client";

import { kpiMetrics } from "@/data/metallurgy-dashboard";
import { useSidebar } from "./sidebar-context";
import { MetricCard } from "./metric-card";
import { CategoryWiseDistribution } from "./charts/category-distribution";
import { MonthlyPurchaseVsSales, ProfitTrendChart } from "./charts/sales-purchase";
import { ProductTable } from "./tables/product-table";
import { PurchaseOrdersTable, SalesOrdersTable, ShipmentsTable, TopCustomersSuppliers, DuePaymentsTable } from "./tables/orders-shipments";
import { StockMarketWidget, CurrencyWidget } from "./widgets/market-currency";
import { AlertCircle, TrendingUp, Package, ShoppingCart, Warehouse, CreditCard } from "lucide-react";

interface MetallurgyDashboardProps {
  locale: string;
}

export function MetallurgyDashboard({ locale }: MetallurgyDashboardProps) {
  const { isOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">
      {/* Main Content */}
      <main className={`transition-all duration-300 pt-6 pb-12 ${isOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        <div className="px-4 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-slate-400">Welcome back! Here's your business overview.</p>
          </div>

          {/* KPI Metrics - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard
              title="Total Inventory Value"
              value={kpiMetrics.totalInventoryValue.value}
              change={kpiMetrics.totalInventoryValue.change}
              period={kpiMetrics.totalInventoryValue.period}
              status="up"
              icon="📊"
            />
            <MetricCard
              title="Total Inventory Qty"
              value={kpiMetrics.totalInventoryQty.value}
              subvalue={kpiMetrics.totalInventoryQty.unit}
              change={kpiMetrics.totalInventoryQty.change}
              period={kpiMetrics.totalInventoryQty.period}
              status="up"
              icon="📦"
            />
            <MetricCard
              title="Purchase Orders"
              value={kpiMetrics.purchaseOrders.value}
              subvalue={kpiMetrics.purchaseOrders.status}
              change={kpiMetrics.purchaseOrders.change}
              period={kpiMetrics.purchaseOrders.period}
              status="up"
              icon="🛒"
            />
            <MetricCard
              title="Sales Orders"
              value={kpiMetrics.salesOrders.value}
              subvalue={kpiMetrics.salesOrders.status}
              change={kpiMetrics.salesOrders.change}
              period={kpiMetrics.salesOrders.period}
              status="up"
              icon="💰"
            />
          </div>

          {/* KPI Metrics - Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard
              title="Pending Deliveries"
              value={kpiMetrics.pendingDeliveries.value}
              subvalue={kpiMetrics.pendingDeliveries.status}
              change={kpiMetrics.pendingDeliveries.change}
              period={kpiMetrics.pendingDeliveries.period}
              status="neutral"
              icon="🚚"
            />
            <MetricCard
              title="Stock in Warehouse"
              value={kpiMetrics.stockInWarehouse.value}
              subvalue={kpiMetrics.stockInWarehouse.unit}
              change={kpiMetrics.stockInWarehouse.change}
              period={kpiMetrics.stockInWarehouse.period}
              status="up"
              icon="🏭"
            />
            <MetricCard
              title="Profit Margin"
              value={kpiMetrics.profitMargin.value}
              subvalue={kpiMetrics.profitMargin.status}
              change={kpiMetrics.profitMargin.change}
              period={kpiMetrics.profitMargin.period}
              status="up"
              icon="📈"
            />
            <MetricCard
              title="Outstanding Payments"
              value={kpiMetrics.outstandingPayments.value}
              subvalue={kpiMetrics.outstandingPayments.status}
              change={kpiMetrics.outstandingPayments.change}
              period={kpiMetrics.outstandingPayments.period}
              status="warning"
              icon="⚠️"
            />
          </div>

          {/* Low Stock Alerts */}
          {kpiMetrics.lowStockAlerts.value !== "0" && (
            <div className="mb-8 bg-[#3A1515] border border-red-800/40 rounded-lg p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border-2 border-[#F04E5E] flex items-center justify-center">
                  <AlertCircle className="text-[#F04E5E]" size={22} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#F04E5E] mb-2">Low Stock Alerts</h3>
                <p className="text-[#F0E0E0] text-sm mb-3">
                  {kpiMetrics.lowStockAlerts.value} products require attention:
                </p>
                <div className="flex flex-wrap gap-2">
                  {kpiMetrics.lowStockAlerts.items.map((item) => (
                    <span key={item} className="bg-[#6B2020] text-[#F0E0E0] px-4 py-1.5 rounded-full text-sm border border-red-700/40">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Charts Grid - Row 1 */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <CategoryWiseDistribution />
            <MonthlyPurchaseVsSales />
          </div>

          {/* Charts Grid - Row 2 */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <ProfitTrendChart />
            <div className="grid gap-6">
              <StockMarketWidget />
              <CurrencyWidget />
            </div>
          </div>

          {/* Product Inventory Table */}
          <div className="mb-8">
            <ProductTable />
          </div>

          {/* Orders Section */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <PurchaseOrdersTable />
            <SalesOrdersTable />
          </div>

          {/* Shipments Table */}
          <div className="mb-8">
            <ShipmentsTable />
          </div>

          {/* Top Customers & Suppliers */}
          <div className="mb-8">
            <TopCustomersSuppliers />
          </div>

          {/* Due Payments */}
          <div className="mb-8">
            <DuePaymentsTable />
          </div>
        </div>
      </main>
    </div>
  );
}

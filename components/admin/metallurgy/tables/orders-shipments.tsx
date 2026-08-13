"use client";

import { purchaseOrders, salesOrders, shipmentTracking, topCustomers, topSuppliers, duePayments } from "@/data/metallurgy-dashboard";
import { ShoppingCart, TrendingUp, AlertCircle, CreditCard, Truck } from "lucide-react";

const getOrderStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    case "In Transit":
      return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
    case "Confirmed":
      return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
    case "Processing":
      return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    default:
      return "bg-slate-500/20 text-slate-400 border border-slate-500/30";
  }
};

export function PurchaseOrdersTable() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <ShoppingCart size={20} className="text-orange-500" />
          Recent Purchase Orders
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-900/50">
              <th className="px-6 py-3 text-left font-semibold text-slate-300">PO ID</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Supplier</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Product</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-300">Quantity</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-300">Amount</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Date</th>
            </tr>
          </thead>
          <tbody>
            {purchaseOrders.map((order) => (
              <tr key={order.id} className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-orange-400">{order.id}</td>
                <td className="px-6 py-4 text-slate-300">{order.supplier}</td>
                <td className="px-6 py-4 text-slate-300">{order.items}</td>
                <td className="px-6 py-4 text-right text-slate-300">{order.qty} MT</td>
                <td className="px-6 py-4 text-right font-semibold text-slate-200">₹{(order.amount / 100000).toFixed(2)} L</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getOrderStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SalesOrdersTable() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <TrendingUp size={20} className="text-green-500" />
          Recent Sales Orders
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-900/50">
              <th className="px-6 py-3 text-left font-semibold text-slate-300">SO ID</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Customer</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Product</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-300">Quantity</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-300">Amount</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Date</th>
            </tr>
          </thead>
          <tbody>
            {salesOrders.map((order) => (
              <tr key={order.id} className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-emerald-400">{order.id}</td>
                <td className="px-6 py-4 text-slate-300">{order.customer}</td>
                <td className="px-6 py-4 text-slate-300">{order.items}</td>
                <td className="px-6 py-4 text-right text-slate-300">{order.qty} MT</td>
                <td className="px-6 py-4 text-right font-semibold text-slate-200">₹{(order.amount / 100000).toFixed(2)} L</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getOrderStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ShipmentsTable() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Truck size={20} className="text-blue-500" />
          Shipment Tracking
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-900/50">
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Shipment ID</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Route</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Product</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-300">Qty (MT)</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Carrier</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Progress</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {shipmentTracking.map((ship) => (
              <tr key={ship.id} className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-blue-400">{ship.id}</td>
                <td className="px-6 py-4 text-slate-300">{ship.origin} → {ship.destination}</td>
                <td className="px-6 py-4 text-slate-300">{ship.product}</td>
                <td className="px-6 py-4 text-right text-slate-300">{ship.qty}</td>
                <td className="px-6 py-4 text-slate-300">{ship.carrier}</td>
                <td className="px-6 py-4">
                  <div className="w-20 bg-slate-900 rounded-full h-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: `${ship.progress}%` }}></div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getOrderStatusColor(ship.status)}`}>
                    {ship.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TopCustomersSuppliers() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Top Customers */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-700">
          <h3 className="text-lg font-bold text-white">Top 5 Customers</h3>
        </div>
        <div className="divide-y divide-slate-700">
          {topCustomers.map((customer) => (
            <div key={customer.rank} className="px-6 py-4 hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {customer.rank}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">{customer.name}</p>
                    <p className="text-xs text-slate-500">{customer.purchases} purchases</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-200">{customer.amount}</p>
                  <p className="text-xs text-emerald-400">{customer.trend}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Suppliers */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-700">
          <h3 className="text-lg font-bold text-white">Top 5 Suppliers</h3>
        </div>
        <div className="divide-y divide-slate-700">
          {topSuppliers.map((supplier) => (
            <div key={supplier.rank} className="px-6 py-4 hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {supplier.rank}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">{supplier.name}</p>
                    <p className="text-xs text-slate-500">{supplier.supplies} supplies</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-200">{supplier.amount}</p>
                  <p className={`text-xs ${supplier.trend.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>
                    {supplier.trend}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DuePaymentsTable() {
  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Overdue":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      case "Due Soon":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "Upcoming":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border border-slate-500/30";
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <CreditCard size={20} className="text-yellow-500" />
          Due Payment Reminders
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-900/50">
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Supplier</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-300">Amount</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">Due Date</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Days</th>
              <th className="px-6 py-3 text-center font-semibold text-slate-300">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-300">PO ID</th>
            </tr>
          </thead>
          <tbody>
            {duePayments.map((payment) => (
              <tr key={payment.id} className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-200">{payment.to}</td>
                <td className="px-6 py-4 text-right font-bold text-slate-200">{payment.amount}</td>
                <td className="px-6 py-4 text-slate-300">{payment.dueDate}</td>
                <td className="px-6 py-4 text-center font-semibold text-slate-300">{Math.abs(payment.daysOverdue)} days</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPaymentStatusColor(payment.status)}`}>
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400">{payment.poId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

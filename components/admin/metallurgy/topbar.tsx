"use client";

import { useState } from "react";
import {
  Search,
  Calendar,
  Warehouse,
  Download,
  Bell,
  Settings,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useSidebar } from "./sidebar-context";

export function TopBar() {
  const { isOpen } = useSidebar();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState("All Warehouses");
  const [dateRange, setDateRange] = useState("Today");

  const warehouses = ["All Warehouses", "Warehouse 1", "Warehouse 2", "Warehouse 3"];
  const dateRanges = ["Today", "This Week", "This Month", "Last Month", "Custom"];

  return (
    <div className={`fixed top-0 right-0 h-16 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 flex items-center justify-between px-6 z-30 transition-all duration-300 ${
      isOpen ? "left-64" : "left-20"
    }`}>
      {/* Left Section - Search */}
      <div className="flex items-center gap-4 flex-1">
        <div className="relative hidden md:flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-2 border border-slate-700 hover:border-orange-500/50 transition-all w-64">
          <Search size={18} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search products, orders, suppliers..."
            className="bg-transparent text-sm text-slate-300 placeholder-slate-500 outline-none flex-1"
          />
        </div>
      </div>

      {/* Center Section - Filters */}
      <div className="flex items-center gap-3 lg:gap-6">
        {/* Date Filter */}
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-slate-500" />
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-slate-800 text-slate-300 text-sm border border-slate-700 rounded-lg px-3 py-2 hover:border-orange-500/50 transition-all cursor-pointer"
          >
            {dateRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Warehouse Filter */}
        <div className="hidden lg:flex items-center gap-2">
          <Warehouse size={18} className="text-slate-500" />
          <select
            value={selectedWarehouse}
            onChange={(e) => setSelectedWarehouse(e.target.value)}
            className="bg-slate-800 text-slate-300 text-sm border border-slate-700 rounded-lg px-3 py-2 hover:border-orange-500/50 transition-all cursor-pointer"
          >
            {warehouses.map((wh) => (
              <option key={wh} value={wh}>
                {wh}
              </option>
            ))}
          </select>
        </div>

        {/* Export Button */}
        <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 text-sm border border-slate-700 rounded-lg hover:bg-slate-700 hover:border-orange-500/50 transition-all">
          <Download size={18} />
          <span>Export</span>
        </button>
      </div>

      {/* Right Section - Notifications & Profile */}
      <div className="flex items-center gap-4 lg:gap-6">
        {/* Notification Bell */}
        <button className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-all">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings */}
        <button className="hidden lg:block p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-all">
          <Settings size={20} />
        </button>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-all"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              MK
            </div>
            <span className="text-sm font-medium hidden lg:inline">Mukesh</span>
            <ChevronDown size={16} className={`transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2 z-50">
              <div className="px-4 py-3 border-b border-slate-700">
                <p className="text-sm font-semibold text-slate-200">Mukesh Kumar</p>
                <p className="text-xs text-slate-500">Admin@sslgroup.com</p>
              </div>
              <button className="w-full px-4 py-2 text-left text-sm text-slate-300 hover:bg-slate-700 flex items-center gap-2">
                <User size={16} />
                My Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-slate-300 hover:bg-slate-700 flex items-center gap-2">
                <Settings size={16} />
                Settings
              </button>
              <div className="border-t border-slate-700 my-2"></div>
              <button className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-slate-700 flex items-center gap-2">
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

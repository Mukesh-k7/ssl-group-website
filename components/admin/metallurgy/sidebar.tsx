"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  ShoppingBag,
  Truck,
  Users,
  Warehouse,
  BarChart3,
  CreditCard,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useSidebar } from "./sidebar-context";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#", active: true },
  { icon: Package, label: "Categories", href: "#" },
  { icon: ShoppingCart, label: "Products", href: "#" },
  { icon: Warehouse, label: "Inventory", href: "#" },
  { icon: ShoppingCart, label: "Purchases", href: "#" },
  { icon: ShoppingBag, label: "Sales", href: "#" },
  { icon: Truck, label: "Shipments", href: "#" },
  { icon: Users, label: "Customers", href: "#" },
  { icon: Users, label: "Suppliers", href: "#" },
  { icon: BarChart3, label: "Reports", href: "#" },
  { icon: CreditCard, label: "Payments", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-20 h-screen bg-slate-900 border-r border-slate-700 transition-all duration-300 z-40 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Logo/Brand */}
        <div className="flex items-center justify-between px-4 py-6 border-b border-slate-700">
          {isOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚙️</span>
              </div>
              <span className="text-white font-bold text-lg">Metallurgy</span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"
            title={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? (
              <X size={20} className="text-slate-400" />
            ) : (
              <Menu size={20} className="text-slate-400" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-1 px-3 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all whitespace-nowrap ${
                  item.active
                    ? "bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 text-orange-400"
                    : "text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
                }`}
                title={item.label}
              >
                <Icon size={20} className="flex-shrink-0" />
                {isOpen && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

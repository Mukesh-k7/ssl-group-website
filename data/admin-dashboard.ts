// Mock data for admin dashboard
export const kpiData = {
  totalInventory: {
    value: 1250,
    unit: "MT",
    label: "Total Inventory",
    change: "+5.2%",
  },
  stockValue: {
    value: 1.85,
    unit: "Cr",
    label: "Stock Value",
    change: "+12.4%",
  },
  purchaseOrders: {
    value: 24,
    unit: "",
    label: "Purchase Orders",
    change: "+3",
  },
  salesOrders: {
    value: 18,
    unit: "",
    label: "Sales Orders",
    change: "+2",
  },
  monthlyRevenue: {
    value: 72.4,
    unit: "L",
    label: "Monthly Revenue",
    change: "+18.6%",
  },
  grossProfit: {
    value: 8.6,
    unit: "L",
    label: "Gross Profit",
    change: "+22.3%",
  },
  pendingReceivables: {
    value: 31.2,
    unit: "L",
    label: "Pending Receivables",
    change: "-8.1%",
  },
  inTransitShipments: {
    value: 12,
    unit: "",
    label: "In-Transit Shipments",
    change: "+4",
  },
};

// Monthly purchase vs sales
export const monthlyPurchaseSalesData = [
  { month: "Jan", purchases: 45, sales: 38 },
  { month: "Feb", purchases: 52, sales: 42 },
  { month: "Mar", purchases: 48, sales: 45 },
  { month: "Apr", purchases: 58, sales: 52 },
  { month: "May", purchases: 65, sales: 61 },
  { month: "Jun", purchases: 72, sales: 68 },
  { month: "Jul", purchases: 78, sales: 72 },
  { month: "Aug", purchases: 85, sales: 80 },
  { month: "Sep", purchases: 88, sales: 85 },
  { month: "Oct", purchases: 92, sales: 88 },
  { month: "Nov", purchases: 95, sales: 92 },
  { month: "Dec", purchases: 102, sales: 98 },
];

// Inventory by alloy/grade
export const inventoryByAlloyData = [
  { name: "Stainless Steel 304", value: 320, percentage: 25.6 },
  { name: "Stainless Steel 316", value: 280, percentage: 22.4 },
  { name: "Aluminum Alloy 6061", value: 210, percentage: 16.8 },
  { name: "Copper Alloy", value: 185, percentage: 14.8 },
  { name: "Titanium Grade 2", value: 150, percentage: 12.0 },
  { name: "Others", value: 105, percentage: 8.4 },
];

// Revenue and profit trend
export const revenueAndProfitTrendData = [
  { month: "Jan", revenue: 45.2, profit: 4.5, margin: "9.96%" },
  { month: "Feb", revenue: 48.5, profit: 5.2, margin: "10.73%" },
  { month: "Mar", revenue: 52.3, profit: 6.1, margin: "11.66%" },
  { month: "Apr", revenue: 58.9, profit: 7.2, margin: "12.22%" },
  { month: "May", revenue: 62.1, profit: 7.8, margin: "12.56%" },
  { month: "Jun", revenue: 68.4, profit: 8.6, margin: "12.57%" },
  { month: "Jul", revenue: 72.4, profit: 9.1, margin: "12.57%" },
  { month: "Aug", revenue: 78.5, profit: 10.2, margin: "12.99%" },
];

// Stock ageing
export const stockAgeingData = [
  { ageGroup: "0-30 days", quantity: 450, percentage: 36, status: "Fresh Stock" },
  { ageGroup: "31-60 days", quantity: 320, percentage: 25.6, status: "Active" },
  { ageGroup: "61-90 days", quantity: 280, percentage: 22.4, status: "Moving" },
  { ageGroup: "90+ days", quantity: 200, percentage: 16, status: "Slow Moving" },
];

// Supplier-wise purchase volume
export const supplierWisePurchaseData = [
  { supplier: "Steel Corp Ltd", purchases: 320, percentage: 25.6, orders: 24 },
  { supplier: "Global Metals", purchases: 280, percentage: 22.4, orders: 21 },
  { supplier: "Premium Alloys", purchases: 210, percentage: 16.8, orders: 18 },
  { supplier: "Asian Materials", purchases: 185, percentage: 14.8, orders: 16 },
  { supplier: "Quality Metals", purchases: 150, percentage: 12.0, orders: 14 },
  { supplier: "Others", purchases: 105, percentage: 8.4, orders: 8 },
];

// Customer-wise sales volume
export const customerWiseSalesData = [
  { customer: "Auto Parts Inc", sales: 280, percentage: 24.2, orders: 18 },
  { customer: "Construction Co", sales: 250, percentage: 21.6, orders: 15 },
  { customer: "Aerospace Ltd", sales: 220, percentage: 19.0, orders: 14 },
  { customer: "Energy Systems", sales: 185, percentage: 16.0, orders: 12 },
  { customer: "Precision Mfg", sales: 155, percentage: 13.4, orders: 10 },
  { customer: "Others", sales: 110, percentage: 9.5, orders: 8 },
];

// Receivables and payables
export const receivablesAndPayablesData = [
  { month: "Jan", receivables: 22.5, payables: 18.2, netCash: 4.3 },
  { month: "Feb", receivables: 24.8, payables: 19.5, netCash: 5.3 },
  { month: "Mar", receivables: 26.2, payables: 20.1, netCash: 6.1 },
  { month: "Apr", receivables: 28.5, payables: 21.8, netCash: 6.7 },
  { month: "May", receivables: 29.8, payables: 23.2, netCash: 6.6 },
  { month: "Jun", receivables: 31.2, payables: 24.5, netCash: 6.7 },
  { month: "Jul", receivables: 32.1, payables: 25.2, netCash: 6.9 },
  { month: "Aug", receivables: 31.2, payables: 26.1, netCash: 5.1 },
];

// Shipment status
export const shipmentStatusData = [
  { status: "Delivered", count: 156, percentage: 58.2, color: "#10b981" },
  { status: "In Transit", count: 72, percentage: 26.9, color: "#f59e0b" },
  { status: "Processing", count: 28, percentage: 10.4, color: "#3b82f6" },
  { status: "Pending", count: 12, percentage: 4.5, color: "#ef4444" },
];

// Commodity price trend
export const commodityPriceTrendData = [
  { month: "Jan", stainlessSteel: 58.2, copper: 45.8, aluminum: 28.5, titanium: 125.3 },
  { month: "Feb", stainlessSteel: 59.5, copper: 46.2, aluminum: 29.1, titanium: 126.8 },
  { month: "Mar", stainlessSteel: 60.8, copper: 47.1, aluminum: 29.8, titanium: 128.5 },
  { month: "Apr", stainlessSteel: 62.1, copper: 48.5, aluminum: 30.5, titanium: 130.2 },
  { month: "May", stainlessSteel: 61.5, copper: 47.8, aluminum: 30.1, titanium: 129.8 },
  { month: "Jun", stainlessSteel: 63.2, copper: 49.2, aluminum: 31.2, titanium: 131.5 },
  { month: "Jul", stainlessSteel: 64.8, copper: 50.5, aluminum: 32.1, titanium: 133.2 },
  { month: "Aug", stainlessSteel: 66.2, copper: 51.8, aluminum: 33.5, titanium: 135.8 },
];

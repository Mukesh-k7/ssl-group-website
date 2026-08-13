// Metallurgy Trading Company - Admin Dashboard Data

export const productCategories = [
  { id: "ferro-alloys", name: "Ferro Alloys", count: 12, icon: "⚙️" },
  { id: "pig-iron", name: "Pig Iron", count: 4, icon: "🔩" },
  { id: "noble-alloys", name: "Noble Alloys", count: 6, icon: "✨" },
  { id: "carbon-products", name: "Carbon Products", count: 4, icon: "◆" },
  { id: "abrasives", name: "Abrasives/Carbides", count: 3, icon: "⚡" },
  { id: "coal-minerals", name: "Coal/Minerals/Ores", count: 6, icon: "⛏️" },
  { id: "steel-products", name: "Steel Products", count: 8, icon: "🏭" },
  { id: "steel-pipes", name: "Steel Pipes & Others", count: 9, icon: "📦" },
];

export const products = [
  // Ferro Alloys
  { id: 1, name: "Ferro Silicon Manganese", category: "Ferro Alloys", grade: "40% - 60%", qty: 280, unit: "MT", buyRate: 52000, sellRate: 58000, margin: 11.5, warehouse: "W1", status: "Low Stock", lastUpdated: "6 hours ago" },

  { id: 2, name: "Ferro Silicon", category: "Ferro Alloys", grade: "72%", qty: 450, unit: "MT", buyRate: 65000, sellRate: 72000, margin: 10.8, warehouse: "W1", status: "Active", lastUpdated: "2 hours ago" },
  { id: 3, name: "Ferro Manganese", category: "Ferro Alloys", grade: "78%", qty: 320, unit: "MT", buyRate: 58000, sellRate: 64500, margin: 11.2, warehouse: "W2", status: "Active", lastUpdated: "4 hours ago" },

  { id: 4, name: "Ferro Silicon Magnesium", category: "Ferro Alloys", grade: "10-15%", qty: 180, unit: "MT", buyRate: 95000, sellRate: 106000, margin: 11.6, warehouse: "W3", status: "Low Stock", lastUpdated: "1 hour ago" },
  { id: 5, name: "Ferro Chrome", category: "Ferro Alloys", grade: "55%", qty: 520, unit: "MT", buyRate: 78000, sellRate: 87500, margin: 12.2, warehouse: "W2", status: "Active", lastUpdated: "3 hours ago" },
  { id: 6, name: "Inoculants", category: "Ferro Alloys", grade: "5-15mm", qty: 120, unit: "MT", buyRate: 85000, sellRate: 95000, margin: 11.8, warehouse: "W1", status: "Critical", lastUpdated: "5 hours ago" },
  { id: 7, name: "Ferro Phosphorus", category: "Ferro Alloys", grade: "25%", qty: 200, unit: "MT", buyRate: 120000, sellRate: 135000, margin: 12.5, warehouse: "W3", status: "Active", lastUpdated: "2 hours ago" },
  { id: 8, name: "Ferro Titanium", category: "Ferro Alloys", grade: "30%", qty: 95, unit: "MT", buyRate: 250000, sellRate: 285000, margin: 14.0, warehouse: "W2", status: "Critical", lastUpdated: "7 hours ago" },
  { id: 9, name: "Ferro Niobium", category: "Ferro Alloys", grade: "60%", qty: 75, unit: "MT", buyRate: 350000, sellRate: 400000, margin: 14.3, warehouse: "W3", status: "Critical", lastUpdated: "8 hours ago" },
  { id: 10, name: "Ferro Molybdenum", category: "Ferro Alloys", grade: "50%", qty: 140, unit: "MT", buyRate: 280000, sellRate: 320000, margin: 14.3, warehouse: "W1", status: "Active", lastUpdated: "1 hour ago" },
  { id: 11, name: "Ferro Boron", category: "Ferro Alloys", grade: "15%", qty: 110, unit: "MT", buyRate: 180000, sellRate: 205000, margin: 13.9, warehouse: "W2", status: "Low Stock", lastUpdated: "3 hours ago" },
  { id: 12, name: "Ferro Vanadium", category: "Ferro Alloys", grade: "78%", qty: 85, unit: "MT", buyRate: 420000, sellRate: 485000, margin: 15.5, warehouse: "W3", status: "Critical", lastUpdated: "9 hours ago" },

  // Pig Iron
  { id: 13, name: "Foundry Pig Iron", category: "Pig Iron", grade: "Standard", qty: 1200, unit: "MT", buyRate: 32000, sellRate: 36000, margin: 12.5, warehouse: "W1", status: "Active", lastUpdated: "1 hour ago" },
  { id: 14, name: "Nodular Pig Iron", category: "Pig Iron", grade: "Premium", qty: 850, unit: "MT", buyRate: 38000, sellRate: 43000, margin: 13.2, warehouse: "W2", status: "Active", lastUpdated: "2 hours ago" },
  { id: 15, name: "Basic Pig Iron", category: "Pig Iron", grade: "Standard", qty: 950, unit: "MT", buyRate: 30000, sellRate: 34000, margin: 13.3, warehouse: "W3", status: "Active", lastUpdated: "30 mins ago" },
  { id: 16, name: "High Silicon Pig Iron", category: "Pig Iron", grade: "High Si", qty: 450, unit: "MT", buyRate: 42000, sellRate: 48000, margin: 14.3, warehouse: "W1", status: "Active", lastUpdated: "45 mins ago" },

  // Noble Alloys
  { id: 17, name: "Moly Oxide", category: "Noble Alloys", grade: "High Purity", qty: 280, unit: "MT", buyRate: 320000, sellRate: 365000, margin: 14.1, warehouse: "W2", status: "Active", lastUpdated: "2 hours ago" },
  { id: 18, name: "Molybdenum Metal", category: "Noble Alloys", grade: "99.9%", qty: 160, unit: "MT", buyRate: 450000, sellRate: 515000, margin: 14.4, warehouse: "W3", status: "Low Stock", lastUpdated: "4 hours ago" },
  { id: 19, name: "Ferro Tungsten", category: "Noble Alloys", grade: "80%", qty: 95, unit: "MT", buyRate: 380000, sellRate: 435000, margin: 14.5, warehouse: "W1", status: "Critical", lastUpdated: "6 hours ago" },
  { id: 20, name: "Tungsten Carbide", category: "Noble Alloys", grade: "Fine", qty: 120, unit: "MT", buyRate: 520000, sellRate: 600000, margin: 15.4, warehouse: "W2", status: "Low Stock", lastUpdated: "3 hours ago" },
  { id: 21, name: "Cobalt Oxide", category: "Noble Alloys", grade: "Premium", qty: 70, unit: "MT", buyRate: 680000, sellRate: 800000, margin: 17.6, warehouse: "W3", status: "Critical", lastUpdated: "8 hours ago" },
  { id: 22, name: "Nickel Alloy", category: "Noble Alloys", grade: "200 Series", qty: 110, unit: "MT", buyRate: 550000, sellRate: 630000, margin: 14.5, warehouse: "W1", status: "Active", lastUpdated: "1 hour ago" },

  // Carbon Products
  { id: 23, name: "Injection Carbon", category: "Carbon Products", grade: "Standard", qty: 620, unit: "MT", buyRate: 18000, sellRate: 20500, margin: 13.9, warehouse: "W1", status: "Active", lastUpdated: "2 hours ago" },
  { id: 24, name: "Charge Carbon", category: "Carbon Products", grade: "High Grade", qty: 480, unit: "MT", buyRate: 22000, sellRate: 25000, margin: 13.6, warehouse: "W2", status: "Active", lastUpdated: "1 hour ago" },
  { id: 25, name: "Steel Shot", category: "Carbon Products", grade: "S230", qty: 350, unit: "MT", buyRate: 35000, sellRate: 40000, margin: 14.3, warehouse: "W3", status: "Active", lastUpdated: "3 hours ago" },
  { id: 26, name: "Steel Grit", category: "Carbon Products", grade: "G25", qty: 280, unit: "MT", buyRate: 38000, sellRate: 43500, margin: 14.5, warehouse: "W1", status: "Low Stock", lastUpdated: "5 hours ago" },

  // Abrasives
  { id: 27, name: "Silicon Carbide", category: "Abrasives/Carbides", grade: "98%", qty: 340, unit: "MT", buyRate: 85000, sellRate: 98000, margin: 15.3, warehouse: "W2", status: "Active", lastUpdated: "2 hours ago" },
  { id: 28, name: "Calcium Carbide", category: "Abrasives/Carbides", grade: "Industrial", qty: 520, unit: "MT", buyRate: 42000, sellRate: 48500, margin: 15.5, warehouse: "W1", status: "Active", lastUpdated: "1 hour ago" },
  { id: 29, name: "Stainless Steel Shot", category: "Abrasives/Carbides", grade: "S304", qty: 180, unit: "MT", buyRate: 95000, sellRate: 110000, margin: 15.8, warehouse: "W3", status: "Low Stock", lastUpdated: "4 hours ago" },

  // Coal & Minerals
  { id: 30, name: "Anthracite Coal", category: "Coal/Minerals/Ores", grade: "95% Fixed Carbon", qty: 3500, unit: "MT", buyRate: 8500, sellRate: 9800, margin: 15.3, warehouse: "W1", status: "Active", lastUpdated: "30 mins ago" },
  { id: 31, name: "PCI Coal", category: "Coal/Minerals/Ores", grade: "High Volatile", qty: 2800, unit: "MT", buyRate: 12000, sellRate: 13800, margin: 15.0, warehouse: "W2", status: "Active", lastUpdated: "1 hour ago" },
  { id: 32, name: "Steam Coal", category: "Coal/Minerals/Ores", grade: "Sub Bituminous", qty: 4200, unit: "MT", buyRate: 5500, sellRate: 6300, margin: 14.5, warehouse: "W3", status: "Active", lastUpdated: "45 mins ago" },
  { id: 33, name: "Coking Coal", category: "Coal/Minerals/Ores", grade: "High Grade", qty: 1800, unit: "MT", buyRate: 18000, sellRate: 21000, margin: 16.7, warehouse: "W1", status: "Active", lastUpdated: "2 hours ago" },
  { id: 34, name: "Natural Graphite", category: "Coal/Minerals/Ores", grade: "Flake 95%", qty: 320, unit: "MT", buyRate: 125000, sellRate: 145000, margin: 16.0, warehouse: "W2", status: "Low Stock", lastUpdated: "3 hours ago" },
  { id: 35, name: "Copper Concentrate", category: "Coal/Minerals/Ores", grade: "Cu 28%", qty: 450, unit: "MT", buyRate: 180000, sellRate: 210000, margin: 16.7, warehouse: "W3", status: "Active", lastUpdated: "1 hour ago" },

  // Steel Products
  { id: 36, name: "Steel Billet", category: "Steel Products", grade: "MS Round", qty: 850, unit: "MT", buyRate: 45000, sellRate: 51500, margin: 14.4, warehouse: "W1", status: "Active", lastUpdated: "1 hour ago" },
  { id: 37, name: "Rebar/DeBar", category: "Steel Products", grade: "Fe550", qty: 1200, unit: "MT", buyRate: 52000, sellRate: 59500, margin: 14.4, warehouse: "W2", status: "Active", lastUpdated: "30 mins ago" },
  { id: 38, name: "Wire Rod", category: "Steel Products", grade: "5.5mm", qty: 680, unit: "MT", buyRate: 58000, sellRate: 66500, margin: 14.7, warehouse: "W3", status: "Active", lastUpdated: "1 hour ago" },
  { id: 39, name: "Hot Rolled Coil", category: "Steel Products", grade: "CR250", qty: 520, unit: "MT", buyRate: 62000, sellRate: 71000, margin: 14.5, warehouse: "W1", status: "Active", lastUpdated: "2 hours ago" },
  { id: 40, name: "Cold Rolled Coil", category: "Steel Products", grade: "CRC", qty: 380, unit: "MT", buyRate: 78000, sellRate: 90000, margin: 15.4, warehouse: "W2", status: "Low Stock", lastUpdated: "3 hours ago" },
  { id: 41, name: "Angle", category: "Steel Products", grade: "L50x50", qty: 420, unit: "MT", buyRate: 48000, sellRate: 55000, margin: 14.6, warehouse: "W3", status: "Active", lastUpdated: "1 hour ago" },
  { id: 42, name: "Flat Bars", category: "Steel Products", grade: "FB50x6", qty: 350, unit: "MT", buyRate: 52000, sellRate: 59500, margin: 14.4, warehouse: "W1", status: "Low Stock", lastUpdated: "4 hours ago" },
  { id: 43, name: "Channels", category: "Steel Products", grade: "ISMC 100", qty: 280, unit: "MT", buyRate: 54000, sellRate: 61500, margin: 13.9, warehouse: "W2", status: "Active", lastUpdated: "2 hours ago" },

  // Steel Pipes & Others
  { id: 44, name: "ERW Black Steel Pipes", category: "Steel Pipes & Others", grade: "Ø25mm", qty: 2100, unit: "MT", buyRate: 42000, sellRate: 48000, margin: 14.3, warehouse: "W1", status: "Active", lastUpdated: "30 mins ago" },
  { id: 45, name: "Hot Dipped Galvanized Pipes", category: "Steel Pipes & Others", grade: "Ø50mm", qty: 1200, unit: "MT", buyRate: 58000, sellRate: 67000, margin: 15.5, warehouse: "W2", status: "Active", lastUpdated: "1 hour ago" },
  { id: 46, name: "Window Sections", category: "Steel Pipes & Others", grade: "Aluminium", qty: 420, unit: "MT", buyRate: 180000, sellRate: 210000, margin: 16.7, warehouse: "W3", status: "Active", lastUpdated: "2 hours ago" },
  { id: 47, name: "Hand Pumps", category: "Steel Pipes & Others", grade: "Cast Iron", qty: 180, unit: "Nos", buyRate: 2200, sellRate: 2600, margin: 18.2, warehouse: "W1", status: "Low Stock", lastUpdated: "3 hours ago" },
  { id: 48, name: "PVC Pipes", category: "Steel Pipes & Others", grade: "Ø32mm", qty: 5200, unit: "Meters", buyRate: 35, sellRate: 42, margin: 20.0, warehouse: "W2", status: "Active", lastUpdated: "30 mins ago" },
  { id: 49, name: "UPVC Pipes & Fittings", category: "Steel Pipes & Others", grade: "Class B", qty: 3100, unit: "Meters", buyRate: 45, sellRate: 54, margin: 20.0, warehouse: "W3", status: "Active", lastUpdated: "45 mins ago" },
  { id: 50, name: "Sprinkler Pipes & Fittings", category: "Steel Pipes & Others", grade: "15mm", qty: 2800, unit: "Meters", buyRate: 28, sellRate: 34, margin: 21.4, warehouse: "W1", status: "Active", lastUpdated: "1 hour ago" },
  { id: 51, name: "Column Pipes", category: "Steel Pipes & Others", grade: "Ø200mm", qty: 680, unit: "MT", buyRate: 52000, sellRate: 60000, margin: 15.4, warehouse: "W2", status: "Active", lastUpdated: "2 hours ago" },
  { id: 52, name: "Crash Barrier", category: "Steel Pipes & Others", grade: "W Beam", qty: 320, unit: "MT", buyRate: 65000, sellRate: 75000, margin: 15.4, warehouse: "W3", status: "Low Stock", lastUpdated: "4 hours ago" },
];

export const kpiMetrics = {
  totalInventoryValue: { value: "₹428.5 Cr", change: "+12.5%", period: "vs last month" },
  totalInventoryQty: { value: "28,450", unit: "MT", change: "+8.3%", period: "vs last month" },
  purchaseOrders: { value: "156", status: "Active", change: "+22", period: "this month" },
  salesOrders: { value: "143", status: "Pending", change: "+18", period: "this month" },
  pendingDeliveries: { value: "47", status: "In Transit", change: "-5", period: "from yesterday" },
  stockInWarehouse: { value: "24,250", unit: "MT", status: "Optimized", change: "+3%", period: "this week" },
  profitMargin: { value: "14.8%", status: "Good", change: "+1.2%", period: "vs last quarter" },
  outstandingPayments: { value: "₹18.5 Cr", status: "Alert", change: "+2.1 Cr", period: "vs last week" },
  lowStockAlerts: { value: "12", status: "Warning", items: ["Ferro Titanium", "Ferro Niobium", "Molybdenum Metal"] },
};

export const purchaseOrders = [
  { id: "PO-001", supplier: "Steel Corp Ltd", category: "Ferro Alloys", items: "Ferro Silicon 72%", qty: 450, rate: 65000, amount: 2925000, status: "Delivered", date: "2024-08-08" },
  { id: "PO-002", supplier: "Global Metals", category: "Pig Iron", items: "Foundry Pig Iron", qty: 600, rate: 32000, amount: 1920000, status: "In Transit", date: "2024-08-09" },
  { id: "PO-003", supplier: "Premium Alloys", category: "Noble Alloys", items: "Molybdenum Metal", qty: 80, rate: 450000, amount: 3600000, status: "Processing", date: "2024-08-10" },
  { id: "PO-004", supplier: "Asian Materials", category: "Coal/Minerals", items: "Coking Coal", qty: 900, rate: 18000, amount: 1620000, status: "Confirmed", date: "2024-08-10" },
  { id: "PO-005", supplier: "Quality Metals", category: "Steel Products", items: "Hot Rolled Coil", qty: 350, rate: 62000, amount: 2170000, status: "Delivered", date: "2024-08-07" },
];

export const salesOrders = [
  { id: "SO-001", customer: "Auto Parts Inc", category: "Ferro Alloys", items: "Ferro Chrome 55%", qty: 280, rate: 87500, amount: 2450000, status: "Delivered", date: "2024-08-08" },
  { id: "SO-002", customer: "Construction Co", category: "Steel Products", items: "Rebar Fe550", qty: 500, rate: 59500, amount: 2975000, status: "In Transit", date: "2024-08-09" },
  { id: "SO-003", customer: "Aerospace Ltd", category: "Noble Alloys", items: "Ferro Tungsten 80%", qty: 45, rate: 435000, amount: 1957500, status: "Confirmed", date: "2024-08-10" },
  { id: "SO-004", customer: "Energy Systems", category: "Coal/Minerals", items: "Anthracite Coal", qty: 1200, rate: 9800, amount: 1176000, status: "Processing", date: "2024-08-10" },
  { id: "SO-005", customer: "Precision Mfg", category: "Steel Pipes", items: "ERW Black Pipes", qty: 800, rate: 48000, amount: 3840000, status: "Delivered", date: "2024-08-06" },
];

export const currencies = {
  USD: { value: 1, toINR: 83.24, symbol: "$" },
  EUR: { value: 1, toINR: 91.52, symbol: "€" },
  GBP: { value: 1, toINR: 105.68, symbol: "£" },
  JPY: { value: 100, toINR: 55.82, symbol: "¥" },
  CNY: { value: 1, toINR: 11.45, symbol: "¥" },
  INR: { value: 1, toINR: 1, symbol: "₹" },
};

export const stockMarketData = [
  { symbol: "STEEL", name: "Steel Index", price: 28450.75, change: 125.25, changePercent: 0.44, volume: "2.5M" },
  { symbol: "METALS", name: "Metals Index", price: 35682.30, change: -185.50, changePercent: -0.51, volume: "1.8M" },
  { symbol: "COAL", name: "Coal Index", price: 18920.45, change: 89.35, changePercent: 0.47, volume: "3.2M" },
  { symbol: "ALLOY", name: "Alloy Index", price: 42185.60, change: 245.80, changePercent: 0.59, volume: "2.1M" },
];

export const shipmentTracking = [
  { id: "SHIP-001", origin: "Shanghai", destination: "Mumbai", product: "Coking Coal", qty: 2500, status: "In Transit", eta: "2024-08-15", carrier: "CMA CGM", progress: 65 },
  { id: "SHIP-002", origin: "Rotterdam", destination: "Paradip", product: "Ferro Chrome", qty: 850, status: "In Transit", eta: "2024-08-20", carrier: "Maersk", progress: 45 },
  { id: "SHIP-003", origin: "Singapore", destination: "Chennai", product: "Steel Pipes", qty: 3200, status: "Delivered", eta: "2024-08-08", carrier: "OOCL", progress: 100 },
  { id: "SHIP-004", origin: "Dubai", destination: "Jamnagar", product: "Anthracite Coal", qty: 5500, status: "Processing", eta: "2024-08-18", carrier: "Hapag Lloyd", progress: 20 },
];

export const topCustomers = [
  { rank: 1, name: "Auto Parts Inc", purchases: 24, amount: "₹12.5 Cr", trend: "+18%" },
  { rank: 2, name: "Construction Co", purchases: 19, amount: "₹9.8 Cr", trend: "+12%" },
  { rank: 3, name: "Aerospace Ltd", purchases: 16, amount: "₹8.2 Cr", trend: "+25%" },
  { rank: 4, name: "Energy Systems", purchases: 14, amount: "₹6.5 Cr", trend: "+8%" },
  { rank: 5, name: "Precision Mfg", purchases: 12, amount: "₹5.8 Cr", trend: "-2%" },
];

export const topSuppliers = [
  { rank: 1, name: "Steel Corp Ltd", supplies: 32, amount: "₹15.2 Cr", trend: "+15%" },
  { rank: 2, name: "Global Metals", supplies: 28, amount: "₹14.1 Cr", trend: "+22%" },
  { rank: 3, name: "Premium Alloys", supplies: 24, amount: "₹12.5 Cr", trend: "+18%" },
  { rank: 4, name: "Asian Materials", supplies: 22, amount: "₹11.2 Cr", trend: "+10%" },
  { rank: 5, name: "Quality Metals", supplies: 18, amount: "₹9.8 Cr", trend: "-5%" },
];

export const categoryWiseSales = [
  { category: "Steel Products", sales: 4850000, percentage: 22.5, trend: "+18%" },
  { category: "Ferro Alloys", sales: 4520000, percentage: 20.9, trend: "+22%" },
  { category: "Coal/Minerals", sales: 3850000, percentage: 17.8, trend: "+12%" },
  { category: "Steel Pipes", sales: 3620000, percentage: 16.8, trend: "+15%" },
  { category: "Pig Iron", sales: 2180000, percentage: 10.1, trend: "+8%" },
  { category: "Noble Alloys", sales: 1850000, percentage: 8.6, trend: "+25%" },
  { category: "Carbon Products", sales: 980000, percentage: 4.5, trend: "-5%" },
];

export const recentTransactions = [
  { id: 1, type: "Sale", description: "Sold Rebar Fe550 to Construction Co", amount: "₹29,75,000", date: "2024-08-10 14:30", status: "Completed" },
  { id: 2, type: "Purchase", description: "Bought Ferro Silicon from Steel Corp", amount: "₹29,25,000", date: "2024-08-10 12:15", status: "Completed" },
  { id: 3, type: "Payment Out", description: "Payment to Global Metals (Coal)", amount: "₹18,50,000", date: "2024-08-10 10:45", status: "Completed" },
  { id: 4, type: "Payment In", description: "Payment from Auto Parts Inc", amount: "₹35,60,000", date: "2024-08-10 09:20", status: "Completed" },
  { id: 5, type: "Sale", description: "Sold Hot Rolled Coil to Energy Systems", amount: "₹42,80,000", date: "2024-08-09 16:40", status: "Completed" },
];

export const duePayments = [
  { id: 1, to: "Steel Corp Ltd", amount: "₹5,25,000", dueDate: "2024-08-12", daysOverdue: -2, status: "Due Soon", poId: "PO-001" },
  { id: 2, to: "Global Metals", amount: "₹8,75,000", dueDate: "2024-08-08", daysOverdue: 2, status: "Overdue", poId: "PO-002" },
  { id: 3, to: "Premium Alloys", amount: "₹12,50,000", dueDate: "2024-08-15", daysOverdue: -5, status: "Due Soon", poId: "PO-003" },
  { id: 4, to: "Asian Materials", amount: "₹6,85,000", dueDate: "2024-08-20", daysOverdue: -10, status: "Upcoming", poId: "PO-004" },
];

export const qualityCheckStatus = [
  { id: 1, batchNo: "FSI-001-072", product: "Ferro Silicon 72%", qty: 450, status: "Passed", percentage: 100, inspectedBy: "Quality Lab 1", date: "2024-08-10" },
  { id: 2, batchNo: "FSM-002-065", product: "Ferro Silicon Manganese", qty: 280, status: "Passed", percentage: 100, inspectedBy: "Quality Lab 2", date: "2024-08-10" },
  { id: 3, batchNo: "FPI-003-FOUND", product: "Foundry Pig Iron", qty: 600, status: "In Progress", percentage: 75, inspectedBy: "Quality Lab 1", date: "2024-08-10" },
  { id: 4, batchNo: "AC-004-95FC", product: "Anthracite Coal", qty: 1200, status: "Pending", percentage: 0, inspectedBy: "Pending", date: "2024-08-10" },
  { id: 5, batchNo: "REB-005-FE550", product: "Rebar Fe550", qty: 500, status: "Passed", percentage: 100, inspectedBy: "Quality Lab 2", date: "2024-08-09" },
];

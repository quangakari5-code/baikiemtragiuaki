// Du lieu demo cua trang Khu vuc phu trach.
// So lieu nay la mau de hoc HTML/CSS/JavaScript, chua ket noi he thong that.
window.SS_DATA = {
  zones: [
    { id: "A", name: "Khu A – Thực phẩm khô & Ngũ cốc", aisle: "Lối 1–4", description: "Gạo, mì gói, bún miến, đậu hạt và thực phẩm đóng gói khô.", managerName: "Trần Minh Quân", trafficScore: "Cao (88%)", currentAvailability: 92, targetAvailability: 96, color: "#2e9b73" },
    { id: "B", name: "Khu B – Đồ uống & Giải khát", aisle: "Lối 5–8", description: "Nước khoáng, nước ngọt, bia, trà xanh, cà phê và sữa tươi.", managerName: "Trần Minh Quân", trafficScore: "Rất cao (95%)", currentAvailability: 85, targetAvailability: 95, color: "#2a9c8a" },
    { id: "C", name: "Khu C – Chăm sóc cá nhân & Mỹ phẩm", aisle: "Lối 9–12", description: "Dầu gội, sữa tắm, kem đánh răng, sữa rửa mặt và khăn giấy.", managerName: "Nguyễn Thu Hà", trafficScore: "Trung bình (72%)", currentAvailability: 90, targetAvailability: 94, color: "#4289c8" },
    { id: "D", name: "Khu D – Hóa phẩm & Đồ gia dụng", aisle: "Lối 13–16", description: "Nước giặt, nước rửa chén, giấy vệ sinh và đồ dùng gia đình.", managerName: "Lê Văn Tùng", trafficScore: "Cao (86%)", currentAvailability: 78, targetAvailability: 93, color: "#d58a48" },
    { id: "E", name: "Khu E – Bánh kẹo & Đồ ăn vặt", aisle: "Lối 17–20", description: "Bánh quy, kẹo, snack, hạt dinh dưỡng và đồ ăn nhanh.", managerName: "Lê Văn Tùng", trafficScore: "Cao (83%)", currentAvailability: 96, targetAvailability: 95, color: "#7869c8" }
  ],
  shelves: [
    { code: "A-01", zoneId: "A", status: "normal", currentItems: 18 }, { code: "A-02", zoneId: "A", status: "normal", currentItems: 24 }, { code: "A-03", zoneId: "A", status: "empty", currentItems: 0 }, { code: "A-04", zoneId: "A", status: "normal", currentItems: 15 }, { code: "A-05", zoneId: "A", status: "normal", currentItems: 20 },
    { code: "B-01", zoneId: "B", status: "normal", currentItems: 32 }, { code: "B-02", zoneId: "B", status: "normal", currentItems: 28 }, { code: "B-03", zoneId: "B", status: "low", currentItems: 4 }, { code: "B-04", zoneId: "B", status: "normal", currentItems: 21 }, { code: "B-05", zoneId: "B", status: "normal", currentItems: 19 },
    { code: "C-01", zoneId: "C", status: "normal", currentItems: 16 }, { code: "C-02", zoneId: "C", status: "low", currentItems: 3 }, { code: "C-03", zoneId: "C", status: "normal", currentItems: 22 }, { code: "C-04", zoneId: "C", status: "normal", currentItems: 17 }, { code: "C-05", zoneId: "C", status: "normal", currentItems: 20 },
    { code: "D-01", zoneId: "D", status: "empty", currentItems: 0 }, { code: "D-02", zoneId: "D", status: "low", currentItems: 2 }, { code: "D-03", zoneId: "D", status: "normal", currentItems: 14 }, { code: "D-04", zoneId: "D", status: "normal", currentItems: 19 }, { code: "D-05", zoneId: "D", status: "normal", currentItems: 11 }, { code: "D-06", zoneId: "D", status: "normal", currentItems: 13 },
    { code: "E-01", zoneId: "E", status: "low", currentItems: 5 }, { code: "E-02", zoneId: "E", status: "normal", currentItems: 24 }, { code: "E-03", zoneId: "E", status: "normal", currentItems: 18 }, { code: "E-04", zoneId: "E", status: "normal", currentItems: 20 }, { code: "E-05", zoneId: "E", status: "normal", currentItems: 16 }
  ],
  products: [
    { sku: "SKU-1003", name: "Nước mắm Nam Ngư Phú Quốc 500ml", image: "", zoneId: "A", zoneName: "Khu A", shelfCode: "A-03", stock: 0, shelfCapacity: 24 },
    { sku: "SKU-1004", name: "Dầu ăn Simply Chai 1L", image: "", zoneId: "A", zoneName: "Khu A", shelfCode: "A-03", stock: 0, shelfCapacity: 20 },
    { sku: "SKU-1011", name: "Nước khoáng 500ml", image: "", zoneId: "B", zoneName: "Khu B", shelfCode: "B-03", stock: 4, shelfCapacity: 28 },
    { sku: "SKU-1018", name: "Sữa tươi hộp 180ml", image: "", zoneId: "B", zoneName: "Khu B", shelfCode: "B-03", stock: 6, shelfCapacity: 24 },
    { sku: "SKU-1022", name: "Dầu gội chăm sóc tóc 650g", image: "", zoneId: "C", zoneName: "Khu C", shelfCode: "C-02", stock: 3, shelfCapacity: 18 },
    { sku: "SKU-1030", name: "Nước giặt túi 3.6kg", image: "", zoneId: "D", zoneName: "Khu D", shelfCode: "D-01", stock: 0, shelfCapacity: 16 },
    { sku: "SKU-1031", name: "Nước rửa chén hương chanh", image: "", zoneId: "D", zoneName: "Khu D", shelfCode: "D-02", stock: 2, shelfCapacity: 18 },
    { sku: "SKU-1040", name: "Bánh quy bơ hộp 300g", image: "", zoneId: "E", zoneName: "Khu E", shelfCode: "E-01", stock: 5, shelfCapacity: 24 }
  ],
  restockTasks: [
    { code: "RSK-201", sku: "SKU-1003", productName: "Nước mắm Nam Ngư Phú Quốc 500ml", productImage: "", zoneId: "A", zoneName: "Khu A", shelfCode: "A-03", neededQty: 24, currentQty: 0, priority: "critical", priorityLabel: "Khẩn cấp", priorityScore: 100, assigneeId: "U-03", assigneeName: "Lê Văn Tùng", source: "AI Restock Priority", aiReason: "Kệ đã hết hàng", status: "pending", statusLabel: "Đang chờ" },
    { code: "RSK-202", sku: "SKU-1030", productName: "Nước giặt túi 3.6kg", productImage: "", zoneId: "D", zoneName: "Khu D", shelfCode: "D-01", neededQty: 16, currentQty: 0, priority: "critical", priorityLabel: "Khẩn cấp", priorityScore: 96, assigneeId: "U-03", assigneeName: "Lê Văn Tùng", source: "AI Restock Priority", aiReason: "Kệ đã hết hàng", status: "pending", statusLabel: "Đang chờ" },
    { code: "RSK-203", sku: "SKU-1011", productName: "Nước khoáng 500ml", productImage: "", zoneId: "B", zoneName: "Khu B", shelfCode: "B-03", neededQty: 20, currentQty: 4, priority: "high", priorityLabel: "Ưu tiên cao", priorityScore: 86, assigneeId: "U-02", assigneeName: "Trần Minh Quân", source: "AI Restock Priority", aiReason: "Số lượng trên kệ thấp", status: "high_priority", statusLabel: "Ưu tiên cao" },
    { code: "RSK-204", sku: "SKU-1022", productName: "Dầu gội chăm sóc tóc 650g", productImage: "", zoneId: "C", zoneName: "Khu C", shelfCode: "C-02", neededQty: 12, currentQty: 3, priority: "medium", priorityLabel: "Trung bình", priorityScore: 70, assigneeId: "U-03", assigneeName: "Lê Văn Tùng", source: "AI Restock Priority", aiReason: "Số lượng trên kệ thấp", status: "in_progress", statusLabel: "Đang thực hiện" },
    { code: "RSK-205", sku: "SKU-1040", productName: "Bánh quy bơ hộp 300g", productImage: "", zoneId: "E", zoneName: "Khu E", shelfCode: "E-01", neededQty: 14, currentQty: 5, priority: "medium", priorityLabel: "Trung bình", priorityScore: 65, assigneeId: "U-03", assigneeName: "Lê Văn Tùng", source: "AI Restock Priority", aiReason: "Mức hàng đang dưới định mức", status: "pending", statusLabel: "Đang chờ" }
  ]
};

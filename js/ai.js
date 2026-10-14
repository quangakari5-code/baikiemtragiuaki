// Mo phong goi y uu tien; day khong phai AI that hay API ben ngoai.
window.SS_AI = {
  scorePriority(priority, product) {
    const baseScores = { critical: 96, high: 84, medium: 68, low: 50 };
    const base = baseScores[priority] || 60;
    if (product && product.stock === 0) return Math.min(100, base + 4);
    if (product && product.stock <= 4) return Math.min(100, base + 2);
    return base;
  },
  explainRestock(product, zoneId) {
    if (!product || product.stock === 0) return `Kệ ${product ? product.shelfCode : ""} đã hết hàng, cần kiểm tra và bổ sung.`;
    return `Kệ ${product.shelfCode} tại Khu ${zoneId} còn ${product.stock} sản phẩm; nhân viên yêu cầu bổ sung.`;
  }
};

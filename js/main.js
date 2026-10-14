    document.addEventListener('DOMContentLoaded', () => {
      renderZoneCards();
    });

    function renderZoneCards() {
      const zones = SS_Store.all('zones');
      const shelves = SS_Store.all('shelves');
      const tasks = SS_Store.all('restockTasks');
      const container = document.getElementById('zone-cards-grid');

      const emptyCount = shelves.filter(s => s.status === 'empty' || s.currentItems === 0).length;
      const lowCount = shelves.filter(s => s.status === 'low' || s.status === 'critical').length;
      const pendingCount = tasks.filter(t => ['pending', 'high_priority', 'in_progress'].includes(t.status)).length;
      document.getElementById('stat-zone-count').textContent = `${zones.length} Khu`;
      document.getElementById('stat-shelf-count').textContent = `${shelves.length} Kệ hàng đang giám sát`;
      document.getElementById('stat-empty-shelves').textContent = `${emptyCount} Kệ`;
      document.getElementById('stat-low-shelves').textContent = `${lowCount} Kệ`;
      document.getElementById('stat-pending-tasks').textContent = `${pendingCount} Việc`;

      container.innerHTML = zones.map(zone => {
        const zoneShelves = shelves.filter(s => s.zoneId === zone.id);
        const zoneTasks = tasks.filter(t => t.zoneId === zone.id && ['pending', 'high_priority', 'in_progress'].includes(t.status));

        const emptyShelves = zoneShelves.filter(s => s.status === 'empty' || s.currentItems === 0).length;
        const lowShelves = zoneShelves.filter(s => s.status === 'low' || s.status === 'critical').length;
        const availability = zone.currentAvailability || 90;
        let barColor = 'var(--primary)';
        if (availability < 80) barColor = 'var(--danger)';
        else if (availability < 90) barColor = 'var(--warning)';

        return `
          <article class="zone-card">
            <div class="zone-color-bar" style="background-color: ${zone.color}"></div>
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px">
              <div>
                <span class="badge" style="background:${zone.color}15;color:${zone.color};border:1px solid ${zone.color}40;margin-bottom:4px">
                  ${zone.aisle}
                </span>
                <h2 style="font-size:1.15rem;font-weight:700;color:var(--text-main);margin-bottom:2px">${zone.name}</h2>
                <div style="font-size:0.8rem;color:var(--text-muted)">Quản lý: <strong>${zone.managerName}</strong> · Lưu lượng: ${zone.trafficScore}</div>
              </div>
            </div>

            <p style="font-size:0.84rem;color:var(--text-secondary);margin-bottom:12px;line-height:1.4">${zone.description}</p>

            <!-- Progress on-shelf availability -->
            <div class="zone-progress-box">
              <div style="display:flex;justify-content:space-between;font-size:0.8rem;font-weight:600;margin-bottom:4px">
                <span>Độ phủ hàng trên kệ</span>
                <span style="color:${barColor}">${availability}% / Mục tiêu ${zone.targetAvailability}%</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${availability}%; background-color: ${barColor};"></div>
              </div>
            </div>

            <!-- Stats 3 cột -->
            <div class="zone-stat-row">
              <div>
                <div class="zone-stat-val">${zoneShelves.length}</div>
                <div class="zone-stat-label">Tổng kệ</div>
              </div>
              <div>
                <div class="zone-stat-val" style="color:${emptyShelves > 0 ? 'var(--danger)' : 'var(--text-main)'}">${emptyShelves}</div>
                <div class="zone-stat-label">Kệ trống</div>
              </div>
              <div>
                <div class="zone-stat-val" style="color:${lowShelves > 0 ? 'var(--warning)' : 'var(--text-main)'}">${lowShelves}</div>
                <div class="zone-stat-label">Kệ sắp hết</div>
              </div>
            </div>

            <!-- Alerts if any -->
            <div style="margin-bottom:16px">
              ${emptyShelves > 0 ? `
                <div style="display:flex;align-items:center;gap:6px;font-size:0.78rem;color:var(--danger);font-weight:600;margin-bottom:4px">
                  <span>🚨</span> Có ${emptyShelves} kệ hết sạch hàng cần xử lý gấp.
                </div>
              ` : ''}
              ${zoneTasks.length > 0 ? `
                <div style="display:flex;align-items:center;gap:6px;font-size:0.78rem;color:var(--warning);font-weight:600">
                  <span>⚡</span> Đang có ${zoneTasks.length} nhiệm vụ bổ sung chưa hoàn thành.
                </div>
              ` : `
                <div style="display:flex;align-items:center;gap:6px;font-size:0.78rem;color:var(--success)">
                  <span>✓</span> Khu vực vận hành ổn định, không có tồn đọng.
                </div>
              `}
            </div>

            <!-- Card Actions -->
            <div style="display:flex;gap:8px;margin-top:auto">
              <a href="associate-shelf-check.html?zone=${zone.id}" class="btn btn-primary btn-sm" style="flex:1">
                <span>📋</span>
                <span>Kiểm kê khu vực</span>
              </a>
              <a href="associate-restock-task.html?zone=${zone.id}" class="btn btn-secondary btn-sm" title="Xem danh sách việc">
                <span>⚡ Việc (${zoneTasks.length})</span>
              </a>
            </div>
          </article>
        `;
      }).join('');
    }

    function openQuickRestockModal() {
      const products = SS_Store.all('products');

      SS_App.showModal({
        title: 'Tạo nhiệm vụ bổ sung hàng khẩn cấp',
        body: `
          <form id="quick-restock-form">
            <div class="form-group">
              <label class="form-label">Chọn sản phẩm cần bổ sung: <span class="required">*</span></label>
              <select class="form-control" id="task-prod-select" onchange="updateShelfFromProduct(this.value)" required>
                ${products.map(p => `<option value="${p.sku}" data-shelf="${p.shelfCode}" data-zone="${p.zoneId}">${p.name} (${p.sku}) · Tồn: ${p.stock}</option>`).join('')}
              </select>
              <small id="selected-product-hint" style="display:block;margin-top:6px;color:var(--text-muted)"></small>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Số lượng cần lấy từ kho: <span class="required">*</span></label>
                <input type="number" class="form-control" id="task-qty" value="15" min="1" max="100" required>
              </div>
              <div class="form-group">
                <label class="form-label">Mức độ ưu tiên:</label>
                <select class="form-control" id="task-priority">
                  <option value="critical">Khẩn cấp (5/5)</option>
                  <option value="high" selected>Ưu tiên cao (4/5)</option>
                  <option value="medium">Trung bình (3/5)</option>
                  <option value="low">Thấp (2/5)</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Ghi chú cho nhân viên ca:</label>
              <textarea class="form-control" id="task-note" rows="2" placeholder="Ví dụ: Kệ trống trơn, khách hỏi nhiều lần. Lấy từ kho chính cửa 3."></textarea>
            </div>
          </form>
        `,
        footer: `
          <button class="btn btn-secondary" onclick="SS_App.closeModal()">Hủy</button>
          <button class="btn btn-primary" onclick="submitQuickRestock()">Phát lệnh bổ sung</button>
        `
      });
      updateShelfFromProduct(products[0] ? products[0].sku : '');
    }

    function updateShelfFromProduct(sku) {
      const product = SS_Store.find('products', p => p.sku === sku);
      const hint = document.getElementById('selected-product-hint');
      if (hint && product) {
        hint.textContent = `Vị trí: Kệ ${product.shelfCode} · Khu ${product.zoneId} · Tồn hiện tại: ${product.stock}`;
      }
    }

    function submitQuickRestock() {
      const form = document.getElementById('quick-restock-form');
      if (!form.reportValidity()) return;
      const select = document.getElementById('task-prod-select');
      const sku = select.value;
      const opt = select.selectedOptions[0];
      const shelfCode = opt.getAttribute('data-shelf');
      const zoneId = opt.getAttribute('data-zone');
      const qty = Number(document.getElementById('task-qty').value);
      const priority = document.getElementById('task-priority').value;
      const note = document.getElementById('task-note').value;
      const prod = SS_Store.find('products', p => p.sku === sku);
      const priorityLabels = { critical: 'Khẩn cấp', high: 'Ưu tiên cao', medium: 'Trung bình', low: 'Thấp' };

      const newTask = {
        code: 'RSK-' + Math.floor(Math.random() * 800 + 200),
        sku: sku,
        productName: prod ? prod.name : 'Sản phẩm',
        productImage: prod ? prod.image : '',
        zoneId: zoneId,
        zoneName: prod ? prod.zoneName : 'Khu vực',
        shelfCode: shelfCode,
        neededQty: qty,
        currentQty: prod ? prod.stock : 0,
        priority: priority,
        priorityLabel: priorityLabels[priority],
        priorityScore: SS_AI.scorePriority(priority, prod),
        assigneeId: 'U-03',
        assigneeName: 'Lê Văn Tùng',
        source: 'Nhân viên tạo nhanh',
        aiReason: note || SS_AI.explainRestock(prod, zoneId),
        status: 'pending',
        statusLabel: 'Đang chờ',
        dueDate: new Date(Date.now() + 3600000 * 2).toISOString(),
        createdAt: new Date().toISOString()
      };

      SS_Store.insert('restockTasks', newTask);
      SS_App.closeModal();
      SS_App.toast(`Đã phát lệnh bổ sung ${newTask.code} thành công!`, 'success');
      renderZoneCards();
    }


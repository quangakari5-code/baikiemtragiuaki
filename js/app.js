// Thanh dieu huong, modal va thong bao dung chung cho trang.
(function () {
  const sidebarSlot = document.getElementById("sidebar-slot");
  const headerSlot = document.getElementById("header-slot");
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  sidebarSlot.innerHTML = `
    <aside class="ss-sidebar" id="ss-sidebar" aria-label="Điều hướng chính">
      <a class="ss-brand" href="index.html"><span class="ss-brand-mark">S</span><span>Smart<span>Shelf</span></span></a>
      <p class="ss-nav-label">KHÔNG GIAN LÀM VIỆC</p>
      <nav class="ss-nav">
        <a class="${currentFile === "index.html" ? "active" : ""}" href="index.html" ${currentFile === "index.html" ? 'aria-current="page"' : ""}><span>▦</span>Khu vực phụ trách</a>
        <a href="associate-shelf-check.html"><span>▤</span>Kiểm kê kệ hàng</a>
        <a href="associate-restock-task.html"><span>↗</span>Nhiệm vụ bổ sung</a>
      </nav>
      <div class="ss-sidebar-bottom">
        <div class="ss-store-switch"><span class="ss-store-mark">⌂</span><div><strong>SmartShelf Mart</strong><small>Cầu Giấy, Hà Nội</small></div><span>⌄</span></div>
        <div class="ss-user-card"><span class="ss-user-avatar">LT</span><div><strong>Lê Văn Tùng</strong><small>Nhân viên cửa hàng</small></div></div>
      </div>
    </aside>
    <button class="ss-sidebar-scrim" id="ss-sidebar-scrim" type="button" aria-label="Đóng menu"></button>`;

  headerSlot.innerHTML = `
    <header class="ss-header">
      <div class="ss-header-left">
        <button class="ss-icon-button ss-mobile-toggle" id="ss-mobile-toggle" type="button" aria-label="Mở menu" aria-expanded="false">☰</button>
        <div class="ss-breadcrumb"><span>SmartShelf</span><span aria-hidden="true">/</span><strong>Khu vực phụ trách</strong></div>
      </div>
      <div class="ss-header-right">
        <label class="ss-header-search"><span aria-hidden="true">⌕</span><input id="zone-search" type="search" placeholder="Tìm khu vực, ngành hàng..." aria-label="Tìm khu vực hoặc ngành hàng"><kbd>Ctrl K</kbd></label>
        <button class="ss-icon-button ss-notice" type="button" aria-label="Thông báo">♧</button>
        <span class="ss-user-avatar" aria-label="Lê Văn Tùng">LT</span>
      </div>
    </header>`;

  let toastTimer;
  window.SS_App = {
    showModal(options) {
      this.closeModal();
      const backdrop = document.createElement("div");
      backdrop.className = "ss-modal-backdrop";
      backdrop.id = "ss-modal-backdrop";
      backdrop.innerHTML = `
        <section class="ss-modal" role="dialog" aria-modal="true" aria-labelledby="ss-modal-title">
          <header class="ss-modal-head"><h2 id="ss-modal-title">${options.title || "Thông tin"}</h2><button class="ss-modal-close" type="button" aria-label="Đóng">×</button></header>
          <div class="ss-modal-body">${options.body || ""}</div>
          <footer class="ss-modal-footer">${options.footer || ""}</footer>
        </section>`;
      document.body.appendChild(backdrop);
      backdrop.querySelector(".ss-modal-close").addEventListener("click", () => this.closeModal());
      backdrop.addEventListener("click", (event) => { if (event.target === backdrop) this.closeModal(); });
      const firstInput = backdrop.querySelector("input, select, textarea, button");
      if (firstInput) firstInput.focus();
    },
    closeModal() {
      document.getElementById("ss-modal-backdrop")?.remove();
    },
    toast(message, type = "success") {
      let notice = document.getElementById("ss-toast");
      if (!notice) {
        notice = document.createElement("div");
        notice.id = "ss-toast";
        notice.className = "ss-toast";
        notice.setAttribute("role", "status");
        notice.setAttribute("aria-live", "polite");
        document.body.appendChild(notice);
      }
      notice.textContent = message;
      notice.classList.toggle("error", type === "error");
      notice.classList.add("show");
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => notice.classList.remove("show"), 3200);
    }
  };

  function closeSidebar() {
    document.getElementById("ss-sidebar")?.classList.remove("is-open");
    document.getElementById("ss-sidebar-scrim")?.classList.remove("is-open");
    document.getElementById("ss-mobile-toggle")?.setAttribute("aria-expanded", "false");
  }

  document.getElementById("ss-mobile-toggle").addEventListener("click", () => {
    const sidebar = document.getElementById("ss-sidebar");
    const isOpen = sidebar.classList.toggle("is-open");
    document.getElementById("ss-sidebar-scrim").classList.toggle("is-open", isOpen);
    document.getElementById("ss-mobile-toggle").setAttribute("aria-expanded", String(isOpen));
  });
  document.getElementById("ss-sidebar-scrim").addEventListener("click", closeSidebar);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { window.SS_App.closeModal(); closeSidebar(); }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      document.getElementById("zone-search")?.focus();
    }
  });

  const search = document.getElementById("zone-search");
  search.addEventListener("input", () => {
    const keyword = search.value.trim().toLocaleLowerCase("vi");
    document.querySelectorAll(".zone-card").forEach((card) => {
      card.hidden = !card.textContent.toLocaleLowerCase("vi").includes(keyword);
    });
  });
})();

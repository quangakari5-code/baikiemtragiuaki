# SmartShelf – Khu vực cửa hàng

## Thông tin bài làm

- **Đề tài nhóm:** Điều hành kệ hàng và hỗ trợ mua sắm
- **Trang thực hiện:** Nhân viên cửa hàng – Giám sát khu vực (Zone View)
- **Đối tượng sử dụng:** Nhân viên cửa hàng được giao phụ trách các khu vực/kệ hàng.
- **Mục đích:** Xem nhanh độ phủ hàng, kệ trống, kệ sắp hết hàng và nhiệm vụ bổ sung trong các khu vực được giao.

## Chức năng

- Hiển thị năm khu vực và các số liệu tổng quan từ mảng dữ liệu JavaScript.
- Tìm khu vực theo tên, ngành hàng hoặc nội dung trên thẻ bằng ô tìm kiếm ở thanh đầu trang.
- Tạo nhiệm vụ bổ sung nhanh qua biểu mẫu có kiểm tra sản phẩm và số lượng.
- Tính điểm ưu tiên minh họa theo mức ưu tiên và số lượng tồn.
- Lưu nhiệm vụ mới trong `localStorage` của trình duyệt để vẫn còn sau khi tải lại trang trên cùng trình duyệt.
- Hiển thị menu điều hướng dạng thu gọn trên màn hình nhỏ.

## Công nghệ

- HTML5
- CSS3: Grid, Flexbox, biến CSS, hover và media query
- JavaScript thuần: mảng/đối tượng, DOM, sự kiện, biểu mẫu và localStorage
## Cấu trúc thu mục
```text
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── data.js
│   ├── store.js
│   ├── ai.js
│   ├── app.js
│   └── main.js
└── README.md
```
## Giải thích mã nguồn ngắn

- `index.html` là khung trang, các chỉ số tổng quan và biểu mẫu tạo nhiệm vụ.
- `css/style.css` định nghĩa bảng màu, thanh điều hướng, thẻ khu vực, nút và modal.
- `css/responsive.css` đổi bố cục cho tablet/mobile và menu thu gọn.
- `js/data.js` chứa dữ liệu mẫu khu vực, kệ, sản phẩm và nhiệm vụ.
- `js/store.js` cung cấp thao tác đọc/ghi dữ liệu mẫu vào `localStorage`.
- `js/ai.js` tính điểm ưu tiên bằng quy tắc JavaScript đơn giản để minh họa. Đây không phải AI thật/API.
- `js/app.js` tạo thanh điều hướng, hộp thoại, thông báo và xử lý tìm kiếm.
- `js/main.js` render thẻ khu vực, cập nhật thống kê, kiểm tra biểu mẫu và tạo nhiệm vụ bổ sung.
## Liên kết nộp bài

- **Figma:** https://www.figma.com/design/FKUWfGU88LBwCE3M0cXdTF/SmartShelf---Giam-sat-khu-vuc?node-id=0-1&t=KLT2DB5BuemJVeZY-1
- **Video trình bày:** 
- **GitHub cá nhân:** https://github.com/quangakari5-code/baikiemtragiuaki

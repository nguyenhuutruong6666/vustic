# VUSTIC JSC

Giao diện người dùng được thiết kế chuyên nghiệp, hiện đại với trải nghiệm mượt mà, kết hợp cùng các hiệu ứng chuyển động (animations) tinh tế nhằm mang lại ấn tượng tốt nhất cho khách hàng và đối tác.

## 🚀 Công Nghệ Sử Dụng (Tech Stack)

Dự án được xây dựng dựa trên các công nghệ web hiện đại mới nhất:

- **Framework:** React 19
- **Build Tool:** Vite 8 (Nhanh chóng & tối ưu hóa hiệu suất)
- **Routing:** React Router v8
- **Styling:** SCSS (Sass) với kiến trúc linh hoạt, sử dụng CSS Variables
- **Font chữ:** Inter (Google Fonts)

## Các Tính Năng Nổi Bật

- **Thiết kế Responsive & Modern:** Hiển thị hoàn hảo trên mọi thiết bị (Mobile, Tablet, Desktop) với giao diện trực quan, chuyên nghiệp.
- **Smooth Animations:** Sử dụng `IntersectionObserver` để tạo các hiệu ứng xuất hiện (fade-in, slide-up, pop-in) mượt mà khi người dùng cuộn trang.
- **Hệ thống Component Tái sử dụng (Reusable Components):**
  - Container chuẩn hóa grid.
  - Buttons (`FindMore`, `ViewAll`, `BackToTop`).
  - Hệ thống `Search` và `Pagination` (Phân trang) đầy đủ chức năng.
  - Lightbox xem ảnh toàn màn hình.
- 📱 **Mobile Menu:** Navigation mượt mà tích hợp hiệu ứng chuyển đổi khi cuộn trang (Scrolled Header).

## Cấu Trúc Trang Web (Sitemap)

- **Trang Chủ (Home):** Banner chính, Giới thiệu ngắn, Dịch vụ, Bản đồ quy mô, Dự án nổi bật, Tin tức mới nhất và Banner liên hệ.
- **Về Chúng Tôi (About):** Tầm nhìn - Sứ mệnh, Giá trị cốt lõi, Vai trò chiến lược, Sơ đồ tổ chức (Ban lãnh đạo).
- **Đối Tác (Partners):** Danh sách đối tác phân loại theo bộ lọc danh mục (Tabs).
- **Dự Án (Projects):** Hiển thị các dự án tiêu biểu kèm trang chi tiết dự án.
- **Tin Tức (News):** Hệ thống tin tức tích hợp tìm kiếm và phân trang, kèm trang chi tiết tin tức.
- **Hình Ảnh (Gallery):** Thư viện ảnh dạng Grid kết hợp xem ảnh dạng Lightbox (Full screen).
- **Liên Hệ (Contact):** Form liên hệ, thông tin trụ sở, chi nhánh và bản đồ.

## Hướng Dẫn Cài Đặt và Chạy Dự Án

### 1. Yêu cầu hệ thống
- Cần cài đặt [Node.js](https://nodejs.org/) (Khuyến nghị bản LTS mới nhất).

### 2. Cài đặt các gói phụ thuộc (Dependencies)
Mở terminal tại thư mục gốc của dự án (`vustic/`) và chạy lệnh:
```bash
npm install
```

### 3. Chạy server phát triển (Development Server)
```bash
npm run dev
```
Sau khi chạy thành công, truy cập ứng dụng thông qua đường dẫn hiển thị trên terminal (thường là `http://localhost:5173`).

### 4. Build dự án (Production)
Để build source code cho môi trường production:
```bash
npm run build
```
Để xem trước bản build trên local:
```bash
npm run preview
```

## Quy Định Về Code (Linting)
Dự án sử dụng ESLint để đảm bảo chất lượng code. Để kiểm tra lỗi:
```bash
npm run lint
```

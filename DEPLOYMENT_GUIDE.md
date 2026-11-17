# Hướng Dẫn Chi Tiết Deploy Dự Án Lên CloudCannon & Thông Tin Chi Phí

Tài liệu này hướng dẫn từng bước (Step-by-Step) cách triển khai (deploy) website Next.js này lên nền tảng **CloudCannon** và giải đáp chi tiết về **chi phí / bảng giá**.

---

## I. Chi Phí & Bảng Giá Của CloudCannon

### 1. CloudCannon Có Miễn Phí Không?

- **Dùng thử miễn phí (Free Trial)**: CloudCannon cung cấp **21 ngày dùng thử miễn phí** đầy đủ tính năng của gói Standard. Bạn **không cần nhập thẻ tín dụng** (credit card) khi đăng ký.
- **Sau 21 ngày**: CloudCannon **không có gói miễn phí vĩnh viễn** (No permanent free tier). Bạn cần nâng cấp lên gói trả phí nếu muốn tiếp tục duy trì và chỉnh sửa nội dung qua giao diện CMS của họ.

### 2. Các Gói Chi Phí Của CloudCannon:

| Gói                    | Chi phí (ước tính)           | Phù hợp cho                                                |
| :---------------------- | :------------------------------- | :----------------------------------------------------------- |
| **21-day Trial**  | **$0** (Không cần thẻ)  | Trải nghiệm thử nghiệm, demo cho khách hàng            |
| **Standard Plan** | **~$49 – $55 / tháng**   | Cá nhân, studio, team nhỏ cần CMS trực quan và hosting |
| **Team Plan**     | **~$300 – $350 / tháng** | Doanh nghiệp cần phân quyền nhiều biên tập viên      |
| **Enterprise**    | Báo giá riêng                 | Bảo mật doanh nghiệp, SLA hỗ trợ riêng                 |

> [!TIP]
> **Nếu bạn chỉ cần deploy website chạy online vĩnh viễn hoàn toàn MIỄN PHÍ (0đ)**:
> Vì dự án này đã cấu hình `output: 'export'`, toàn bộ mã nguồn sẽ xuất ra thư mục tĩnh `out/`. Bạn có thể deploy miễn phí 100% lên:
>
> - **Vercel** (Miễn phí vĩnh viễn, hỗ trợ Next.js tốt nhất thế giới)
> - **Cloudflare Pages** (Miễn phí vĩnh viễn, băng thông không giới hạn)
> - **Netlify** (Miễn phí vĩnh viễn)

---

## II. Hướng Dẫn Step-by-Step Deploy Lên CloudCannon

### Bước 1: Kiểm Tra Cấu Hình Trong Source Code (Đã được cài đặt sẵn)

Dự án trong thư mục `accelerate/` đã được thiết lập sẵn các file cần thiết:

- **`next.config.ts`**: Đã bật `output: "export"` và `images: { unoptimized: true }`.
- **`cloudcannon.config.cjs`**: Đã cấu hình trỏ source build tĩnh về thư mục `out`.
- **`.nvmrc`**: Đã chỉ định phiên bản Node.js `20`.

### Bước 2: Đẩy Code Lên GitHub (hoặc GitLab / Bitbucket)

1. Mở Terminal tại máy của bạn:
   ```bash
   cd /Volumes/Data/work/accelerate
   ```
2. Thêm commit tất cả các file:
   ```bash
   git add .
   git commit -m "feat: complete website and cloudcannon configuration"
   ```
3. Tạo một repository mới trên tài khoản [GitHub](https://github.com/new).
4. Liên kết và đẩy code lên:
   ```bash
   git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
   git branch -M main
   git push -u origin main
   ```

### Bước 3: Đăng Ký & Tạo Site Trên CloudCannon

1. Truy cập [https://cloudcannon.com](https://cloudcannon.com) và đăng ký tài khoản (chọn gói 21-day Free Trial).
2. Sau khi đăng nhập vào Dashboard, nhấn vào nút **Sites** ở thanh menu bên trái, rồi nhấn nút **Add Site** (hoặc **Create Site**).
3. Chọn tùy chọn **Build with your own files** hoặc **Sync with GitHub**.
4. Cấp quyền cho CloudCannon kết nối tới tài khoản GitHub của bạn.
5. Chọn repository và nhánh (thường là `main`) mà bạn vừa push ở Bước 2.

### Bước 4: Thiết Lập Cấu Hình Build (Build Settings)

Tại màn hình cấu hình build của CloudCannon:

1. **SSG (Static Site Generator)**: Chọn **Custom** (hoặc **Next.js**).
2. **Install Command**:
   ```bash
   npm install
   ```
3. **Build Command**:
   ```bash
   npm run build
   ```
4. **Output Path**:
   ```text
   out
   ```
5. **Node Version**: Chọn `20.x` (hệ thống sẽ tự nhận diện qua file `.nvmrc`).
6. Nhấn nút **Sync Your Site** (hoặc **Build Site**).

### Bước 5: Xem Website Hoạt Động

- Quá trình build sẽ mất khoảng 1-2 phút. CloudCannon sẽ chạy lệnh build Next.js tĩnh và tải các trang HTML lên CDN toàn cầu.
- Khi hoàn tất, bạn sẽ nhận được một đường link xem thử dạng:
  ```text
  https://<ten-site-cua-ban>.cloudvent.net
  ```
- **Trỏ Custom Domain**: Để gắn tên miền riêng (ví dụ: `yourdomain.com.au`), bạn vào **Site Settings > Domain**, nhập tên miền và làm theo hướng dẫn cấu hình DNS CNAME/A record của CloudCannon.

---

## III. (Tuỳ Chọn) Triển Khai Miễn Phí 100% Lên Vercel

Nếu sau thời gian dùng thử CloudCannon bạn muốn duy trì website **hoàn toàn miễn phí trọn đời**:

1. Đăng ký tài khoản tại [vercel.com](https://vercel.com) (đăng nhập bằng GitHub).
2. Nhấn **Add New Project** -> Chọn repository GitHub của bạn.
3. Chọn thư mục root là `accelerate` (nếu repo chứa thư mục con).
4. Nhấn **Deploy**. Vercel sẽ tự động build và cấp domain miễn phí dạng `https://ten-du-an.vercel.app` kèm chứng chỉ SSL miễn phí vĩnh viễn.

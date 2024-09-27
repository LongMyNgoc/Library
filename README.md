# Library
## Mô tả
Đây là chương trình quản lý thư viện chạy trên localhost kết nối với Database SQLServer cục bộ được viết bằng HTML/CSS/BootStrap và JavaScript
## Yêu cầu
- Cài đặt Node.js v20.17.0
- Cài đặt SQLServer
## Cài đặt
1. Clone dự án về máy tính:
git clone https://github.com/LongMyNgoc/Library.git
3. Chạy lệnh sau để cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```
## Tạo Database
Tạo Database bằng thông tin được lưu trong file Library.sql
## Điều chỉnh Thông tin kết nối SQLServer trong file Server.js
- user: username
- password: password
- server: my server
- database: my database
## Sử Dụng
Để chạy dự án, hãy sử dụng lệnh sau:
```bash
node Server.js
Mở file Library.html bằng Live Server

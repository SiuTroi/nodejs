## required
-> Đi vào thư mục node_modules để tải và nạp vào file luu vào biến.
#    const express = required("express")
#    const app = express()
-> Khởi tạo const app là 1 hàm được viêt sẵn trong thư viện express và khi gọi function express thì sẽ trả về 1 instance (Object - đối tượng) đại diện cho ứng dụng nodejs của chúng ta.
## PORT 
-> Biến port được định nghĩa cho chúng ta muốn run website ở port nào.

## express.static 
-> Khi gặp cái path này thì nó sẽ kiểm tra thư mục bào chúng ta join trong static

## Route
-> Định nghĩa route (Các tuyến đường) path đúng route nào thì trả về dữ liệu tương ứng (respone)

### Nodemon libary
-> là một công cụ giúp phát triển các ứng dụng dựa trên Node.js bằng cách tự động khởi động lại ứng dụng node khi phát hiện các thay đổi tệp trong thư mục.

### Morgan libary 
-> Có thể quan sát được các request từ client lên node server (HTTP request logger middleware for node.js)

### Template engine (handlebars)
-> Giúp chúng ta có thể viết file html ở nơi khác gọn gàng hơn, chia layout, code ... dễ dàng hơn.
- app.engine() // cho chúng ta biết ràng là app sử dụng engine nào.

### node sass
-> node-sass [options] (ex: --watch,...) <input> (derectory file want input) [output] (derectory file want output)

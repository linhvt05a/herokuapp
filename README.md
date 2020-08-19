# Sunny Web Starting!!!!
#
# KỸ NĂNG VÀ TRÌNH ĐỘ KHÔNG QUAN TRỌNG BẰNG THÁI ĐỘ!!!!!!!
#
#
# RULE FOR ALL
# 1. Làm theo đúng mẫu Example, nếu cần thay đổi hãy request to leader.
# 2. Commit status rõ ràng.
# 3. Pull and Push code mỗi ngày để cập nhật code mới nhất. 17h mỗi ngày là bắt buộc.
# 4. Tắt console log khi đã push code và khi đã done module.
# 5. Nếu muốn cập nhật component dùng chung, hãy tham khảo qua ý kiến leader.
#
#
# Thanks all..... code for fun!!!!!



## Van note

```sh
npm install express
```
Delete the `node_modules` directory<br>
Delete the `package-lock.json` file<br>
Run `npm install`<br>
Run `npm run client` or `npm run server`<br>

cài đặt biến môi trường
```sh
npm install -g webpack-dev-server
```

## Cấu trúc thư mục
Việc chia các folder nhỏ ra giúp cho chỉnh sửa nhanh hơn đỡ tốn thời gian.<br>

├──actions<br>
├──apis<br>
├──components<br>
├──page<br>
├──contants<br>
├──containers<br>
├──assets<br>
├──helpers<br>
├──store<br>
  ├───redux<br>
  ├───reducers<br>
  ├───saga<br>

- **actions** : chứa tất cả các actions
- **apis** : Thư mục này có thể đổi lại thành services, apis là nơi chứa các function để gọi Rest API kết nối tới backend.
- **components**: Thư mục components chứa tất các các components liên quan tới UI của dự án. Các components sẽ không được phép kết nối trực tiếp tới Redux.
- **page** : Có thể move thư mục này vào components
- **contants** : Chứa tất cả các hằng số không thay đổi
- **containers** : Thư mục containers chứa các component liên kết tới Redux. Cách tổ chức cũng tương tự thư mục components. <br>Tuy nhiên bạn không cần tạo thư mục cho từng components và chỉ cần tạo một file duy nhất cho mỗi component.
- **assets** : Đây là thư mục chứa các tài nguyên như fonts, icons, ảnh svg hoặc jpg. Tuỳ theo yêu cầu của dự án mà bạn có thể tạo thêm các thư mục con như fonts, icons, images…
- **helpers** : Thư mục này có thể đổi lại thành ultils hay common gì đó. Vì mục đích thư mục này là define sẵn 1 số function mà app có thể import vào và sử dụng lại. Ví dụ hàm convert ngày tháng, hàm định dạng tiền tệ. .v.v
- **redux** : cấu hình store
- **reducers** : xử lý actions, trả về state
- **saga** : middleware saga


Cách 2 có thể chia thư mục theo re-ducks, không chia nhỏ các folder mà mỗi page sẽ là 1 folder chưa tất cả actions, reducers, api, contants
examplePage/
├── actions.js
├── index.js
├── operations.js
├── reducers.js
├── selectors.js
├── tests.js
├── types.js
├── utils.js
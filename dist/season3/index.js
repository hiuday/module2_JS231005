"use strict";
//tạo 1 class:gồm 3 phần :thuộc tính ,phương thức,constructor(hàm khởi tạo)
//class là 1 khuôn mẫu
//Access Modifier => public,private,protected,readonly
/**
 * public(mặc định):truy xuất từ tất cả mọi nơi,được chỉnh sửa
 * private:chỉ có thể truy xuất từ bên trong class(tính đóng gói)
 * protected:chỉ có thể truy xuất từ bên trong class và class con kế thừa(tính đóng gói)
 * readonly:chỉ đọc không chỉnh sửa được,có thể truy xuất từ tất cả mọi nơi =>giống với const
 */
class Person1 {
    constructor(fullName, age, address, gender) {
        this.fullName = fullName;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }
    greeting() {
        return "xin chào";
    }
}
// instance là đối tượng được tạo ra dựa trên khuôn mẫu
const hieu = new Person1("hieu", 22, "đà nẵng", 2);
hieu.fullName = "tran viet duy hieu"; // có thể sửa lại tên
console.log(hieu.fullName);
//kiểu type của function=> để xác định kiểu trả về của 1 function (nếu func k có return => void)
function greeting(name = "ok") {
    return `hello ${name}`;
}
const test = () => {
    console.log(11111);
};
test();
console.log(greeting());
//Kiểu union => để kết hợp nhiều kiểu dữ liệu cho 1 biến
const a = "ok";

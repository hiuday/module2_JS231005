"use strict";
class Student {
    constructor(name, age, gender, address, phone) {
        this.id = Date.now();
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
    }
    //   Phương thức
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getGender() {
        return this.gender;
    }
    get getAddress() {
        return this.address;
    }
    get getPhone() {
        return this.phone;
    }
    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }
    set setGender(gender) {
        this.gender = gender;
    }
    set setAddress(address) {
        this.address = address;
    }
    set setPhone(phone) {
        this.phone = phone;
    }
    inputData() {
        this.name = String(prompt("nhập tên"));
        this.age = Number(prompt("nhập tuổi"));
        this.gender = String(prompt("nhập giới tính"));
        this.address = String(prompt("nhập địa chỉ"));
        this.phone = Number(prompt("nhập số đth"));
    }
    displayData() {
        console.log(this.name +
            "" +
            this.age +
            "" +
            this.gender +
            "" +
            this.address +
            "" +
            this.phone);
    }
}
class ClassRoom {
    constructor() {
        this.students = [];
    }
    //   Phương thức của lớp
    addStudent() {
        let name = String(prompt("nhập tên"));
        let age = Number(prompt("nhập tuổi"));
        let gender = String(prompt("nhập giới tính"));
        let address = String(prompt("nhập địa chỉ"));
        let phone = Number(prompt("nhập số đth"));
        let student = new Student(name, age, gender, address, phone);
        this.students.push(student);
        console.log(this.students);
    }
    renderStudent() {
        let result = document.getElementById("student");
        result.innerHTML = "";
        this.students.forEach((item) => {
            result.innerHTML = `<li>${item.name}<button></button></li>`;
        });
    }
    deleteStudent(id) {
        const index = this.students.findIndex((item) => {
            return item.id == id;
        });
        this.students.splice(index, 1);
        this.renderStudent();
    }
    updateStudent(id) {
        let name = String(prompt("nhập tên"));
        let age = Number(prompt("nhập tuổi"));
        let gender = String(prompt("nhập giới tính"));
        let address = String(prompt("nhập địa chỉ"));
        let phone = Number(prompt("nhập số đth"));
        const newStudents = this.students.map((item) => {
            if (item.id == id) {
                return Object.assign(Object.assign({}, item), { name,
                    age,
                    gender,
                    address,
                    phone });
            }
            return item;
        });
        this.students = [...newStudents];
        this.renderStudent();
    }
}
let listStudent = new ClassRoom();
listStudent.renderStudent();
function addStudent() {
    listStudent.addStudent();
    listStudent.renderStudent();
}

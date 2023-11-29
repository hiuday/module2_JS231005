"use strict";
class Students {
    constructor(name, age, sex, address) {
        this.id = Date.now();
        this.name = name;
        this.age = age;
        this.sex = false;
        this.address = address;
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
    get getSex() {
        return this.sex;
    }
    get getAddress() {
        return this.address;
    }
    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }
    set setSex(sex) {
        this.sex = sex;
    }
    set setAddress(address) {
        this.address = address;
    }
    inputData() {
        this.name = String(prompt("nhập tên"));
        this.age = Number(prompt("nhập tuổi"));
        this.address = String(prompt("nhập địa chỉ"));
    }
    displayData() {
        console.log(this.name +
            "" +
            this.age +
            "" +
            this.sex +
            "" +
            this.address +
            "");
    }
}

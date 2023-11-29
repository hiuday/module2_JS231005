"use strict";
class Bank {
    constructor(fullName, stk, money) {
        this.fullName = fullName;
        this.stk = stk;
        this.money = money;
    }
    get getStk() {
        return this.stk;
    }
    //getter:là 1 hàm giống getMoney nhưng khác là có chữ get đằng trước và có thể get bất kỳ thuộc tính nào
    // setter gán lại giá trị
    set setStk(value) {
        if (value.toString().length > 4) {
            this.stk = value;
        }
    }
    getMoney(stk) {
        if (stk == this.stk) {
            return this.money;
        }
        else {
            return "không đúng số tài khoản";
        }
    }
}
//protected
class Person extends Bank {
    crawMoney() {
        return this.fullName;
    }
}
const userHieu = new Bank("hieu", 11111, 1000);
// set
userHieu.setStk = 2930305;
console.log(userHieu.getStk);
//setter là gán lại giá trị

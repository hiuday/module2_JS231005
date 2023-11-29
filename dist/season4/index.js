"use strict";
class Parents {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    getFullName() {
        return this.fullName;
    }
    getAge() {
        return this.age;
    }
}
class Child extends Parents {
    constructor(fullName, age, birth) {
        super(fullName, age);
        this.birth = birth;
    }
    //cách gọi bằng cách xài get
    getInfor() {
        console.log(super.getFullName());
        console.log(this.birth);
        console.log(super.getAge());
    }
}
class Chau extends Child {
    constructor(fullName, age, birth, gender) {
        super(fullName, age, birth);
        this.gender = gender;
    }
}
const chau = new Child("hịu", 17, "15/08/2007");
console.log(chau.getFullName());

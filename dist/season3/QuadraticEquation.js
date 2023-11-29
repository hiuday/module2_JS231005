"use strict";
class QuadraticEquation {
    // hàm tạo
    constructor(a, b, c) {
        //Phương thức get set QuadraticEquation
        this.getA = () => this.a;
        this.setA = (a) => {
            this.a = a;
        };
        this.getB = () => this.b;
        this.setB = (b) => {
            this.b = b;
        };
        this.getC = () => this.c;
        this.setC = (c) => {
            this.c = c;
        };
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get getDiscriminant() {
        return this.b ** 2 - 4 * this.a * this.c;
    }
    get getRoot1() {
        const delta = this.getDiscriminant;
        if (delta >= 0) {
            return (-this.b + Math.sqrt(delta)) / (2 * this.a);
        }
        return 0;
    }
    get getRoot2() {
        const delta = this.getDiscriminant;
        if (delta >= 0) {
            return (-this.b - Math.sqrt(delta)) / (2 * this.a);
        }
        return 0;
    }
    calculation() {
        const delta = this.getDiscriminant;
        if (delta > 0) {
            return `phương trình đã cho có 2 nghiệm x1 = ${this.getRoot1} và x2 = ${this.getRoot2}`;
        }
        else if (delta === 0) {
            return `Phương trình đã có nghiệm kép x1 = x2 =${this.getRoot1}`;
        }
        else {
            return ` phương trình vô nghiệm `;
        }
    }
}

"use strict";
class Fan {
    constructor(speed, status, color, radius) {
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.HARD = 3;
        this.color = color;
        this.radius = radius;
        this.speed = speed;
        this.status = status;
    }
    //get và set
    get getSpeed() {
        switch (this.speed) {
            case 1:
                return "fast";
            case 2:
                return "Medium";
            default:
                return "slow";
        }
    }
    getInfor() {
        return {
            radius: this.radius,
            color: this.color,
            speed: this.speed,
            status: this.status,
        };
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    get getStatus() {
        return this.status ? "fan is on" : "fan is off";
    }
    setStatus(status) {
        this.status = status;
    }
}
const fan_1 = new Fan(3, true, "yellow", 10);
const fan_2 = new Fan(2, false, "blue", 5);
console.log("thông tin của quạt", fan_1.getInfor());
console.log("thông tin của quạt", fan_2.getInfor());
// gán giá trị cho private

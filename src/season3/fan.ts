class Fan {
  readonly SLOW = 1;
  readonly MEDIUM = 2;
  readonly HARD = 3;
  private speed: number;
  private status: boolean;
  readonly color: string;
  readonly radius: number;
  constructor(speed: number, status: boolean, color: string, radius: number) {
    this.color = color;
    this.radius = radius;
    this.speed = speed;
    this.status = status;
  }
  //get và set
  get getSpeed(): string {
    switch (this.speed) {
      case 1:
        return "fast";
      case 2:
        return "Medium";

      default :
        return "slow";
    }
  }
  getInfor(): {
    speed: number;
    status: boolean;
    color: string;
    radius: number;
  } {
    return {
      radius: this.radius,
      color: this.color,
      speed: this.speed,
      status: this.status,
    };
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }
  get getStatus(): string {
    return this.status ? "fan is on" : "fan is off";
  }
  setStatus(status: boolean) {
    this.status = status;
  }
}
const fan_1 = new Fan(3, true, "yellow", 10);
const fan_2 = new Fan(2, false, "blue", 5);

console.log("thông tin của quạt", fan_1.getInfor());
console.log("thông tin của quạt", fan_2.getInfor());

// gán giá trị cho private

// class Student {
//   readonly id: number;
//   name: string;
//   private friends: Student[];
//   constructor(id: number, name: string, friends: Student[] = []) {
//     this.id = id;
//     this.name = name;
//     this.friends = friends;
//   }
//   addFriend(newFriend: Student): void {
//     this.friends.push(newFriend);
//   }
//   deleteFriend(friendld: number): void {
//     this.friends = this.friends.filter((friend) => friend.id != friendld);
//   }
//   public get getFriends() {
//     return this.friends;
//   }
// }

// let userOne = new Student(1, "userOne");
// let userTwo = new Student(2, "userTwo");
// let userThree = new Student(3, "userThree");
// userOne.addFriend(userTwo);
// userOne.addFriend(userThree);

// console.log("getFriends của userOne", userOne.getFriends);

// console.log("userOne ban đầu", userOne);

// userOne.deleteFriend(2);

// console.log("userOne sau khi xoá userTwo", userOne);

//tạo class hình tròn
class Circles {
  radius: number;
  color: string;
  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }
  get getRadius(): number {
    return this.radius;
  }
  get getColor(): string {
    return this.color;
  }
  set setColor(valueColor: string) {
    this.color = valueColor;
  }
  set setRadius(valueRadius: number) {
    this.radius = valueRadius;
  }
  //chu vi
  getPerimeter(): number {
    return Number((this.radius * Math.PI).toFixed(2));
  }
  //diện tích
  getArea(): number {
    return Number((this.radius * this.radius * Math.PI).toFixed(2));
  }

  inputData(): void {
    this.radius = Number(prompt("nhập bán kính"));
    this.color = String(prompt("nhập màu"));
  }
  displayData(): void {
    console.log("bán kính ", this.radius);
    console.log("màu sắc ", this.color);
  }
}
const circles = new Circles(20, "red");

console.log(circles.getPerimeter(), circles.getArea());
circles.inputData();
circles.displayData();
console.log(circles.getPerimeter(), circles.getArea());

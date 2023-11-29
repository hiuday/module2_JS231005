class Parents {
  fullName: string;
  age: number;
  constructor(fullName: string, age: number) {
    this.fullName = fullName;
    this.age = age;
  }
  getFullName(): string {
    return this.fullName;
  }
  getAge():number{
    return this.age
  }
}
class Child extends Parents {
  birth: string;
  constructor(fullName: string, age: number, birth: string) {
    super(fullName, age);
    this.birth = birth;
  }
//cách gọi bằng cách xài get
  getInfor():void{
    console.log(super.getFullName());
    console.log(this.birth);
    console.log(super.getAge());
    
  }

}
class Chau extends Child{
    gender: string;
    constructor(fullName: string, age: number, birth: string,gender:string) {
      super(fullName, age,birth);
      this.gender = gender;
}

}
const chau = new Child("hịu", 17, "15/08/2007");
console.log(chau.getFullName());




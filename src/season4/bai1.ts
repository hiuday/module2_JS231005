class Students{
    public id: number;
    public name: string;
    public age: number;
    public sex: boolean;
    public address: string;
  
    constructor(
      name: string,
      age: number,
      sex: boolean,
      address: string,
    ) {
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
    
  
    set setName(name: string) {
      this.name = name;
    }
    set setAge(age: number) {
      this.age = age;
    }
    set setSex(sex: boolean) {
      this.sex = sex;
    }
    set setAddress(address: string) {
      this.address = address;
    }
    
    inputData(): void {
      this.name = String(prompt("nhập tên"));
      this.age = Number(prompt("nhập tuổi"));
      this.address = String(prompt("nhập địa chỉ"));
    }
    displayData(): void {
      console.log(
        this.name +
          "" +
          this.age +
          "" +
          this.sex +
          "" +
          this.address +
          "" 
      );
    }
  }
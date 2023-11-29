class Student {
  public id: number;
  public name: string;
  public age: number;
  public gender: string;
  public address: string;
  public phone: number;

  constructor(
    name: string,
    age: number,
    gender: string,
    address: string,
    phone: number
  ) {
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

  set setName(name: string) {
    this.name = name;
  }
  set setAge(age: number) {
    this.age = age;
  }
  set setGender(gender: string) {
    this.gender = gender;
  }
  set setAddress(address: string) {
    this.address = address;
  }
  set setPhone(phone: number) {
    this.phone = phone;
  }
  inputData(): void {
    this.name = String(prompt("nhập tên"));
    this.age = Number(prompt("nhập tuổi"));
    this.gender = String(prompt("nhập giới tính"));
    this.address = String(prompt("nhập địa chỉ"));
    this.phone = Number(prompt("nhập số đth"));
  }
  displayData(): void {
    console.log(
      this.name +
        "" +
        this.age +
        "" +
        this.gender +
        "" +
        this.address +
        "" +
        this.phone
    );
  }
}

class ClassRoom {
  private students: Student[] = [];

  //   Phương thức của lớp
  addStudent(): void {
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
    let result: HTMLElement = document.getElementById("student") as HTMLElement;
    result.innerHTML = "";
    this.students.forEach((item) => {
      result.innerHTML = `<li>${item.name}<button></button></li>`;
    });
  }

  deleteStudent(id: number): void {
    const index:number = this.students.findIndex((item:Student) => {
      return item.id == id;
    });
    this.students.splice(index, 1);
    this.renderStudent();
  }

  updateStudent(id: number): void {
    let name = String(prompt("nhập tên"));
    let age = Number(prompt("nhập tuổi"));
    let gender = String(prompt("nhập giới tính"));
    let address = String(prompt("nhập địa chỉ"));
    let phone = Number(prompt("nhập số đth"));
    const newStudents: Student[] = this.students.map((item: Student) => {
      if (item.id == id) {
        return {
          ...item,
          name,
          age,
          gender,
          address,
          phone,
        } as Student;
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

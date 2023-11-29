class QuadraticEquation {
  // thuộc tính
  private a: number;
  private b: number;
  private c: number;

  // hàm tạo
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  //Phương thức get set QuadraticEquation
  getA = (): number => this.a;
  setA = (a: number): void => {
    this.a = a;
  };
  getB = (): number => this.b;
  setB = (b: number): void => {
    this.b = b;
  };
  getC = (): number => this.c;
  setC = (c: number): void => {
    this.c = c;
  };
  get getDiscriminant() {
    return this.b ** 2 - 4 * this.a * this.c;
  }

  get getRoot1(): number {
    const delta = this.getDiscriminant;
    if (delta >= 0) {
      return (-this.b + Math.sqrt(delta)) / (2 * this.a);
    }
    return 0;
  }
  get getRoot2(): number {
    const delta = this.getDiscriminant;
    if (delta >= 0) {
      return (-this.b - Math.sqrt(delta)) / (2 * this.a);
    }
    return 0;
  }
  calculation(): string {
    const delta = this.getDiscriminant;
    if (delta > 0) {
      return `phương trình đã cho có 2 nghiệm x1 = ${this.getRoot1} và x2 = ${this.getRoot2}`;
    } else if (delta === 0) {
      return `Phương trình đã có nghiệm kép x1 = x2 =${this.getRoot1}`;
    } else {
      return ` phương trình vô nghiệm `;
    }
  }
}

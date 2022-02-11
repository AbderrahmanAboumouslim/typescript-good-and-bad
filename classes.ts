// bad practice
class CaseA {
  color: string = "red";

  constructor(color: string) {
    this.color = color;
  }
}
const smallCaseA = new CaseA("black");

// bad practice
class CaseB {
  constructor(public color: string) {}
}

const smallCaseB = new CaseA("black");

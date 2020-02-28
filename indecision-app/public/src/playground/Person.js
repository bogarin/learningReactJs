class Person {
  constructor(name = "Anonimo", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return `Hi. i am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    if (this.hasMajor()) {
      return `${super.getDescription()} their major is ${this.major}.`;
    }
    return super.getDescription();
  }
}

const me = new Student("Jose Ramon ", 31, "engineer");
console.log(me);
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

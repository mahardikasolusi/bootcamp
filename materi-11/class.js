class Person {
  constructor(){
    this.name = ""
    this.height = ""
    this.weight = ""
  }

  get person_name(){
    return this.name;
  }

  set person_name(str){
    this.name = str;
  }

  sayHello(){
    return `Halo nama saya ${this.name}`
  }

  static whatTheClass(){
    return `this is class Person`
  }
}

let john = new Person()
john.person_name = "John"

console.log(john)
console.log(john.sayHello())
console.log(Person.whatTheClass())

class Profession extends Person {
  constructor(){
    super()
    this.nameOfProfession = ""
  }
  sayHello(){
    return `Halo nama saya ${this.name} dan pekerjaan saya ${this.nameOfProfession}`
  }
}

let lectureBudi = new Profession()
// dirubah dengan setter
lectureBudi.person_name = "Budi"
// dirubah langsung ke property
lectureBudi.nameOfProfession = "Budi"
console.log(lectureBudi.sayHello())
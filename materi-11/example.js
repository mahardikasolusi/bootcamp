class Person{
  constructor(nameOfPerson){
    this.name = nameOfPerson
  }

  halo(){
    return "halo"
  }

  static lompat(){
    return "huup"
  }
}

console.log(Person.lompat())

var orang1 = new Person()

console.log(orang1.halo())

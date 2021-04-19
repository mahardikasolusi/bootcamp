// Rest Parameters + Spread Operator

// rest
const numbers = [1,2,3,4,5,6,7]
let [numberOne, numberTwo, ...restOfNumbers] = numbers

console.log(restOfNumbers)

let person = {
  personName: "John",
  age: 30,
  height: "180cm",
  gender: "male"
}

let {personName, gender, ...restOfPerson} = person

console.log(restOfPerson)

const tambahkanVersiRest = (a, b,...rest)=>{
  const [num1,num2] = rest
  return a+b+num1+num2
}

console.log(tambahkanVersiRest(1,2,3,4))

const tambahkanVersiRestObj = ({a, b,...rest})=>{
  const {num1} = rest
  return a+b+num1
}
console.log(tambahkanVersiRestObj({a: 2, b: 3, num1: 4, num2: 5}))

// spread
let angkaAwal = [3,4,5]

let angkaAkhir = ["2", "3", "4"]

let gabung = [ "a", ...angkaAwal, ...angkaAkhir]

console.log(gabung)

let newPerson = {
  personName: "John",
  age: 30
}
let newPerson2 = {
  height: "180cm"
}
console.log(newPerson)

newPerson = {
  gender: "male",
  ...newPerson,   
  ...newPerson2
}

console.log(newPerson)


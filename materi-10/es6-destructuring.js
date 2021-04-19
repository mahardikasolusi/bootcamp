// Destructuring
const cars = ["Benz", "Toyota", "Chevrolet", "Daihatsu"]

// tanpa descturing
// let car1 = cars[0]
// let car2 = cars[1]
// let car4 = cars[3]

// dengan destructuring
let [car1, car2, , car4] = cars

console.log(car1, car2,  car4)


const car ={
  carName: "Toyota",
  color: "black",
  year: "2012"
}

// tanpa descturing
// var carName = car.carName
// var color = car.color
// var year = car.year

let {carName: namaMobil, color, year} = car

console.log(namaMobil, color, year)


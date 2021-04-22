// // Soal 1
// console.log("---Soal 1---");
// console.log("---Release 0---");
// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._legs = 4;
//     this._cold_blooded = false;
//   }
//   get name() {
//     return this._name;
//   }
//   get legs() {
//     return this._legs;
//   }

//   set legs(amount) {
//     this._legs = amount;
//   }
//   get cold_blooded() {
//     return this._cold_blooded;
//   }
// }

// var sheep = new Animal("shaun");

// console.log(sheep.name); // "shaun"
// console.log(sheep.legs); // 4
// console.log(sheep.cold_blooded); // false
// sheep.legs = 3;
// console.log(sheep.legs);
// console.log("---Release 1---");
// // Code class Ape dan class Frog di sini
// class Ape extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   yell() {
//     console.log("Auooo");
//   };
// }

// class Frog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   jump() {
//     console.log("hop hop");
//   };
// }
// var sungokong = new Ape("kera sakti");
// sungokong.legs = 2;
// sungokong.yell(); // "Auooo"
// console.log(sungokong.name);
// console.log(sungokong.legs);
// console.log(sungokong.cold_blooded);

// var kodok = new Frog("buduk");
// kodok.jump(); // "hop hop"
// console.log(kodok.name);
// console.log(kodok.legs);
// console.log(kodok.cold_blooded);
// // Soal 2
// console.log("---Soal 2---");
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }
//   render () {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = `0${hours}`;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = `0${mins}`;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = `0${secs}`;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   };

//   stop(){
//     clearInterval(this.timer);
//   };

//   start() {
//     this.render();
//     this.timer = setInterval(this.render.bind(this), 1000);
//   };
// }

// var clock = new Clock({ template: "h:m:s" });
// clock.start();

var isMomHappy = true;
// Promise
var willIGetNewPhone = new Promise( (oke, reject) => {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black",
    };
    oke(phone); // fulfilled atau janji dipenuhi
  } else {
    var reason = new Error("mom is not happy");
    reject(reason); // reject (ingkar)
  }
});

function askMom() {
  willIGetNewPhone
    .then((phone) => {
      // yay, you got a new phone
      console.log(phone);
      // output: { brand: 'Samsung', color: 'black' }
    })
    .catch((reason) => {
      // oops, mom don't buy it
      console.log(reason.message);
      // output: 'mom is not happy'
    });
}

askMom();

// Soal 1
console.log("---Soal 1---");
console.log();
console.log("LOOPING PERTAMA");

var i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i + " - I love coding");
  }
  i++;
}
console.log();
console.log("LOOPING KEDUA");

var i = 20;
while (i > 0) {
  if (i % 2 == 0) {
    console.log(i + " - I will become a frontend developer");
  }
  i--;
}
console.log();
// Soal 2
console.log("---Soal 2---");
console.log();
for (genap = 1; genap <= 20; genap++) {
  if (genap % 3 === 0 && genap % 2 === 1) {
    console.log(genap + " I love coding");
  } else if (genap % 2 === 1) {
    console.log(genap + " Santai");
  } else if (genap % 2 === 0) {
    console.log(genap + " Berkualitas");
  }
}
console.log();
// Soal 3
console.log("---Soal 3---");
console.log();

var row = 7;
for (var i = 1; i <= row; i++) {
  var result = "";
  for (var j = 1; j <= i; j++) {
    result += "#";
  }
  console.log(result);
}
console.log();
// Soal 4
console.log("---Soal 4---");
console.log();

var kalimat = [
  "aku",
  "saya",
  "sangat",
  "sangat",
  "senang",
  "belajar",
  "javascript",
];
kalimat.shift();
kalimat.splice(2, 1);
var kalimat1 = kalimat.join(" ");
console.log('"' + kalimat1 + '"');
console.log();

// Soal 5
console.log("---Soal 5---");
console.log();

var sayuran = [
  "Kangkung",
  "Bayam",
  "Buncis",
  "Kubis",
  "Timun",
  "Seledri",
  "Tauge",
];
sayuran.sort();
for (jmlSayuran = 0; jmlSayuran < sayuran.length; jmlSayuran++) {
  console.log(jmlSayuran + 1 + "." + sayuran[jmlSayuran]);
}

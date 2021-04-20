// Soal 1
console.log("---Soal 1---");

const luasLingkaran = (phi, jari, jari2) => {
  return phi * jari * jari2;
};
console.log(luasLingkaran(22 / 7, 7, 7));

const kelilingLingkaran = (phi = 22 / 7, rumus = 2, jari2 = 7) => {
  return phi * rumus * jari2;
};
console.log(kelilingLingkaran());
console.log();
// Soal 2
console.log("---Soal 2---");
const introduce = (...params)=>{
  const [name, age, gender, profession] = params
  let prefixName = "Undefined"
  if (gender === "Laki-Laki"){
    prefixName = "Pak"
  }else if(gender === "Perempuan"){
    prefixName = "Bu"
  }
  return `${prefixName} ${name} adalah seorang ${profession} yang berusia ${age} tahun`
}


const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log(perkenalan);
console.log();
//Soal 3
console.log("---Soal 3---");
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`)
    }
  }
}

console.log(newFunction("John", "Doe").firstName);
console.log(newFunction("Richard", "Roe").lastName);
newFunction("William", "Imoh").fullName();
console.log();
//   Soal 4
console.log("---Soal 4---");
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};

let { name: phoneName, brand: phoneBrand, year } = phone;
let [colorBronze, , colorBlack] = phone.colors;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);
console.log();
// Soal 5
console.log("---Soal 5---");
let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};

buku = {
  ...buku,
  ...dataBukuTambahan,
  warnaSampul: [...buku.warnaSampul, ...warna],
};
console.log(buku);

// Soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
// Gabungkan variabel-variabel tersebut agar menghasilkan output

// saya Senang belajaR JAVASCRIPT

// jawaban soal 1
var senang =
  kataKedua.charAt(0).toUpperCase() + kataKedua.substr(1).toLowerCase();
var belajar =
  kataKetiga.substr(0, 6).toLowerCase() + kataKetiga.charAt(6).toUpperCase();
var javascript = kataKeempat.toUpperCase();
var tugas3 = kataPertama + " " + senang + " " + belajar + " " + javascript;

console.log(tugas3);

// Soal 2

var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga = "6";
var tinggiSegitiga = "7";

// Ubah lah variabel diatas ke dalam integer dan gunakan pada operasi perhitungan dari keliling persegi panjang dan luas segitiga dengan variabel di bawah ini:

// var kelilingPersegiPanjang;
// var luasSegitiga;

// lalu tampilkan dengan console.log

// Jawaban soal 2
var kelilingPersegiPanjang =
  "Keliling Persegi Panjang Adalah " +
  2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));

var luasSegitiga =
  "Luas Segitiga Adalah " +
  (1 / 2) * parseInt(alasSegitiga) * parseInt(tinggiSegitiga);

console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);

// Soal 3

// Selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:

// Kata Pertama: wah
// Kata Kedua: javascript
// Kata Ketiga: itu
// Kata Keempat: keren
// Kata Kelima: sekali

// Jawaban soal 3

var sentences = "wah javascript itu keren sekali";

var firstWord = sentences.substring(0, 3);
var secondWord = sentences.substring(4, 14);
var thirdWord = sentences.substring(15, 18);
var fourthWord = sentences.substring(19, 24);
var fifthWord = sentences.substring(25, 31);

console.log("Kata Pertama: " + firstWord);
console.log("Kata Kedua: " + secondWord);
console.log("Kata Ketiga: " + thirdWord);
console.log("Kata Keempat: " + fourthWord);
console.log("Kata Kelima: " + fifthWord);

// Soal 4

// Tentukan indeks nilai dari nilaiJohn dan nilaiDoe (tampilkan dengan console.log) dengan kondisi :

// nilai >= 80 indeksnya A
// nilai >= 70 dan nilai < 80 indeksnya B
// nilai >= 60 dan nilai < 70 indeksnya c
// nilai >= 50 dan nilai < 60 indeksnya D
// nilai < 50 indeksnya E

// Jawaban soal 4

var nilaiJohn = 80;
if (nilaiJohn >= 80) {
  console.log("Nilai John Indeksnya A");
} else if (nilaiJohn >= 70 && nilaiJohn < 80) {
  console.log("Nilai John Indeksnya B");
} else if (nilaiJohn >= 60 && nilaiJohn < 70) {
  console.log("Nilai John Indeksnya C");
} else if (nilaiJohn >= 50 && nilaiJohn < 60) {
  console.log("Nilai John Indeksnya D");
} else {
  console.log("Nilai John Indeksnya E");
}

var nilaiDoe = 50;
if (nilaiDoe >= 80) {
  console.log("Nilai Doe Indeksnya A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
  console.log("Nilai Doe Indeksnya B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
  console.log("Nilai Doe Indeksnya C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
  console.log("Nilai Doe Indeksnya D");
} else {
  console.log("Nilai Doe Indeksnya E");
}

// Soal 5

// Ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)

// Jawaban soal 5

var tanggal = 23;
var bulan = 5;
var tahun = 1996;

switch (bulan) {
  case 1: {
    bulan = "Januari";
    break;
  }
  case 2: {
    bulan = "Februari";
    break;
  }
  case 3: {
    bulan = "Maret";
    break;
  }
  case 4: {
    bulan = "April";
    break;
  }
  case 5: {
    bulan = "Mei";
    break;
  }
  case 6: {
    bulan = "Juni";
    break;
  }
  case 7: {
    bulan = "July";
    break;
  }
  case 8: {
    bulan = "Agustus";
    break;
  }
  case 9: {
    bulan = "September";
    break;
  }
  case 10: {
    bulan = "Oktober";
    break;
  }
  case 11: {
    bulan = "November";
    break;
  }
  case 12: {
    bulan = "Desember";
    break;
  }
  default: {
    bulan = "Undefined";
    break;
  }
}
var tanggalLahir ="Tanggal Lahir Saya " + tanggal + " " + bulan + " " + tahun;
console.log(tanggalLahir);

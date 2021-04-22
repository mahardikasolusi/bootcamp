function periksaAntrianDokter(nomerAntri, callback) {
  console.log(`sekarang antrian ke-${nomerAntri}`)
  setTimeout(function () {
    if(nomerAntri === 10 ) { 
      console.log("saya masuk ruangan dokter")
      callback(0)
    } else {
      console.log("saya masih menunggu")
      callback(nomerAntri+1)
    }    
  }, 1000)
}

var nomorAntriSekarang = 7


// contoh menggunakan callback hell
// periksaAntrianDokter(nomorAntriSekarang, function(nomorAntriBaru){
//   periksaAntrianDokter(nomorAntriBaru, function(nomorAntriBaru1){
//     periksaAntrianDokter(nomorAntriBaru1, function(nomorAntriBaru2){
//       periksaAntrianDokter(nomorAntriBaru2, function(nomorAntriBaru3){
//         return nomorAntriBaru3
//       })
//     })
//   })
// });


//recursive
function execute(nomorAntri){
  periksaAntrianDokter(nomorAntri, function(nomorAntriBaru){
    if (nomorAntriBaru !== 0){
      execute(nomorAntriBaru)
    }
  })
}

execute(nomorAntriSekarang)




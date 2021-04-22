function periksaAntrianDokterPromise(nomerAntri) {
  console.log(`sekarang antrian ke-${nomerAntri}`)
  return new Promise( function (resolve, reject){
    setTimeout(function () {
      if(nomerAntri === 10 ) { 
        console.log("saya masuk ruangan dokter")
        reject(0)
      } else {
        console.log("saya masih menunggu")
        resolve(nomerAntri+1)
      }    
    }, 1000)
  })
}

var nomorAntriSekarang = 7

// periksaAntrianDokterPromise(nomorAntriSekarang).then(
//   function(nomorAntriBaru){
//     periksaAntrianDokterPromise(nomorAntriBaru).then(
//       function(nomorAntriBaru){
//         periksaAntrianDokterPromise(nomorAntriBaru).then(
//           function(nomorAntriBaru){
//             periksaAntrianDokterPromise(nomorAntriBaru).then(
//               function(nomorAntriBaru){
//               }
//             ).catch(function(err){
//               console.log(err)
//             })
//           }
//         )
//       }
//     )
//   }
// )

function execute(nomorAntri){
  periksaAntrianDokterPromise(nomorAntri).then(function(nomorAntriBaru){
    if (nomorAntriBaru !== 0){
      execute(nomorAntriBaru)
    }
  }).catch(function(err){
    console.log(err)
  })
}

execute(nomorAntriSekarang)

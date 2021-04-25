var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// first option
// readBooksPromise(10000, books[0]).then((remainingTime)=>{
//     readBooksPromise(remainingTime, books[1]).then((remainingTime)=>{
//         readBooksPromise(remainingTime, books[2]).then(()=>{        
//         }).catch((err)=>{console.log(err)})
//     }).catch((err)=>{console.log(err)})
// }).catch((err)=>{
//     console.log(err)
// })

const execute = (time, index, booksQueue)=>{
    readBooksPromise(time, books[index]).then((sisaWaktu)=>{
        booksQueue = booksQueue - 1
        if (booksQueue > 0){
            execute(sisaWaktu, index+1, booksQueue)
        }
    }).catch((err)=>{
        console.log(err)
    })
}

execute(10000, 0, books.length)
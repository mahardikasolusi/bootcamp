var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// first option
// readBooks(10000, books[0], function(remainingTime){
//     readBooks(remainingTime, books[1], function(remainingTime){
//         readBooks(remainingTime, books[2], function(remainingTime){
//             readBooks(remainingTime, books[3], function(){
//             })
//         })
//     })
// })

// second option

const execute = (time, index, booksQueue) => {
    readBooks(time, books[index], function(sisaWaktu){
        booksQueue -= 1
        if (booksQueue > 0 ){
            execute(sisaWaktu, index+1 , booksQueue)
        }
    })
}

execute(10000, 0, books.length)
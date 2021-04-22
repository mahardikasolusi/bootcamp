function doAsync(){
  return new Promise(function (resolve, reject){
    var check = false
    if (check){
      resolve("berhasil")
    }else{
      reject("gagal")
    }
  })
}

async function hello(){
  try{
    var result = await doAsync()
    console.log(result)
  }catch(err){
    console.log(err)
  }
}

hello()


const firstPromise = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(
      ()=>{
        resolve("first promise")
      }, 1000
    )
  })
}

const secondPromise = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(
      ()=>{
        resolve("second promise")
      }, 1000
    )
  })
}

const thirdPromise = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(
      ()=>{
        resolve("third promise")
      }, 1000
    )
  })
}

// ini paralel selama 1 detik
const asyncParalel = () =>{
  firstPromise().then((res)=>{
    console.log(res)
  })

  secondPromise().then((res)=>{
    console.log(res)
  })

  thirdPromise().then((res)=>{
    console.log(res)
  })
}

// ini berseri selama 3 detik
const asyncSerial = async () =>{
  let a = await firstPromise()
  console.log(a)
  let b = await secondPromise()
  console.log(b)
  let c = await thirdPromise()
  console.log(c)
}

asyncParalel()
asyncSerial()

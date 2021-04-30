import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import { UserContext } from "./UserContext"

const PrivateContestant = () =>{
  const [pesertaLomba, setPesertaLomba] =  useState([])
  const [inputName, setInputName] =  useState("")
  const [currentId, setCurrentId] =  useState(null)
  const [user] = useContext(UserContext)
  let token = user ?  user.token : null

  useEffect( () => {
    const fetchData = async ()=>{
      const result = await axios.get(`https://backendexample.sanbersy.com/api/data-contestant`)
      setPesertaLomba(result.data.map(el=> {return {id: el.id, name: el.name}}))
    }
    fetchData()

  }, [])


  const handleSubmit = (event) =>{
    event.preventDefault()

    if (currentId === null){
      // untuk create data baru
      axios.post(`https://backendexample.sanbersy.com/api/data-contestant`, {name: inputName}, {headers: {"Authorization" : "Bearer "+ token}})
      .then(res => {
          let data = res.data
          setPesertaLomba([...pesertaLomba, {id: data.id, name: data.name}])
      }).catch((err)=>{
        alert(JSON.stringify(err.response.data))
      })
    }else{
      axios.put(`https://backendexample.sanbersy.com/api/data-contestant/${currentId}`, {name: inputName}, {headers: {"Authorization" : "Bearer "+ token}})
      .then(() => {
          let singlePeserta = pesertaLomba.find(el=> el.id === currentId)
          singlePeserta.name= inputName
          setPesertaLomba([...pesertaLomba])
      }).catch((err)=>{
        alert(JSON.stringify(err.response.data))
      })      
    }
    setInputName("")
    setCurrentId(null)
  }

  const handleChange = (event) =>{
    let inputValue = event.target.value
    setInputName(inputValue)
  }

  const handleEdit = (event) =>{
    let idPeserta = event.target.value
    axios.get(`https://backendexample.sanbersy.com/api/data-contestant/${idPeserta}`)
    .then(res => {
      let data = res.data
      setInputName(data.name)
      setCurrentId(data.id)
    })
  }

  const handleDelete = (event) =>{
    let idPeserta = parseInt(event.target.value)
    axios.delete(`https://backendexample.sanbersy.com/api/data-contestant/${idPeserta}`, {headers: {"Authorization" : "Bearer "+ token}})
    .then(() => {
      let newPesertaLomba = pesertaLomba.filter(el=> {return el.id !== idPeserta})
      setPesertaLomba(newPesertaLomba)
    }).catch((err)=>{
      alert(JSON.stringify(err.response.data))
    })
  }

  return(
    <>
      { pesertaLomba !== null &&
        (<div style={{width: "70%", margin: "0 auto", textAlign: "center"}}>
          <h1>Daftar Peserta Lomba</h1>
          <table className="peserta-lomba">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
                {
                  pesertaLomba.map((item, index)=>{
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>
                          <button onClick={handleEdit} value={item.id}>Edit</button>
                          &nbsp;
                          <button onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
          {/* Form */}
          <h1>Form Peserta</h1>
          <form style={{paddingBottom: "20px"}}onSubmit={handleSubmit}>
            <label>
              Masukkan nama peserta:
            </label>          
            <input type="text" value={inputName} onChange={handleChange}/>
            <button>submit</button>
          </form>
        </div>)
      }

    </>
  )
}

export default PrivateContestant
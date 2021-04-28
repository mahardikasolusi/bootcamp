import React, { useContext, useEffect } from "react"
import { ContestantContext } from "./ContestantContext"
import axios from "axios"

const ContestantList = ()=>{

  const [contestant, setContestant, currentId , setCurrentId] = useContext(ContestantContext)

  useEffect( () => {
    const fetchData = async ()=>{
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/contestants`)
      setContestant(result.data.map(el=> {return {id: el.id, name: el.name}}))
    }
    fetchData()
  }, [])

  const handleEdit = (event) =>{
    let idPeserta = event.target.value
    axios.get(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`)
    .then(res => {
      let data = res.data
      setCurrentId(data.id)
    })
  }

  const handleDelete = (event) =>{
    let contestantId = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/contestants/${contestantId}`)
    .then(() => {
      let newContestant = contestant.filter(el=> {return el.id !== contestantId})
      if (currentId === contestantId){
        setCurrentId(null)
      }
      setContestant(newContestant)
    })
  }
  return (
    <>
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
              contestant.map((item, index)=>{
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
    </>
  )
}

export default ContestantList
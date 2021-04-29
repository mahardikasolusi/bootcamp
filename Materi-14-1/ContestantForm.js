import React, {useContext, useState, useEffect} from "react"
import { ContestantContext } from "./ContestantContext"
import axios from "axios"

const ContestantForm = ()=>{
  const [inputName, setInputName] =  useState("")
  const [contestant, setContestant, currentId, setCurrentId] = useContext(ContestantContext)

  useEffect( () => {
    const fetchData = async ()=>{      
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/contestants/${currentId}`)
      setInputName(result.data.name)
    }
    fetchData()

  }, [currentId])

  const handleChange = (event) =>{
    let inputValue = event.target.value
    setInputName(inputValue)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()

    if (currentId === null){
      // untuk create data baru
      axios.post(`http://backendexample.sanbercloud.com/api/contestants`, {name: inputName})
      .then(res => {
          let data = res.data
          setContestant([...contestant, {id: data.id, name: data.name}])
      })
    }else{
      axios.put(`http://backendexample.sanbercloud.com/api/contestants/${currentId}`, {name: inputName})
      .then(() => {
          let singleContestant = contestant.find(el=> el.id === currentId)
          singleContestant.name= inputName
          setContestant([...contestant])
      })      
    }
    setInputName("")
    setCurrentId(null)
  }

  return (
    <>
      {/* Form */}
      <h1>Form Peserta</h1>
      <form style={{paddingBottom: "20px"}}onSubmit={handleSubmit}>
        <label>
          Masukkan nama peserta:
        </label>          
        <input type="text" value={inputName} onChange={handleChange}/>
        <button>submit</button>
      </form>
    </>
  )
}

export default ContestantForm
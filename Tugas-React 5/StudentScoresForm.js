import React, {useState, useEffect, useContext} from "react"
import axios from "axios"
import { StudentScoresContext } from "./StudentScoresContext"

const StudentScoresForm = ({containerStyle}) =>{
  const [input, setInput] = useState({name: "", course: "", score: 0})
  const [scores, setScores, , setFetch, currentId, setCurrentId] = useContext(StudentScoresContext)
  
  useEffect(()=>{
    const fetchData = async ()=>{
      if(currentId !== null){
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`)
        const {name, course, score} = result.data
        setInput({name, course, score})
      }
    }
    fetchData()

  },[currentId])

  const handleChange = (event) =>{
    let value = event.target.value
    let typeOfInput = event.target.name
    setInput({
      ...input
      ,[typeOfInput]: value
    })
  }



  const handleSubmit = (event) =>{
    event.preventDefault()

    const {name, course, score} = input
    
    if (currentId === null){
      // berarti create data baru
      axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name, course, score}).then(
        (res)=>{
          const data = res.data
          // set score with local data
          setScores([...scores, {name, course, score, id: data.id}])
        }
      )
    }else{
      // berarti update data yang sudah ada (dapat dari currentId)
      axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score}).then(
        ()=>{
          // trigger fetch data in use effect for set scores
          setFetch(true)
          setCurrentId(null)
        }
      )
    }

    setInput({name: "", course: "", score: 0})
  }

  return (
    <>
      {/* form */}
      <h1 style={{textAlign: "center"}}>Form Nilai Mahasiswa</h1>
      <form style={{...containerStyle, width: "60%", border: "1px solid #aaa", padding: "20px"}} onSubmit={handleSubmit}>
        
        <strong style={{width: "300px", marginBottom: "10px", display: "inline-block"}}>Nama:</strong>
        <input style={{display: "inline-block", float: "right", width: "200px"}} name="name" onChange={handleChange} value={input.name} type="text" required/>
        <br/>
        <strong style={{width: "300px", marginBottom: "10px", display: "inline-block"}}>Mata Kuliah:</strong>
        <input style={{display: "inline-block", float: "right", width: "200px"}} name="course" onChange={handleChange} value={input.course} type="text" required/>
        <br/>
        <strong style={{width: "300px", marginBottom: "10px", display: "inline-block"}}>Nilai:</strong>
        <input style={{display: "inline-block", float: "right", width: "200px"}} name="score" onChange={handleChange} value={input.score} type="number" min={0} max={100}  required/>
        <br/>
        <button style={{display: "inline-block", float: "right", marginBottom: "10px"}}>Submit</button>
        <br/>
      </form>
    </>
  )
}

export default StudentScoresForm
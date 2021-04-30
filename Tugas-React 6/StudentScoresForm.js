import React, {useState, useEffect} from "react"
import axios from "axios"
import { useParams, useHistory, Link} from "react-router-dom"

const StudentScoresForm = ({containerStyle}) =>{
  let {id} = useParams()
  let history = useHistory()
  const [fetch, setFetch] = useState(true)
  const [input, setInput] = useState({name: "", course: "", score: 0})
  
  useEffect(()=>{
    const fetchData = async ()=>{
      if (id){
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${id}`)
        const {name, course, score} = result.data
        setInput({name, course, score})
      }
    }
    if (fetch){
      fetchData()
      setFetch(false)
    }

  }, [fetch, id])

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
    
    if (id){
      // berarti update data yang sudah ada (dapat dari currentId)
      axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${id}`, {name, course, score}).then(
        ()=>{
          history.push("/tugas15")

        }
      )
    }else{
      // berarti create data baru
      
      axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name, course, score}).then(
        ()=>{
          history.push("/tugas15")
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
        <br/>
        <Link to="/tugas15">Kembali Ke Tabel</Link>
      </form>

    </>
  )
}

export default StudentScoresForm
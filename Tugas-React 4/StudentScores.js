import React, {useState, useEffect} from "react"
import axios from "axios"
import './StudentScores.css'

const StudentScores = ()=>{
  const [scores, setScores] = useState([])
  const [fetch, setFetch] = useState(true)
  const [input, setInput] = useState({name: "", course: "", score: 0, currentId: null})
  const containerStyle = {margin: "0 auto", width: "80%"}
  
  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
      
      setScores(result.data.map(el=> {
        const {id, name, course, score} = el
        return {id, name, course, score}
      }))
    }
    if(fetch){
      fetchData()
      setFetch(false)
    }

  },[fetch])

  const handleEdit = async (event)=>{
    let editedId = parseInt(event.target.value)
    const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${editedId}`)
    const {name, course, score, id:currentId} = result.data
    setInput({name, course, score, currentId})
  }

  const handleDelete = (event)=>{
    let deletedId = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${deletedId}`).then(
      ()=>{
        // clear current id checking
        let conditionalCurrentId = input.currentId === deletedId ? {currentId: null} : {}    
        setInput({...input, ...conditionalCurrentId})
        // trigger fetch data in use effect for set scores
        setFetch(true)
      }
    )
  }

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

    const {name, course, score, currentId} = input
    
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
        }
      )
    }

    setInput({name: "", course: "", score: 0, currentId: null})
  }

  const getScoreIndex = (score)=>{
    if (score >= 80) {
      return "A"
    }else if(score >= 70 && score < 80){
      return "B"
    }else if(score >= 60 && score < 70){
      return "C"
    }else if(score >= 50 && score < 60){
      return "D"
    }else{
      return "E"
    }
  }
  
  return(
    <div style={containerStyle}>
      <h1 style={{textAlign: "center"}}>Daftar Nilai Mahasiswa</h1>
      <table className="student-scores">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>          
          {
            scores.map((el, index)=>{
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{el.name}</td>
                  <td>{el.course}</td>
                  <td>{el.score}</td>
                  <td>{getScoreIndex(el.score)}</td>
                  <td>
                    <button style={{marginRight: "10px"}} onClick={handleEdit} value={el.id}>Edit</button>
                    <button onClick={handleDelete} value={el.id}>Delete</button>
                    </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
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

    </div>
  )
}


export default StudentScores
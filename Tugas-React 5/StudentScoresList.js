import React, {useContext, useEffect} from "react"
import axios from "axios"
import { StudentScoresContext } from "./StudentScoresContext"

const StudentScoresList = () =>{
  const [scores, setScores, fetch, setFetch, currentId, setCurrentId] = useContext(StudentScoresContext)
    
  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
      
      setScores(
        result.data.map(el=> {
          const {id, name, course, score} = el
          return {id, name, course, score}
        })
      )
    }
    if(fetch){
      fetchData()
      setFetch(false)
    }

  },[fetch, setFetch, setScores])

  const handleEdit = async (event)=>{
    let editedId = parseInt(event.target.value)
    setCurrentId(editedId)
  }

  const handleDelete = (event)=>{
    let deletedId = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${deletedId}`).then(
      ()=>{
        // clear current id checking
        let conditionalCurrentId = currentId === deletedId ? {currentId: null} : {}    
        setCurrentId({...conditionalCurrentId})
        // trigger fetch data in use effect for set scores
        setFetch(true)
      }
    )
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

  return (
    <>
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
    </>
  )
}

export default StudentScoresList
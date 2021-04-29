import React from "react"
import StudentScoresForm from "./StudentScoresForm"
import StudentScoresList from "./StudentScoresList"
import './StudentScores.css'
import { StudentScoresProvider } from "./StudentScoresContext"

const StudentScores = () =>{
  const containerStyle = {margin: "0 auto", width: "80%"}

  return (
    <div style={containerStyle}>
      <StudentScoresProvider>
        <StudentScoresList/>
        <StudentScoresForm containerStyle={containerStyle}/>
      </StudentScoresProvider>
    </div>
  )
}

export default StudentScores
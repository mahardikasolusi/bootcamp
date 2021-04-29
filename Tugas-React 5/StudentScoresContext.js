import React, { useState, createContext } from "react";

export const StudentScoresContext = createContext();

export const StudentScoresProvider = props => {
  const [scores, setScores] = useState([])
  const [fetch, setFetch] = useState(true)
  const [currentId, setCurrentId] = useState(null)

  return (
    <StudentScoresContext.Provider value={[scores, setScores, fetch, setFetch, currentId, setCurrentId]}>
      {props.children}
    </StudentScoresContext.Provider>
  );
};
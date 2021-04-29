import React, { useState, createContext } from "react";

export const ContestantContext = createContext();

export const ContestantProvider = props => {
  const [contestant, setContestant] = useState([]);
  const [currentId, setCurrentId] =  useState(null);

  return (
    <ContestantContext.Provider value={[contestant, setContestant, currentId, setCurrentId]}>
      {props.children}
    </ContestantContext.Provider>
  );
};
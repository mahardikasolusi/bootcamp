import React from "react"
import { ContestantProvider } from "./ContestantContext"
import ContestantForm from "./ContestantForm"
import ContestantList from "./ContestantList"

const Contestant = ()=>{
  return (
    <div style={{width: "70%", margin: "0 auto", textAlign: "center"}}>
      <ContestantProvider>
        <ContestantList/>
        <ContestantForm/>
      </ContestantProvider>
    </div>
  )
}

export default Contestant
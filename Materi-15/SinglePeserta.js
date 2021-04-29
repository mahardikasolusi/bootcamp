import React, { useState, useEffect } from "react"
import {
  useParams,
  Link
} from "react-router-dom";
import axios from "axios"

const SinglePeserta = ()=>{
  let { id } = useParams();
  const [name, setName] = useState("")
  useEffect( () => {
    const fetchData = async ()=>{
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/contestants/${id}`)
      console.log(result)
      setName(result.data.name)
    }
    fetchData()

  }, [])
  return (
    <div className="App">
      nama peserta: {name}
      <br/>
      <Link to="/materi-15">kembali ke tabel materi-15</Link>
    </div>
  )
}

export default SinglePeserta
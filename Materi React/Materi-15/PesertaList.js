import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"

const PesertaList = () =>{
  let history = useHistory();
  const [pesertaLomba, setPesertaLomba] =  useState([])

  useEffect( () => {
    const fetchData = async ()=>{
      const result = await axios.get(`http://backendexample.sanbercloud.com/api/contestants`)
      setPesertaLomba(result.data.map(el=> {return {id: el.id, name: el.name}}))
    }
    fetchData()

  }, [])


  const goToSinglePeserta = (event) =>{
    let idPeserta = event.target.value
    history.push(`/materi-15/peserta/${idPeserta}`)
  }



  return(
    <>
      { pesertaLomba !== null &&
        (<div style={{width: "70%", margin: "0 auto", textAlign: "center"}}>
          <h1>Daftar Peserta Lomba</h1>
          <table className="peserta-lomba">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
                {
                  pesertaLomba.map((item, index)=>{
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>
                          {/* versi button dengan useHistory */}
                          <button onClick={goToSinglePeserta} value={item.id}>Detail</button>
                          {/* versi dengan link to */}
                          &nbsp;
                          <Link to={`/materi-15/peserta/${item.id}`}>Detail</Link>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </div>)
      }

    </>
  )
}

export default PesertaList
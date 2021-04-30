import React, {useContext} from "react"
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";


const Header = ()=>{
  const [user, setUser] = useContext(UserContext)

  const handleLogout = ()=>{
    setUser(null)
    localStorage.removeItem("user")
  }
  
  return (
    <nav>
      <div className="logo" />
      <ul>
        <li>
          <Link to="/">materi-9</Link>
        </li>
        <li>
          <Link to="/materi-10">materi-10</Link>
        </li>
        <li>
          <Link to="/materi-11">materi-11</Link>
        </li>
        <li>
          <Link to="/materi-12">materi-12</Link>
        </li>
        <li>
          <Link to="/materi-13">materi-13</Link>
        </li>
        <li>
          <Link to="/materi-14">materi-14</Link>
        </li>
        <li>
          <Link to="/materi-15">materi-15</Link>
        </li>
        <li>
          <Link to="/materi-16">materi-16</Link>
        </li>
        { user ?  
            <>
              <li>
                <Link to="/materi-17">materi-17</Link>
              </li>
              <li>
                <div onClick={handleLogout}>logout</div>
              </li>
            </>
          :
            <>
              <li>
                <Link to="/register">register</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
            </>
        }

      </ul>
    </nav>
  )
}

export default Header
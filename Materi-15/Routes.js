import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IntroReactjsExample from "../Materi-9/IntroReactJSExample"
import HelloWorld from "../Materi-10/HelloWorld"
import UserInfo from "../Materi-10/UserInfo"
import Timer from "../Materi-11/Timer"
import Peserta from "../Materi-12/Peserta"
import HooksExample from "../Materi-13/HooksExample"
import HooksWithAxios from "../Materi-13/HooksWithAxios"
import Movie from "../Materi-14/Movie"
import PesertaList from "./PesertaList"
import SinglePeserta from "./SinglePeserta"

const Routes = () => {
  const Materi13 = ()=>{
    return (
    <>
      <Link to="materi-13-1">materi-13-1</Link>
      <br/>
      <Link to="materi-13-2">materi-13-2</Link>
    </>)
  }

  return (
    <Router>
      <div>
        <nav className="custom-navbar">
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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={IntroReactjsExample}>
            
          </Route>
          <Route exact path="/materi-10">
            <HelloWorld/>
            <UserInfo/>
          </Route>
   
          
          <Route exact path="/materi-11">
            <Timer start={5}/>
          </Route>
          <Route exact path="/materi-12">
            <Peserta/>
          </Route>
          <Route exact path="/materi-13">
            <Materi13/>

          </Route>

          <Route exact path="/materi-13-1">
            <HooksExample/>
            <br/>
            <Link to="materi-13">back to materi 10</Link>
          </Route>
          <Route exact path="/materi-13-2">
            <HooksWithAxios/>
            <br/>
            <Link to="materi-13">back to materi 10</Link>
          </Route>
          <Route exact path="/materi-14">
            <Movie/>
          </Route>
          <Route exact path="/materi-15">
            <PesertaList/>
          </Route>
          <Route exact path="/materi-15/peserta/:id">
            <SinglePeserta/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes

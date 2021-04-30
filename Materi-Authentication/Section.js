import React, { useContext } from "react";
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { UserContext } from "./UserContext";

import IntroReactjsExample from "../Materi-9/IntroReactJSExample"
import HelloWorld from "../Materi-10/HelloWorld"
import UserInfo from "../Materi-10/UserInfo"
import Timer from "../Materi-11/Timer"
import Peserta from "../Materi-12/Peserta"
import HooksExample from "../Materi-13/HooksExample"
import HooksWithAxios from "../Materi-13/HooksWithAxios"
import Movie from "../Materi-14/Movie"
import PesertaList from "../Materi-15/PesertaList"
import SinglePeserta from "../Materi-15/SinglePeserta"
import ButtonExample from "../Materi-16/ButtonExample"
import Register from "./Register";
import Login from "./Login";
import PrivateContestant from "./PrivateContestant";



const Section = () => {
  const [user] = useContext(UserContext)
  
  const PrivateRoute = ({...rest}) =>{
    if (user){
      return <Route {...rest}/>
    }else{
      return <Redirect to="/login" />
    }
  }

  const LoginRoute = ({...rest}) =>{
    if (user){
      return <Redirect to="/" />
    }else{
      return <Route {...rest}/>
    }
  }


  const Materi13 = ()=>{
    return (
    <>
      <Link to="materi-13-1">materi-13-1</Link>
      <br/>
      <Link to="materi-13-2">materi-13-2</Link>
    </>)
  }
  return (
      <div>
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
          <Route exact path="/materi-16">
            <ButtonExample/>
          </Route>
          <PrivateRoute exact path="/materi-17">
            <PrivateContestant/>
          </PrivateRoute>
          <LoginRoute exact path="/register">
            <Register/>
          </LoginRoute>
          <LoginRoute exact path="/login">
            <Login/>
          </LoginRoute>
        </Switch>
      </div>
  );
}

export default Section
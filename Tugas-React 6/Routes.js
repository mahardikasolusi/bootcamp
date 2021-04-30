import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Tugas9 from '../Tugas-9/FormBuah';
import Tugas10 from '../Tugas-10/DaftarBuah';
import Tugas11 from '../Tugas-11/Timer';
import Tugas12 from '../Tugas-12/FruitList';
import Tugas13 from '../Tugas-13/StudentScores';
import Tugas14 from '../Tugas-14/StudentScores';
import SwitchTheme from '../Tugas-15/SwitchTheme';
import { ThemeProvider } from "./ThemeContext";
import StudentScoresList from "./StudentScoresList";
import StudentScoresForm from "./StudentScoresForm";
import Nav from './Nav';

export default function App() {
  const containerStyle = {margin: "0 auto", width: "80%"}

  return (
      <>
        <Router>
          <ThemeProvider>
            <Nav/>
            <Switch>
              <Route exact path="/">
                <Tugas9 />
              </Route>

              <Route exact path="/tugas10">
                <Tugas10 />
              </Route>

              <Route exact path="/tugas11">
                <Tugas11 start={200} />
              </Route>

              <Route exact path="/tugas12">
                <Tugas12 />
              </Route>
              
              <Route exact path="/tugas13">
                <Tugas13 />
              </Route>

              <Route exact path="/tugas14">
                <Tugas14 />
              </Route>

              <Route exact path="/tugas15">
                <SwitchTheme />
                <StudentScoresList containerStyle={containerStyle}/>
              </Route>

              <Route exact path="/tugas15/create">
                <StudentScoresForm containerStyle={containerStyle}/>
              </Route>

              <Route exact path="/tugas15/edit/:id">
                <StudentScoresForm containerStyle={containerStyle}/>
              </Route>
            
            </Switch>
          </ThemeProvider>
        </Router>    
      </>
  );
}
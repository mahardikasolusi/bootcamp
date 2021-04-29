import React, {Component} from "react"
import logo from '../logo.svg';

class IntroReactJSExample extends Component{
  render(){
    return (
      <div style={{textAlign: "center"}} className="App">
        <img src={logo} className="App-logo" width="200" alt="logo" />
        <h1 style={{color: "red"}}>Halo Dunia</h1>
        <h1 className="text-blue">Halo Dunia</h1>
      </div>
    )
  }
}

export default IntroReactJSExample

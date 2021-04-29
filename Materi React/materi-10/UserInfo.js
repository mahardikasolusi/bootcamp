import React, {Component} from "react" 


class Welcome extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name}</h1>;
  }
}

class Age extends React.Component {
  render() {
    return <h1>your age is {this.props.age} years old</h1>;
  }
}



class UserInfo extends Component{
  
  render(){
    var person = [
      {name: "sarah", age: 25},
      {name: "michael", age: 30},
      {name: "john", age: 33}
    ]
    return(
     <>
      {person.map((item, index)=>{
        return(
          <div key={index} style={{
            width: "40%", 
            margin: "0 auto", 
            textAlign: "center", 
            border: "solid 1px #aaa",
            marginBottom: "10px",
            borderRadius: "20px"
          }}>
            <Welcome name={item.name} />
            <Age age={item.age} />
          </div>
        )
      })}
     </> 
    )

  }
}

export default UserInfo

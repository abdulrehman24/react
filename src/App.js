import React,{Component} from 'react';

import './App.css';
import Person from './Person/Person'
class App extends Component{
  state = {
    persons: [
      {name:"abdstate" ,age:"12"},
      {name:"azeemstate" ,age:"22"},
      {name:"hussystate" ,age:"30"}
      
    ]
    
  }

  switchNameHandler=(newName) =>{
    this.setState({
      persons: [
        {name: newName ,age:"12"},
        {name: "setStateazeemstate" ,age:"22"},
        {name: "setStatehussystate" ,age:"30"}
        
      ]
    })
  }
  nameChangeHandler= (event,newName) =>{
    this.setState({
      persons: [
        {name: newName ,age:"12"},
        {name: event.target.value ,age:"22"},
        {name: "setStatehussystate" ,age:"30"}
        
      ]
    })
} 
  render(){
    
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, 'kill the waves')}>Switch</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, '"kill the waves com"')}
        />
        <Person 
          
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
          val={this.state.persons[1].name}>
           habbit
        </Person>

        <Person 
         name={this.state.persons[2].name}
         age ={this.state.persons[2].age} 
         />
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Person name="abd" age="12"/>
//       <Person name="azeem" age="22">habbit</Person>
//       <Person name="hussy" age ="30" />
//     </div>
//   );

 
// }

export default App;

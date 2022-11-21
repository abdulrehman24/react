import React,{Component} from 'react';
import "./Person.css";
const Person=(props)=> {
  return (
    <div className="Person">
      <h1 onClick={props.click}>hi my name {props.name} is i am {props.age} {props.children} year old</h1>
      <input type="text" onChange={props.changed} value={props.val}></input>
    </div>
  );

}

export default Person;

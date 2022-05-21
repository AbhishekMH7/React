import {React, useState} from "react";

function Child(props) {
    // console.log(props.name);
    // console.log(props.n1);
    // console.log(props.obj.abhi);
    var [element,Setelement]= useState('');
   
    const btn = () =>{
      Setelement('iyer');
    props.onSubmit(element);
    }
  return(
      <div>
      <h1>hi all, {props.name},{props.e}</h1>
      <input type="button" value="click" onClick={() => btn()}></input>
      </div>
  )
}

export default Child;
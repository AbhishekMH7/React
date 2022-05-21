import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Child from './component/Child'

function App() {
  var [element,Setelement]= useState('abhi');
  const n1= 123;
  const obj={
    abhi:"34",
    jadeja:"72"
  }
  const getdata=(data)=>{
    console.log(data);
   
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{element}</h1>
        <p>{obj.abhi}</p>
       <Child name="objjj" e={obj.jadeja} onSubmit={getdata}></Child>
      </header>
    </div>
  );
}

export default App;

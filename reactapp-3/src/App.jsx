import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'
import SignUp from './Component/Sign-up';
import SignIn from './Component/Sign-in';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <div className='App-header'>
      <Navbar></Navbar>
        </div>
        <Routes>
          <Route path='Sign-in' element={<SignIn></SignIn>}></Route>
          <Route path='Sign-up' element={<SignUp></SignUp>}></Route>
        </Routes>  
       </BrowserRouter>  
       {/* <SignUp></SignUp>
        <SignIn></SignIn> */}
       
      </header>
    </div>
  );
}

export default App;

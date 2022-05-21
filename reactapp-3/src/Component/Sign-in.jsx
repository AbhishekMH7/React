import {react,useState} from 'react';
import './Sign-in.css'

function SignIn(props){
    return(
   <form>
       <div className='block'>
       <div className='div'>
           <label className="lbl">Username:</label>
           <input type="text" className="txt" placeholder="Enter email"></input>
       </div>
       <div className='div'>
           <label className="lbl" placeholder="Enter Password">Password:</label>
           <input type="password" className="txt"></input>
       </div>
       <div className='div'>
           <input type="button" value='Submit'></input>
       </div>
       </div>
   </form>
    )
}
export default SignIn;
import {react,useState} from 'react';
import './Sign-up.css'
import signIn from './Sign-in';

function SignUp(props) {
    const [form, setForm] = useState({"value1" :'', "value2": '', "value3": '', "value4": '', "value5": ''
    , "value6": '', "value7": ''}); 
    const handleFormChange = (ev, type) => {
        const formLocal = form;
        formLocal[type] = ev.target.value;
        setForm(formLocal);
        console.log(form)
    
    }
    const [div,setDiv]=useState('');
    const handlesubmit=()=>{
        console.log(form);
        // return(
        //     <signIn tosignin={form}></signIn>
        // )
    }
  return(
        <div >
            <form>
                <div >
                <label className='lbl'>Username:</label>
                <input className="txt" type="email"  
                       id="email"  
                       placeholder="Enter email"
                       onChange={(ev) => handleFormChange(ev, 'value1')}
                />
                </div>
                <br></br>
                <div >
                    <label className='lbl'>Password:</label>
                    <input className="txt" type="password" 
                        id="password" 
                        placeholder="Password"
                        onChange={(ev) => handleFormChange(ev, 'value2')}
                    />
                </div>
                <br></br>
                <div >
                    <label className='lbl'>ConfirmPassword:</label>
                    <input className="txt" type="password" 
                        id="Confirmpassword" 
                        placeholder="ConfirmPassword"
                        onChange={(ev) => handleFormChange(ev, 'value3')}
                    />
                </div>
                <br></br>
               <div>
                   <label className='lbl'>Address:</label>
                   <input className="txt" type="Text" id="Address" Placeholder="Enter Address" onChange={(ev) => handleFormChange(ev, 'value4')}></input>
               </div>
               <br></br>
               <div>
                   <label className='lbl'>City:</label>
                   <input className="txt" type="Text" id="City" Placeholder="Enter City" onChange={(ev) => handleFormChange(ev, 'value5')}></input>
               </div>
               <br></br>
               <div>
                   <label className='lbl'>State:</label>
                   <input className="txt" type="Text" id="State" Placeholder="Enter State" onChange={(ev) => handleFormChange(ev, 'value6')}></input>
               </div>
               <br></br>
               <div>
                   <label className='lbl'>Zipcode:</label>
                   <input className="txt" type="Text" id="zipcode" Placeholder="Enter zipcode" onChange={(ev) => handleFormChange(ev, 'value7')}></input>
               </div>
               <br></br>
                <input type="button" onClick={handlesubmit} value="Register"></input>
            </form>
        </div>
    )
}

export default SignUp;
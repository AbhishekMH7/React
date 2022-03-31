import React,{useState} from 'react';

const Form =(props) =>{
    const [form, setForm] = useState({"value1" :'', "value2": '', "value3": ''}); 
    const handleFormChange = (ev, type) => {
        const formLocal = form;
        formLocal[type] = ev.target.value;
        setForm(formLocal);
        console.log(form)
    
    }
    const handlesubmit=()=>{
        props.onSubmit(form);
    }
return(
    <div>
        <label>Enter input values</label><br></br>
        <input type={'text'} onChange={(ev) => handleFormChange(ev, 'value1')}></input><br></br>
        <input type='text' onChange={(ev) => handleFormChange(ev, 'value2')}></input><br></br>
        <input type='text' onChange={(ev) => handleFormChange(ev, 'value3')}></input><br></br>
        <input type='button' value='Submit' onClick={handlesubmit}></input>
    </div>
)
}

export default Form;

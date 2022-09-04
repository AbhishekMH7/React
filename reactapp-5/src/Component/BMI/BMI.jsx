import { React,useEffect,useState } from "react";
import './BMI.css'



function BMI(){
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    var [res,setRes]=useState(0);
    const [category,setCategory]=useState('');
    const [checked, setChecked] = useState(false);

    var Changevalue1=(event)=>{
         var hei=height;
         hei=event.target.value;
         console.log(hei);
         setHeight(hei);
         console.log(height);
    }
    var Changevalue2=(event)=>{
        var wei=weight;
        wei=event.target.value;
        console.log(wei);
        setWeight(wei);
        console.log(weight);
   }

   var handlesubmit=()=>{
      setChecked(true);
      console.log(checked);
      var ans=(((weight)/(height)**2)*10000).toFixed(2);
     setRes(ans);
     console.log(ans)
     
     if(ans<18.5){
         setCategory('Underweight');
     }
     else if(ans>=18.5 && ans<=22.9){
        setCategory('Healthy');
     }
     else if(ans>=23 && ans<=27.4){
         setCategory('moderate overweight');
     }
     else{
         setCategory('obese');
     }
   }
   
    return(
        <>
        <div className="top"><h1 id="cr">BMI Calculator</h1></div>
        <div><label>Enter your height in cm:</label></div>
        <div><input type="text" onChange={(event)=>Changevalue1(event)}></input></div>
        <div><label>Enter your weight in kg:</label></div>
        <div><input type="text" onChange={(event)=>Changevalue2(event)}></input></div>
        <div><input type="button" value="Submit" className="btn" onClick={()=>handlesubmit()}></input></div>
        {checked && <><p>Your BMI is: {res}</p>
        <p>You are in a {category} weight range</p>
        </>}
         </>
    )
}

export default BMI;




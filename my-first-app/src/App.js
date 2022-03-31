import logo from './logo.svg';
import './App.css';
import Form from './components/ChildComponent'
import React,{useState} from 'react';


function App() {
  const [table, setTable] = useState(''); 
  const getdata=(data)=>{
    console.log(data.value1);
    console.log(data.value2);
    console.log(data.value3);
    console.log(data.value1*data.value2*data.value3);
    
   setTable(
         <table>
            <tr>
             <th>value1</th>
             <th>value2</th>
             <th>value3</th>
           </tr>
           <tr>
            <td>{data.value1}</td>
            <td>{data.value2}</td>
            <td>{data.value3}</td>
           </tr>
         </table>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={getdata}></Form>
        {table}
      </header>
    </div>
  );
  
}

export default App;

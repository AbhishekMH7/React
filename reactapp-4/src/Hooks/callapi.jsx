import React, {useState} from 'react';
const Callapi=()=>{
    const [users, setUsers] = useState([]);
fetch('https://reqres.in/api/users?page=2')
        .then(resp => 
           resp.json()
        )
        .then(dt => {
            setUsers(dt.data)
        })
        console.log(users);
        return [users];
        
    }

    export default Callapi
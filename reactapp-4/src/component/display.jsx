import React, {useState,useEffect} from 'react';
import Callapi from "../Hooks/callapi";
function Display(){
    // useEffect(() => {
    //     setUsers(Callapi());
    //   });
      const [users] = Callapi();
      

return(
    <div>

        <table>
            <thead>
                <tr>
                    <th>
                        Email
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                </tr>
            </thead>
            <tbody>
               
                
                {users.map(user => <tr>
                    <td>{user.email}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
    );
                }

export default Display;
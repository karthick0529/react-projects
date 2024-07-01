import React, { useEffect, useState } from 'react'
import axios from 'axios'; 

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            setUsers(response.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        });
    },[]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error Message: {error}</p>
    return (
        <div>
            <h1> Users </h1>  
            
           <ul>
               {users.map(user => (
                   <li key={user.id}>
                       <h1>{user.name}</h1>  
                       <p>{user.email}</p>
                   </li>
               ))}
           </ul>
            
        </div>
    );
}

export default Users;
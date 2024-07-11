import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [greeting,setGretting] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/greeting')
    .then( res =>{
      setGretting(res.data.message)
    })
    .catch(err =>{
      console.error(err)
    })
  },[])

  return (
    <>
      <div>
      <header>
        <h1>{greeting}</h1>
        <button onClick={() => {
          axios.get('http://localhost:3000/api/content')
          .then( res =>{
            setGretting(res.data.message)
          })
          .catch(err =>{
            console.error(err)
          })
        }}>content</button>
         <button onClick={() => {
          axios.get('http://localhost:3000')
          .then( res =>{
            setGretting(res.data)
          })
          .catch(err =>{
            console.error(err)
          })
        }}>Welcome</button>
      </header>
      </div>
    </>
  )
}

export default App

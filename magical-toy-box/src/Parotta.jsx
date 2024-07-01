import React, {useState} from 'react'


function Parotta() {
    const [state , setState] = useState(0);
    const person = () => {
        setState(state+5);
    }
  return (
    <div>
        <p> Soori ate {state} parottas.</p>
        <button onClick={person}>update</button>
    </div>
  )
}

export default Parotta
import React, { useState, createContext, useContext } from 'react'


//1. creating  => createContext ✅
//2. publisher => provider -context.Provider ✅
//3. subscriber => useContext => useContext(context)

const NameContext = createContext()


function ExampleContext() {
    const [name, setName] = useState("Thomas Shelby")
    return (
        <NameContext.Provider value={name}>
            <div>
                <Sample />
                <Sample1 />
            </div>
        </NameContext.Provider>
    )
}
function Sample() {
    const nm = useContext(NameContext)

    return (
        <h1>Hi, I am {nm}</h1>
    )
}
function Sample1() {
    const name = useContext(NameContext)
    return (
        <h1>I'm a Peaky Bliner {name} boy.</h1>
    )
}

export default ExampleContext
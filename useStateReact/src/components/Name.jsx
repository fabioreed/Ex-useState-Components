import { useState } from 'react'

const Name = () => {
    const [name, setName] = useState('') //valor inicial
    
    return (
    <>
        <h2>My name is: {name}</h2>
        <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())} 
        />
    </>
    )        
}

export default Name

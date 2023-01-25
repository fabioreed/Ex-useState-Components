import { useState } from 'react'


const Number = () => {
    // 1 - valor, 2 - funcao
    const [number, setNumber] = useState(0)

    const add = () => {
        setNumber(number + 1)
    }

    const sub = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <p>My Age: {number}</p>
            <button onClick={sub}>-</button>
            <button onClick={add}>+</button>
        </div>
    )
}

export default Number

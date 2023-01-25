import { useState } from 'react'

const Car = () => {
    const [brand, setBrand] = useState('')

    return (
        <>
            <h3>My car is: {brand}</h3>
            <input type="text" onChange={(e) => setBrand(e.target.value)}/>
        </>
    )
}

export default Car

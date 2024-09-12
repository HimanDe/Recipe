import React, { useState } from 'react'
import Navbar from './Component/Navbar';

const Counter = () => {
    const [x, setx] = useState(10);

    const HandelIncrement = ()=>{
        setx(x+1)
    }
    const Handeldecrement = ()=>{
        setx(x-1)
    }
  return (
    <>
    {/* <Navbar/> */}
      this is Counter
      <p>Value: {x}</p>
      <button onClick={HandelIncrement}>Increment</button>
      <button onClick={Handeldecrement}>decrement</button>

    </>
  )
}

export default Counter

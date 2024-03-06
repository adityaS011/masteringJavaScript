import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let c=count;
  const addClicked=()=>{
    setCount(c+1);
  }
  const minusClicked=()=>{
    if(count===0) setCount(c=0);
    else setCount(c-1);
  }
  return (
    <>
      <h1>Counter Value: {count}</h1>
      <button onClick={addClicked} >Add + </button>
      <button onClick={minusClicked}>Subtract -</button>
    </>
  )
}

export default App

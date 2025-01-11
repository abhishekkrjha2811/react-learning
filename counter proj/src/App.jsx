import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addvalue = () => {
    if(count < 10) {
      setCount(count + 1)
    }
    if(count === 10) {
      alert('You have reached the maximum value')
    }
  }
  const rmvalue = () => {
    if(count >0) {
      setCount(count - 1)
    }
    
    if(count === 0) {
      alert('You have reached the minimum value')
    }
  }
  const resertvalue = () => {
    setCount(0)
  } 


  return (
    <>
      <h1>Counter value</h1>
      <h2>{count}</h2>
      <button onClick={addvalue}>+</button>
      <button onClick={rmvalue}>-</button>
      <button onClick={resertvalue}>Reset</button>
    </> 

  )
}

export default App
